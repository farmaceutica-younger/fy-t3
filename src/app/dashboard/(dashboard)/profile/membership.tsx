import { MembershipStatus } from "@prisma/client";
import Link from "next/link";
import { MembershipCard } from "~/ui/membership-card";
import { ProfilePageComponentProps } from "./types";

export const Membership = ({ data }: ProfilePageComponentProps) => {
  const profile = data.profile;
  if (!profile) {
    return null;
  }

  const membership = data.membership;

  if (!membership) {
    return (
      <div>
        <p>Non risulti essere un associato a Farmaceutica Younger!</p>
        <Link
          href="/dashboard/association/register"
          className="btn-primary btn mt-4"
        >
          Diventa associato!
        </Link>
      </div>
    );
  }

  if (membership.status === MembershipStatus.PENDING) {
    return (
      <div className="prose">
        <p>
          La tua richiesta di diventare associato è in attesa di approvazione.
          Ti contatteremo al più presto!
        </p>
      </div>
    );
  }

  if (membership.status === MembershipStatus.APPROVED) {
    return (
      <div className="prose">
        <p className="my-2">
          Il direttivo si è riunito e ha deciso di approvare la tua richiesta di
          entrare a far parte come socio dell’Associazione Farmaceutica Younger!
        </p>
        <p className="my-2">Ancora un piccolo passo ti separa da NOI 💪🏻</p>
        <p>
          Appena riceveremo l’avvenuto pagamento ti daremo il benvenuto
          ufficiale!
        </p>
        <p>
          Non vediamo l’ora di conoscerti e condividere con te i progetti e le
          attività che come associazione vogliamo portare avanti!
        </p>
        <p className="my-2">
          Complimenti ancora per l’ottimo risultato del quiz 😉
        </p>

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/api/stripe/pay-membership" className="btn-primary btn mt-4">
          Paga la quota annuale
        </a>
      </div>
    );
  }

  if (membership.status === MembershipStatus.COMPLETED) {
    return (
      <>
        <div className="prose">
          <p>
            Sei un socio a tutti gli effetti dell’Associazione Farmaceutica
            Younger! In quanto socio hai diritto di partecipare alle varie
            attività che l’associazione organizza, ti inviermo periodicamente
            newsletter ed email con le varie iniziative che organizziamo.
          </p>
          <p>
            Per rimanere aggiornato e comunicare con gli altri soci, iscriviti
            al canale telegram ufficiale dell’associazione cliccando sul bottone
            qui sotto.
          </p>
          <Link
            className="btn-primary btn-sm btn mt-4"
            target="_blank"
            href="https://stats.k.farmaceuticayounger.science/c/eyJhbGciOiJSUzUxMiIsImtpZCI6ImtleV9jbGE3YTdkaGUwMDAwMDF2Mnkzd3B6NW5yIiwidHlwIjoiSldUIn0.eyJtZXNzYWdlX2lkIjoiXHUwMDNjYkhWa2RYTXVjblZ6YzI5QVoyMWhhV3d1WTI5dC9tc2dfY2xiczhvaWxhMDA0NDAxOHozYXJpOWgwNkBrLmZhcm1hY2V1dGljYXlvdW5nZXIuc2NpZW5jZVx1MDAzZSIsImVtYWlsIjoibHVkdXMucnVzc29AZ21haWwuY29tIiwidXJsIjoiaHR0cHM6Ly90Lm1lL2pvaW5jaGF0L014dEZReG5XZEhYY0VhVG93WVpDRUEiLCJhdWQiOlsic3RhdHMiXSwiZXhwIjoxNjc5MDc1Njg2LCJpYXQiOjE2NzEyOTk2ODZ9.dJ3sy7hwrF6yXu-BIa0GWU5Jx4W15M5ZTnt1i_BV_D0aWw_svvI2QaBN-uTTA7tHN6CISFaUpryeNyq5DCfzjWK1R_pHBeE23fGHwu5GKoZ4T9IJva_7haCqOTf6q8IKoaU1dtM_PQ-OMgqJjeRrGANzZiU7lPsIXZEojEFy01m646TQIoV-KLjaTRX9DuPAusDZVyuk3r98567cRndwABOdPxA40A_qkwlS4ZKcV03hQzMKolrwQ3Im1NKLrIzu0ekCHMPk7vT-ie-8Klbp75BsAb4x0epNY2SGT5PYJL08_hhqSHNKucmmYe8M0u7CrH4wCsFR_L28-y1Yuf9U24JZv7kACDgJWzitTSUBjXfTxHqCuOCcb3asoplf0TXI0W9rvuRpTM30V_fFSy2esCIqRoJnWh0G9xyTnBGBLpAmvOYvSudmn_py3LYynuSdaD2SuW-oqRabIMGqLyWc6jJbFTh6dGdX7z9utlBm5c3JZOUcLX-Iua-ptw8kpbFjhoUMTRsBi5d-TVgB_M5n5pI-_KAuEobuQyDNe_RqPtzpMNSQRczEsPS3OZiEbncsLU0X5k1R_NDO_s2HDwfYXNCXt6pgiJpIX7i5JHsWzU_HNqNEWr5Zg2QfNtU70Iw0WjZT3fuKHHHpAYZTgc-aKpjc1nmzMpX_K_XyAXbsiTo"
          >
            Entra nella Chat Telegram!
          </Link>
        </div>
        <div className="mt-10">
          <MembershipCard
            balance={0}
            image={data.image!}
            name={data.profile?.firstName!}
            id={data.id}
          />{" "}
        </div>
      </>
    );
  }

  if (membership.status === MembershipStatus.REJECTED) {
    return (
      <div className="prose">
        <p>
          La tua richiesta di diventare associato è stata respinta. Se ritieni
          che sia un errore contatta il direttivo.
        </p>
      </div>
    );
  }

  return null;
};
