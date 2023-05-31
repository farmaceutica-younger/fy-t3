import { Event } from "src/proto/fy/blog/v1/models";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { events } from "~/server/grpc";

const RegisterPage = ({
  event,
  isOpen,
}: Awaited<ReturnType<typeof getProps>>["props"]) => {
  if (!isOpen) {
    return (
      <>
        <Header />
        <div className="prose m-auto mt-10 max-w-md px-2">
          <h2>Registrazioni chiuse!</h2>
          <p>Ci dispiace, ma le registrazione all&apos;evento sono chiuse!</p>
          <p>
            Continua a seguire Farmaceutica Younger per avere informazioni sugli
            eventi futuri.
          </p>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="prose m-auto my-10 max-w-md px-2">
        <h2>Registrati all&apos;evento {event.title}</h2>
        <p>
          Segui questi 4 semplici step per ottenere il tuo personalissimo Ticket
          di accesso all&apos;evento:
        </p>
        <ol>
          <li>
            Clicca sul bottone{" "}
            <strong>&quot;Ottieni il tuo Ticket!&quot;</strong>
          </li>
          <li>Esegui il login usando Google o Linkedin!</li>
          <li>Rispondi al questionario!</li>
          <li>
            Ti verrà generato in automatico il tuo <strong>Ticket</strong> per
            accedere all&apos;evento
          </li>
          <li>
            <strong>Condividi</strong> il ticket con la tua rete di Contatti per
            far sapere a tutti che partecipera all&apos;evento
          </li>
        </ol>
        {event.reservedOnlyToMembers && (
          <div className="not-prose my-4 rounded bg-blue-200 px-2 py-2 ring-1 ring-blue-500">
            <h4 className="font-bold text-blue-700">Attenzione</h4>
            <p className="text-blue-700">
              Evento riservato ai soci di Farmaceutica Younger.
            </p>
          </div>
        )}
        <div className="mt-2 flex">
          <Link
            href={`/events/${event.slug}/create-ticket`}
            className="btn-primary btn m-auto"
          >
            Ottieni il tuo Ticket
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ slug: string }>) {
  const slug = params?.slug;
  if (!slug) {
    return {
      notFound: true,
    };
  }

  const { event } = await events.getEventBySlug({
    slug,
  });
  if (!event) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return getProps(event);
}

const getProps = async (event: Event) => {
  const { isOpen } = await events.eventIsOpen({
    eventId: event.eventId,
  });
  return {
    props: {
      event,
      isOpen,
    },
  };
};
