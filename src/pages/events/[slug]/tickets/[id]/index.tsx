import { GetServerSidePropsContext } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Tilt from "react-parallax-tilt";
import {
  GetEventWithTicketDocument,
  GetEventWithTicketQuery,
} from "src/generated/graphql";
import { gqlCli } from "~/server/gql";
import { EventPage } from "~/ui/event";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { SEO } from "~/ui/seo";
import { Ticket } from "~/ui/ticket";
import { getEventDate } from "~/utils/dates";
import { getTicketImage } from "~/utils/ticket-image";

export const ShowTicketPage = ({
  ticket,
  frontmatter,
  imageTicket,
  source,
}: Awaited<ReturnType<typeof getProps>>["props"]) => {
  const title = `Partecipa insieme a ${ticket.firstName} all'evento di Farmaceutica Younger`;

  return (
    <>
      <Header />
      <div className="bg-pink-500">
        <SEO
          title={title}
          description={`${ticket.firstName} parteciperà a all'evento ${frontmatter.title} di Farmaceutica Younger`}
          image={imageTicket}
          author={frontmatter.author.name}
          date={new Date(frontmatter.startDate)}
          type="article"
        />

        <div className="m-auto w-full px-2 py-6 lg:flex lg:justify-evenly">
          <div className="mx-auto my-10 grid max-w-md text-center lg:mx-4">
            <h1 className="text-3xl text-gray-100">
              Partecipa insieme <br />a{" "}
              <span className="font-bold">{ticket.firstName}</span> <br />
              all&apos;evento di{" "}
              <span className="italic">Farmaceutica Younger</span>
            </h1>
          </div>
        </div>
      </div>

      {source && (
        <EventPage
          frontmatter={frontmatter}
          source={source}
          author={frontmatter.author}
        />
      )}

      <div className="grid place-content-center">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
          <Ticket
            event={{
              date: getEventDate(frontmatter.startDate!, frontmatter.endDate!),
              location: frontmatter.location,
              name: frontmatter.title,
            }}
            ticket={{
              avatar: ticket.avatar,
              name: ticket.firstName,
              role: "",
            }}
            ticketNum={ticket.ticketNum}
          />
        </Tilt>
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

  const data = await gqlCli
    .query(GetEventWithTicketDocument, {
      slug,
      ticketID: id,
    })
    .toPromise();

  const event = data.data?.getEvent;
  if (!event) {
    if (!event) {
      return {
        notFound: true,
      };
    }
  }

  return getProps(event);
};

const getProps = async (event: GetEventWithTicketQuery["getEvent"]) => {
  const { body, ...frontMatter } = event!;
  let mdxSource: MDXRemoteSerializeResult<Record<string, unknown>> | undefined;
  try {
    mdxSource = await serialize(body, {
      mdxOptions: {
        rehypePlugins: [],
      },
    });
  } catch {}

  const imageTicket = getTicketImage(event!.getTicket!, event!);

  return {
    props: {
      source: mdxSource,
      frontmatter: {
        ...frontMatter,
        startDate: frontMatter.startDate || new Date(),
        endDate: frontMatter.endDate || new Date(),
      },
      ticket: event?.getTicket!,
      imageTicket,
    },
  };
};
