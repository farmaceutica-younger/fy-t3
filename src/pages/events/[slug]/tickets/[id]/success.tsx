import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { SEO } from "~/ui/seo";
import { Ticket } from "~/ui/ticket";
import { GetServerSidePropsContext } from "next";
import Tilt from "react-parallax-tilt";
import { Author, Event, EventTicket } from "src/proto/fy/blog/v1/models";
import { blogCli, eventCli } from "src/server/context";
import { getEventDate } from "utils/dates";

export const ShowTicketPage = ({
  ticket,
  frontmatter,
}: Awaited<ReturnType<typeof getProps>>["props"]) => {
  const url = `https://www.farmaceuticayounger.science/events/${frontmatter.slug}/tickets/${ticket.ticketId}`;
  const title = `Vieni insieme a ${ticket.firstName} all'evento di Farmaceutica Younger`;

  const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`;
  const whatsappUrl = `https://api.whatsapp.com/send?&text=${title} ${url}`;
  const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${title}`;
  return (
    <>
      <Header />
      <div className="bg-pink-500">
        <SEO
          title={title}
          description={`${ticket.firstName} parteciperà a all&apos;evento ${frontmatter.title} di Farmaceutica Younger`}
          author={frontmatter.author.name}
          date={frontmatter.createdAt}
          type="article"
        />

        <div className="m-auto w-full px-2 py-6  lg:flex lg:justify-evenly">
          <div className="mx-auto my-10 grid max-w-md text-center lg:mx-4">
            <h1 className="text-3xl text-gray-100">
              Ecco il tuo ticket per l&apos;evento di{" "}
              <span className="italic">Farmaceutica Younger</span>
            </h1>
          </div>
          <div className="grid place-content-center">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <Ticket
                event={{
                  date: getEventDate(
                    frontmatter.startDate!,
                    frontmatter.endDate!
                  ),
                  location: frontmatter.location,
                  name: frontmatter.title,
                }}
                ticket={{
                  avatar: ticket.avatar,
                  name: ticket.firstName,
                  role: ticket.role,
                }}
                ticketNum={ticket.ticketNum}
              />
            </Tilt>
          </div>
        </div>
      </div>
      <div className="prose m-auto mt-10 max-w-md px-2">
        <p>
          Abbiamo mandato una mail a <em>{ticket.email}</em> per confermare il
          tuo invito, controlla nello SPAM se non ti arriva!
        </p>
        <p>
          Fai sapere alla tua rete di contatti che parteciperai a questo evento.
          Condividi il ticket tramite la tua piattaforma social preferita!
        </p>

        <div className="not-prose my-10 flex justify-evenly ">
          <div
            className="tooltip-open tooltip tooltip-info"
            data-tip="Condividi su LinkedIn"
          >
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2"
            >
              <svg
                className="h-10 w-10 text-[#0A66C2]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <div
            className="tooltip-open tooltip tooltip-bottom tooltip-success"
            data-tip="Condividi su WhatsApp"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2"
            >
              <svg
                className="h-10 w-10 text-[#25D366]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
          <div
            className="tooltip-open tooltip tooltip-info"
            data-tip="Condividi su Telegram"
          >
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2"
            >
              <svg
                className="h-10 w-10 text-[#26A5E4]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <title>Telegram</title>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowTicketPage;

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ slug: string; id: string }>
) => {
  const slug = ctx.params?.slug!;
  const id = ctx.params?.id!;
  const token = ctx.query.token! as string;

  const { event } = await eventCli.getEventBySlug({
    slug: slug,
  });
  if (!event) {
    return {
      notFound: true,
    };
  }

  const { author } = await blogCli.getAuthor({
    authorId: event.authorId,
  });
  if (!author) {
    return {
      notFound: true,
    };
  }

  const { ticket } = await eventCli.getEventTicket({
    ticketId: id,
    eventId: event.eventId,
  });
  if (!ticket || ticket.token !== token) {
    return {
      redirect: `/event/${event.slug}`,
      permanent: false,
    };
  }
  return getProps(event, author, ticket);
};

const getProps = async (event: Event, author: Author, ticket: EventTicket) => {
  const { body, ...frontmatter } = event;

  return {
    props: {
      frontmatter: {
        ...frontmatter,
        author,
      },
      ticket,
    },
  };
};
