import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import YouTube from "react-youtube";
import {
  GetNextEventsDocument,
  GetPostsPreviewDocument,
} from "~/generated/graphql";
import { gqlCli } from "~/server/gql";
import { PostsList } from "~/ui/blog";
import { CloudinaryImage } from "~/ui/cloudinary-image";
import { EventCTA } from "~/ui/cta/event";
import { GmpCta } from "~/ui/cta/gmp";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { SEO } from "~/ui/seo";

export default function Home({
  posts,
  nextEvent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <SEO />
      <Header />
      <main>
        <Silvia image="/silvia.jpg" />
        <EventCTA event={nextEvent} />
        <div className="relative sm:max-h-[2200px] sm:overflow-hidden">
          <PostsList posts={posts} title="Gli ultimi articoli" description="" />
          <div className="absolute left-0 right-0 bottom-0 z-10  hidden h-40 justify-center bg-gradient-to-t from-slate-100/[0.9] to-slate-100/[0] pt-10 md:flex">
            <div>
              <Link
                href="/a/blog"
                className="focus:shadow-outline-pink flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-pink-500 focus:border-pink-700 focus:outline-none md:py-4 md:px-10 md:text-lg"
              >
                Vedi tutti gli articoli
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <Link
            href="/a/blog"
            className="focus:shadow-outline-pink m-auto flex w-full max-w-sm items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-pink-500 focus:border-pink-700 focus:outline-none md:py-4 md:px-10 md:text-lg"
          >
            Vedi tutti gli articoli
          </Link>
        </div>
        <Associazione />
        <HeroJobs />
        <Interviews />
        <ByY />
        <GmpCta />
      </main>
      <Footer />
    </div>
  );
}

const Interviews = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-stone-100 p-10 md:flex-row md:space-y-0 md:space-x-2">
      <div className="card w-96 max-w-full bg-base-100 shadow-xl ">
        <div className="asp"></div>
        <figure>
          <CloudinaryImage
            className=""
            src="https://res.cloudinary.com/dbdvy5b2z/image/upload/f_auto,w_400/v1656171275/fy/interviste/IMAGE_2022-06-25_17_34_30_izedad.jpg"
            alt="Monica Poggio"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Intervista a Monica Poggio</h2>
          <p>
            L&apos;AD di Bayer si racconta a Farmaceutica Younger con questo
            video: un omaggio alle donne che stanno contribuendo con il loro
            talento al progresso nei campi delle scienze della vita...
          </p>
          <div className="card-actions mt-2 justify-end">
            <a
              href="https://www.youtube.com/watch?v=MB9CdK2BZgc"
              target="_blank"
              className="btn-primary btn-sm btn"
              rel="noreferrer"
            >
              Guarda il Video
            </a>
          </div>
        </div>
      </div>
      <div className="card w-96 max-w-full bg-base-100 shadow-xl ">
        <figure>
          <CloudinaryImage
            src="https://res.cloudinary.com/dbdvy5b2z/image/upload/v1656171272/fy/interviste/IMAGE_2022-06-25_17_34_28_v9hldt.jpg"
            size={500}
            alt="Massimo Scaccabarozzi"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Intervista a Massimo Scaccabarozzi</h2>
          <p>
            Presidente di Janssen Italia, Presidente di Farmindustria, Massimo
            Scaccabarozzi si racconta ai ragazzi di Farmaceutica Younger...
          </p>
          <div className="card-actions mt-2 justify-end">
            <Link
              href="/a/blog/2022/2/intervista-massimo-scaccabarozzi"
              className="btn-primary btn-sm btn"
            >
              Leggi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Silvia = ({ image }: { image: string }) => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-screen-xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:py-20">
        <svg
          className="absolute top-full left-0 translate-x-80 -translate-y-24 transform lg:hidden"
          width="784"
          height="404"
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="784"
            height="404"
            fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
          />
        </svg>

        <svg
          className="absolute right-full top-1/2 hidden translate-x-1/2 -translate-y-1/2 transform lg:block"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
          />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <CloudinaryImage
              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
              src={image}
              alt="Silvia Vernotico"
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 h-36 w-36 -translate-x-8 -translate-y-24 transform text-pink-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
            >
              <path
                strokeWidth="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-md leading-2 font-medium text-gray-700 lg:text-xl ">
                <p>
                  Benvenuto! Sono Silvia Vernotico, ideatrice e curatrice del
                  blog e presidente dell&apos;associazione{" "}
                  <span className="font-bold"> Farmaceutica Younger</span>: la
                  piattaforma Young tutta italiana rivolta a giovani laureati in
                  discipline scientifiche o appassionati dell&apos;universo
                  farmaceutico, dove conoscere le regole e i meccanismi del
                  mondo Farmaceutico e ampliare il tuo network!
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <CloudinaryImage
                      className="h-12 w-12 rounded-full"
                      src={image}
                      alt="Silvia Veernotico"
                    />
                  </div>
                  <div className="flex">
                    <div className="ml-4 lg:ml-0">
                      <div className="text-base font-medium leading-6 text-gray-900">
                        Silvia Vernotico {"     "}
                      </div>
                      <div className="text-base font-medium leading-6 text-pink-600">
                        Presidente e Founder
                      </div>
                      <div className="mt-4 space-x-2">
                        <a
                          className="rounded bg-pink-200 px-4  py-2 text-pink-600 ring-pink-800 transition-all hover:ring-2"
                          target="_blank"
                          href="https://www.linkedin.com/in/silvia-vernotico-09b35977/"
                          rel="noreferrer"
                        >
                          <span className="hidden md:inline">
                            Aggiungimi su Linkedin
                          </span>
                          <span className="md:hidden">Linkedin</span>
                        </a>
                        <a
                          className="rounded bg-pink-200 px-4  py-2 text-pink-600 ring-pink-800 transition-all hover:ring-2"
                          href="https://t.me/silvia_farmaceuticayounger"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="hidden md:inline">
                            Scrivimi su Telegram
                          </span>
                          <span className="md:hidden">Telegram</span>
                        </a>
                        <Link
                          href="/a/blog/2022/4/my-graphic-cv"
                          className="rounded bg-pink-200 px-4  py-2 text-pink-600 ring-pink-800 transition-all hover:ring-2"
                        >
                          <span className="hidden md:inline">
                            My Graphic CV
                          </span>
                          <span className="md:hidden">CV</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

const Associazione = () => (
  <div className="relative pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    <div>
      <main className="mx-auto mt-8 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"></div>
            <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-6xl sm:leading-none lg:text-5xl xl:text-6xl">
              L&apos;associazione
              <br />
              <span className="text-pink-600">Farmaceutica Younger</span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Il <span className="font-semibold ">18 settembre 2020</span>{" "}
              prende vita l&apos;associazione{" "}
              <span className="font-bold text-pink-600">
                Farmaceutica Younger
              </span>{" "}
              nata con l&apos;obiettivo di tendere una mano ai giovani che hanno
              voglia di conoscere sempre di più sul mondo del farmaceutico.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="dashboard/association/register"
                  className="focus:shadow-outline-pink flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-pink-500 focus:border-pink-700 focus:outline-none md:py-4 md:px-10 md:text-lg"
                >
                  Diventa Socio
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/associazione"
                  className="focus:shadow-outline-pink flex w-full items-center justify-center rounded-md border border-transparent bg-pink-100 px-8 py-3 text-base font-medium leading-6 text-pink-700 transition duration-150 ease-in-out hover:bg-pink-50 hover:text-pink-600 focus:border-pink-300 focus:outline-none md:py-4 md:px-10 md:text-lg"
                >
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="focus:shadow-outline relative block w-full overflow-hidden rounded-lg focus:outline-none">
                <YouTube
                  className="w-full"
                  opts={{
                    host: "https://www.youtube-nocookie.com",
                  }}
                  videoId="8FcD_v-EiVI"
                ></YouTube>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

const ByY = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-pink-500 shadow-xl lg:flex lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span>La nuova rubrica B2Young</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-pink-200">
                Farmaceutica Younger è curatrice della nuova rubrica B2Young su
                AboutPharma.
              </p>
              <Link
                href="https://www.aboutpharma.com/tag/b2young/"
                target="_blank"
                rel="external"
                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-pink-600 shadow hover:bg-pink-50"
              >
                Scopri di più su AboutPharma!
              </Link>
            </div>
          </div>
          <div className="flex-grow-0">
            <CloudinaryImage
              className="md:hidden lg:block lg:h-full lg:w-auto"
              size={1000}
              src="https://res.cloudinary.com/dbdvy5b2z/image/upload/v1669820739/fy/images/aboutpharma/B2Young_1280X720_geyynx.jpg"
              alt="B2Young"
            />
            <CloudinaryImage
              className="hidden md:block lg:hidden"
              size={1000}
              src="https://res.cloudinary.com/dbdvy5b2z/image/upload/v1669821658/fy/images/aboutpharma/B2Young_1920X480_zwp7bj.jpg"
              alt="B2Young"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroJobs = () => (
  <div className="z-1 relative overflow-hidden bg-white">
    <div className="mx-auto max-w-screen-xl">
      <div className="relative z-0 bg-white pb-8 sm:pb-16 md:z-10 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div className="px-4 pt-6 sm:px-6 lg:px-8"></div>

        <main className="mx-auto mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Trova lavoro con</span>{" "}
              <span className="block text-pink-600 xl:inline">
                Farmaceutica Younger
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Scopri gli ultimi annunci presenti sul mercato del lavoro nel
              mondo del <strong>Life Science</strong> in Italia.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="/jobs"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-100 px-8 py-3 text-base font-medium text-pink-700 hover:bg-pink-200 md:py-4 md:px-10 md:text-lg"
                >
                  Guarda gli annunci
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <CloudinaryImage
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
);

const getNextEvent = async () => {
  const startOfToday = new Date();
  startOfToday.setUTCHours(0, 0, 0, 0);

  const res = await gqlCli
    .query(GetNextEventsDocument, {
      startsFrom: startOfToday,
    })
    .toPromise();

  const events = res.data?.getEvents.edges || [];

  if (events.length === 0) {
    return undefined;
  }

  return events[events.length - 1]?.event;
};

export const getStaticProps = async () => {
  const data = await gqlCli
    .query(GetPostsPreviewDocument, {
      skip: 0,
      take: 24,
    })
    .toPromise();

  const edges = data?.data?.getBlogPosts?.edges || [];

  const posts = edges.map((e) => {
    return {
      ...e.post,
      publishedTime: new Date(e.post.publishedTime),
    };
  });

  const nextEvent = await getNextEvent();
  return {
    props: {
      posts,
      nextEvent,
    },
    revalidate: 10 * 60,
  };
};
