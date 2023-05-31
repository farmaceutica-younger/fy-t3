import { AssociationMembership, Profile, User } from "@prisma/client";
import { Session } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { ReactNode } from "react";
import { AssociationQuestionairreForm } from "~/components/questionairre/association-form";
import { ProfileForm } from "~/forms/profile/profile-form";
import { ProfileType } from "~/forms/profile/profile-schema";
import { Loading } from "~/ui/loading";
import { MembershipCard } from "~/ui/membership-card";
import { reactApi } from "~/utils/api";

const AssociatePage = () => {
  const session = useSession();
  if (session.status === "loading") {
    return "loading";
  }

  if (session.status === "unauthenticated" || !session.data) {
    return (
      <Layout>
        <WhyToAssociate />
      </Layout>
    );
  }

  return (
    <Layout>
      <RegisterWithAuth session={session.data} />
    </Layout>
  );
};

export default AssociatePage;

const WhyToAssociate = () => {
  return (
    <div className="mx-auto max-w-prose text-base lg:max-w-lg">
      <h2 className="font-semibold leading-6 text-pink-600">Diventare soci</h2>
      <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        Perchè associarsi?
      </h3>
      <p className="mt-8 text-lg text-gray-500">
        L&apos;associazione Farmaceutica Younger organizza tantissimi eventi ed
        iniziative nel mondo farmaceutica, per aiutare giovani professionisti a
        fare network e capire come muoversi nella loro professione.
      </p>
      <div className="prose-pink prose mt-5 text-gray-500">
        <p>
          Diventando socio e pagando la quota associativa aiuti Farmaceutica
          Younger a crescere e a finanziare le proprie iniziative, inoltre avrai
          i seguenti vantaggi:
        </p>

        <ul role="list">
          <li>
            Potrai partecipare gratuitamente a tutti gli eventi digitali e dal
            vivo che FY sta preparando per te, sia quelli aperti a tutti (con
            possilità di iscrizione anticipate), che gli aperitivi riservati ai
            soci.
          </li>
          <li>
            Entrare a far parte della community di soci di farmaceutica younger
            all&apos;interno della quale chiedere aiuto e condividere spunti di
            scussione e ricevere consigli.
          </li>
        </ul>

        <p>
          Inotre, potrai partecipare attivamente e contribuire alle iniziative
          associative. Come, ad esempio:
        </p>
        <ul role="list">
          <li>Diventare articolista per Farmaceutica Younger</li>
          <li>Partecipare come speaker agli eventi di FY</li>
        </ul>
        <h3>Come fare per entrare a far parte dell&apos;Associazione?</h3>
        <p>
          Ti basterà iniziare a compilare il form lasciando qualche dato
          personale. E dovrai rispondere al mini quiz per accertare la tua
          passione e la tua voglia di entrare a far parte della nostra Famiglia!
        </p>
        <p>
          Una volta completato il quiz il direttivo si riunirà nel più breve
          tempo possibile per valutare e approvare la tua richiesta di
          partecipazione. Una persona del direttivo potrebbe contattarti
          privatamente in caso servano ulteriori dettagli per valutare la tua
          candidatura. Una volta approvata, riceverai una mail
          all&apos;indirizzo fornito con i dettagli del pagamento.
        </p>
        <p>
          Al termine dell&apos;iter riceverai una mail di conferma
          dell&apos;avvenuta iscrizione all&apos;associazione.
        </p>
        <h3>Quanto costa?</h3>
        <p>
          La quota associativa annuale prevista è di <strong>20€</strong>. Se ti
          iscrivi a partire dal primo Settembre, l&apos;iscrizione varrà anche
          per l&apos;anno successivo.
        </p>
      </div>
      <div className="flex place-content-center pt-10">
        <button
          onClick={() => signIn()}
          className="btn-primary btn"
          type="button"
        >
          Voglio diventare socio
        </button>
      </div>
    </div>
  );
};

const RegisterWithAuth = ({ session }: { session: Session }) => {
  const q = reactApi.me.getAllInfo.useQuery();
  if (q.isLoading) {
    return <Loading />;
  }

  if (q.error || !q.data) {
    return <pre>{JSON.stringify(q, null, 2)}</pre>;
  }

  const profile = q.data.profile;
  const membership = q.data.membership;

  if (!profile) {
    return <CreateProfile session={session} refetch={q.refetch} />;
  }

  if (!membership) {
    return <Questionairre session={session} refetch={q.refetch} />;
  }

  if (membership.status === "PENDING") {
    return (
      <MemberQuestionairreCompiled member={membership} profile={profile} />
    );
  }

  if (membership.status === "APPROVED") {
    return <MemberPaymentPage member={membership} profile={profile} />;
  }

  if (membership.status === "COMPLETED" && !membership.toRenew) {
    return (
      <MemberPaymentCompleted
        user={q.data}
        member={membership}
        profile={profile}
      />
    );
  }

  return <MemberRenewPage member={membership} profile={profile} />;
};

const MemberRenewPage = ({
  member,
  profile,
}: {
  member: AssociationMembership;
  profile: Profile;
}) => {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Ciao, {profile.firstName}</h1>
      <p>
        Sei un socio a tutti gli effetti dell’Associazione Farmaceutica Younger!
        Ma la tua quota associativa per l&apos;anno deve essere rinnovata.
      </p>

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/api/stripe/renew-membership" className="btn-primary btn">
        Rinnova la quota annuale
      </a>
    </div>
  );
};

const MemberPaymentPage = ({
  member,
  profile,
}: {
  member: AssociationMembership;
  profile: Profile;
}) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Ciao, {profile.firstName}</h1>
      <p className="my-2">
        il direttivo si è riunito e ha deciso di approvare la tua richiesta di
        entrare a far parte come socio dell’Associazione Farmaceutica Younger!
      </p>
      <p className="my-2">Ancora un piccolo passo ti separa da NOI 💪🏻</p>
      <p>
        Appena riceveremo l’avvenuto pagamento ti daremo il benvenuto ufficiale!
      </p>
      <p>
        Non vediamo l’ora di conoscerti e condividere con te i progetti e le
        attività che come associazione vogliamo portare avanti!
      </p>
      <p className="my-2">
        Complimenti ancora per l’ottimo risultato del quiz 😉
      </p>

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/api/stripe/pay-membership" className="btn-primary btn">
        Paga la quota annuale
      </a>
    </div>
  );
};

const MemberPaymentCompleted = ({
  member,
  user,
  profile,
}: {
  member: AssociationMembership;
  profile: Profile;
  user: User;
}) => {
  return (
    <>
      <div className="prose">
        <h3>Ciao, {profile.firstName}</h3>
        <p>
          Sei un socio a tutti gli effetti dell’Associazione Farmaceutica
          Younger! In quanto socio hai diritto di partecipare alle varie
          attività che l’associazione organizza, ti inviermo periodicamente
          newsletter ed email con le varie iniziative che organizziamo.
        </p>
        <p>
          Per rimanere aggiornato e comunicare con gli altri soci, iscriviti al
          canale telegram ufficiale dell’associazione cliccando sul bottone qui
          sotto.
        </p>
        <Link
          className="btn-primary btn-sm btn mt-4"
          target="_blank"
          href="https://t.me/joinchat/MxtFQxnWdHXcEaTowYZCEA"
        >
          Entra nella Chat Telegram!
        </Link>
      </div>
      <div className="mt-10">
        <MembershipCard
          balance={0}
          id={user.id}
          image={user.image || ""}
          name={profile.firstName}
        />
      </div>
    </>
  );
};

const MemberQuestionairreCompiled = ({
  member,
  profile,
}: {
  member: AssociationMembership;
  profile: Profile;
}) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Ciao, {profile.firstName}</h1>
      <p className="my-2">Grazie per aver completato il Quiz!</p>
      <p className="my-2">
        I risultati del quiz verranno discussi con i soci fondatori e la tua
        richiesta approvata o meno nella prossima assemblea!
      </p>
      <p>
        Una volta che il direttivo avrà approvato la tua iscrizione ti invieremo
        il link di PayPal sul quale effettuare il pagamento della quota annuale
        che ti ricordo è di 20 euro.
      </p>
      <p>
        Riceverai una mail di conferma e ti daremo il benvenuto ufficiale 🤝
        nella Associazione.
      </p>
      <p> Nell&apos;attesa puoi visitare il tuo profilo!</p>
      <Link href="/dashboard/profile" className="btn-primary btn-sm btn mt-5">
        {" "}
        Vai al tuo profilo
      </Link>
    </div>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div className="">
        <img
          className="h-56 w-full object-cover lg:h-screen"
          src="https://res.cloudinary.com/dbdvy5b2z/image/upload/f_auto,c_limit,w_1080,q_auto/fy/associazione/associazione_lan3kt.jpg"
          alt="Soci Farmaceutica Younger"
        />
      </div>
      <div className="px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:h-screen  lg:max-w-7xl lg:overflow-y-scroll lg:px-8">
        <div className="lg:col-start-2 lg:pl-8">{children}</div>
      </div>
    </div>
  );
};

const CreateProfile = ({
  session,
  refetch,
}: {
  session: Session;
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  refetch: () => Promise<any>;
}) => {
  const setProfile = reactApi.me.setProfile.useMutation();

  const update = async (v: ProfileType) => {
    await setProfile.mutateAsync(v);
    await refetch();
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Bevenuto, {session.user.name}</h1>
      <p className="my-2">
        Perfavore, completa il tuo profilo per la registrazione!{" "}
      </p>
      <ProfileForm submit={update} />
    </div>
  );
};

const Questionairre = ({
  session,
  refetch,
}: {
  session: Session;
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  refetch: () => Promise<any>;
}) => {
  const setProfile = reactApi.association.me.answerQuestionairre.useMutation();

  const update = async (v: ProfileType) => {
    await setProfile.mutateAsync({ form: v });
    await refetch();
  };

  const q = reactApi.association.getQuestionairre.useQuery();

  if (q.isLoading) {
    return <Loading />;
  }

  if (q.isError) {
    return <p>error</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-semibold">Compila il Questionario</h1>
      <p className="my-2">
        Rispondi al questionario per completare la tua richiesta di diventare
        socio di Farmaceutica Younger!
      </p>
      <AssociationQuestionairreForm
        title="Quanto ne sai del mondo Farmaceutico?"
        questionairre={{
          questions: q.data.questions,
        }}
        onSumbit={update}
        submitText="Invia ✅"
      />
    </div>
  );
};
