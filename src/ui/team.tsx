import { CloudinaryImage } from "./cloudinary-image";

export const Team: React.FC<{}> = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-pink-600 sm:text-4xl">
              La Crew
            </h2>
            <p className="text-xl leading-7 text-gray-500">
              Incontra la Crew di Farmaceutica Youger, un gruppo di giovani
              appasianati che permette all&apos;associazione di crescere e di
              portare avanti i suoi progetti.
            </p>
          </div>
          <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3">
            {crew.map((member) => (
              <li key={member.name}>
                <div className="space-y-6">
                  <CloudinaryImage
                    className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                    alt={member.name}
                    width={200}
                    src={member.image}
                    height={200}
                  />
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h4>{member.name}</h4>
                      <p className="text-pink-600">{member.position}</p>
                    </div>
                    <ul className="flex justify-center space-x-5">
                      <li>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            className="text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
                            rel="noreferrer"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="h-8 w-8 text-blue-500 hover:text-blue-800"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        )}
                      </li>
                    </ul>
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

const crew = [
  {
    name: "Silvia Vernotico",
    position: "Fondatrice e Presidente",
    linkedin: "https://www.linkedin.com/in/silvia-vernotico-09b35977/",
    image:
      "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/authors/silvia_weqxvf.jpg",
  },
  {
    name: "Giorgia Bottello",
    position: "Quality Assurance",
    linkedin: "https://www.linkedin.com/in/giorgia-bottello-44772660",
    image:
      "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/authors/giorgia_ixtzta.jpg",
  },
  {
    name: "Giulia Giori",
    position: "Quality Control",
    linkedin: "https://www.linkedin.com/in/giulia-giori-623251118",
    image:
      "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/authors/giugi_dfxqoq.jpg",
  },
  {
    name: "Maurizio Cuocolo",
    position: "Studi Clinici",
    linkedin: "https://www.linkedin.com/in/maurizio-cuocolo-4685a126/",
    image:
      "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/authors/maurizio_avi6ll.jpg",
  },
  {
    name: "Irene Carnovale",
    position: "Scientist R&D",
    image:
      "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/authors/irenecarnovale_cdet9r.jpg",
    linkedin: "https://www.linkedin.com/in/irene-maria-carnovale-9900a7160/",
  },
  {
    name: "Ludovico Russo",
    position: "Fullstack Developer",
    image:
      "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/authors/Ludovico-Russo-2_kvgeih.jpg",
    linkedin: "https://www.linkedin.com/in/ludusrusso/",
  },
];
