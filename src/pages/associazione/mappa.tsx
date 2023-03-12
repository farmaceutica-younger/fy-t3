import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import { prisma } from "~/server/db";
import { UserAvatar } from "~/ui/user-icon";

type Props = InferGetStaticPropsType<typeof getServerSideProps>;

const MembersMap = dynamic(() => import("~/ui/map/location-map"), {
  ssr: false,
});

const MembersPage = (props: Props) => {
  return (
    <div>
      <Header />
      <ListMembers locations={props.locations} />
      <MembersMap markers={props.locations} />
      <Footer />
    </div>
  );
};

export default MembersPage;

const ListMembers = ({ locations }: Props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              La mappa dei soci
            </h2>
            <p className="text-xl text-gray-500">
              Scopri insieme a noi dove vivono e lavorano i soci di Farmaceutica
              Younger!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
          >
            {locations.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <UserAvatar name={person.name} src={person.image} />

                  <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.jobTitle}</p>
                      {person.linkedinUrl && (
                        <a
                          href={person.linkedinUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="h-5 w-5 text-blue-500"
                            fill="currentColor"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const locations = await prisma.memberLocation.findMany({
    include: {
      membership: {
        include: {
          profile: true,
          user: true,
        },
      },
    },
  });

  return {
    props: {
      locations: locations.map((l) => {
        return {
          ...l,
          location: l.location as any,
        };
      }),
    },
  };
};
