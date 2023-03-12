import { Profile } from "@prisma/client";
import clsx from "clsx";
import { Footer } from "~/ui/footer";
import { ZodForm } from "~/ui/form/form";
import { InputField } from "~/ui/form/input-field";
import { TextField } from "~/ui/form/text-field";
import { Header } from "~/ui/header";
import { Loading } from "~/ui/loading";
import { ProfileForm } from "~/ui/profile/profile-form";
import { EventQuestionairreForm } from "~/ui/questionairre/event-form";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Event } from "src/proto/fy/blog/v1/models";
import { eventCli } from "src/server/context";
import { reactApi, trpc } from "utils/trpc";
import { z } from "zod";

const CreateTicketPage = ({ event }: { event: Event }) => {
  const { status, data: session } = useSession();
  const router = useRouter();
  const q = trpc.me.getAllInfo.useQuery();

  if (status === "unauthenticated") {
    router.push(`/auth/signin?callbackUrl=${router.asPath}`);
    return <>redirect to login</>;
  }

  if (status === "loading" || q.isLoading) {
    return <Loading />;
  }

  if (q.error) {
    return <div>error</div>;
  }

  return (
    <>
      <Header />
      <RegisterTicket event={event} session={session!} />
      <Footer />
    </>
  );
};

export default CreateTicketPage;

export async function getServerSideProps(
  ctx: GetServerSidePropsContext<{ slug: string }>
) {
  const slug = ctx.params!.slug as string;
  const { event } = await eventCli.getEventBySlug({ slug });
  if (!event) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      event,
    },
  };
}

const RegisterTicket = ({
  event,
  session,
}: {
  event: Event;
  session: Session;
}) => {
  const [isInvited, verifyCode] = useVerifyCode();
  const q = trpc.me.getAllInfo.useQuery();
  if (q.isLoading) {
    return <Loading />;
  }
  if (q.error) {
    return <pre>{JSON.stringify(q, null, 2)}</pre>;
  }

  const membership = q.data.membership;
  const cannotAccess =
    event.reservedOnlyToMembers &&
    membership?.status !== "COMPLETED" &&
    !isInvited;
  if (cannotAccess) {
    return (
      <NotAMember
        verifyCode={({ code }) =>
          verifyCode({ invitationCode: code, eventId: event.eventId })
        }
      />
    );
  }

  const profile = q.data.profile;
  if (!profile) {
    return <CreateProfile session={session} />;
  }

  return <CreatetTicket event={event} profile={profile} />;
};

function useVerifyCode() {
  const [verfied, setVerified] = useState<boolean | undefined>(undefined);
  const q = reactApi.tickets.verifyEventInvitatioNCode.useMutation({
    onSuccess: (data) => {
      setVerified(data);
    },
  });

  return [verfied, q.mutateAsync] as const;
}

const NotAMember = ({
  verifyCode,
}: {
  verifyCode: ({ code }: { code: string }) => Promise<boolean>;
}) => {
  return (
    <div className="prose m-auto my-10 max-w-lg px-4">
      <h3>Non risulti essere socio di Farmaceutica Younger</h3>
      <p>
        Questo evento è aperto solo ai soci dell&apos;ssociazione, e tu non
        risulti essere registrato.
      </p>
      <p>Per favore, completa la tua iscrizione per procedere.</p>
      <div className="not-prose">
        <Link
          href="/dashboard/association/register"
          className="btn-primary btn-sm btn"
        >
          Diventa Socio
        </Link>
      </div>
      <p className="mt-10">O inserisci il codice di invito (se lo hai)</p>
      <ZodForm
        onSubmit={async ({ code }) => {
          const res = await verifyCode({ code });
          console.log({ res });
          if (!res) {
            return {
              code: "Codice non valido",
            };
          }
        }}
        schema={z.object({ code: z.string() })}
      >
        {({ handleSubmit, submitErrors, submitting }) => (
          <form className="not-prose" onSubmit={handleSubmit}>
            <TextField name="code" placeholder="XXXXXX" label="Codice Invito" />
            <div>
              <span className="text-sm text-red-400">{submitErrors?.code}</span>
            </div>
            <button
              className={clsx("btn-outline btn-primary btn-sm btn mt-2", {
                loading: submitting,
              })}
              type="submit"
            >
              Verifica
            </button>
          </form>
        )}
      </ZodForm>
    </div>
  );
};

const CreateProfile = ({ session }: { session: Session }) => {
  const utils = trpc.useContext();
  const setProfile = trpc.me.setProfile.useMutation({
    onSuccess: async () => {
      await utils.me.invalidate();
    },
  });

  return (
    <div className="prose m-auto my-10 max-w-lg px-4">
      <h3>Completa il profilo per procedere</h3>

      <ProfileForm
        submit={async (v) => {
          await setProfile.mutateAsync(v);
        }}
      />
    </div>
  );
};

const CreatetTicket = ({
  event,
  profile,
}: {
  event: Event;
  profile: Profile;
}) => {
  const { mutateAsync: createTicket } = trpc.tickets.createTicket.useMutation();
  const router = useRouter();

  return (
    <div className="prose m-auto my-10 max-w-md px-2">
      <div>
        <p> {profile.firstName}, sei pronto per ottenere il tuo ticket! </p>
        <p> Compila il form qui in basso!</p>
        <div>
          <EventQuestionairreForm
            questionairre={event.questionairre as any}
            title={event.title}
            onSumbit={async (value) => {
              const ticket = await createTicket({
                eventId: event.eventId,
                form: value,
              });
              await router.push(
                `/events/${event.slug}/tickets/${
                  ticket!.ticketId
                }/success?token=${ticket!.token}`
              );
            }}
            submitText="Ottieni il ticket"
          />
        </div>
      </div>
    </div>
  );
};
