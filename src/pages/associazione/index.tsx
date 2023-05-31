import { Comments } from "~/ui/comments";
import { Layout } from "~/ui/layout";
import { SEO } from "~/ui/seo";
import { Team } from "~/ui/team";
import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import YouTube from "react-youtube";
import { prisma } from "~/server/db";
import { CloudinaryImage } from "~/ui/cloudinary-image";

const MembersMap = dynamic(() => import("~/ui/map/location-map"), {
  ssr: false,
});

const Hero = () => (
  <div className="z-1 relative overflow-hidden bg-white">
    <div className="mx-auto max-w-screen-xl">
      <div className="relative z-0 bg-white pb-8 sm:pb-16 md:z-10 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div className="px-4 pt-6 sm:px-6 lg:px-8" />

        <main className="mx-auto mt-10 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              L&apos;Associazione <br />
              <span className="text-pink-600">Farmaceutica Younger</span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              <span className="font-bold text-pink-600">
                Farmaceutica Younger
              </span>{" "}
              nasce come blog di divulgazione su temi inerenti al mondo del
              farmaceutico da una idea di Silvia Vernotico nel 2017. Sempre più
              spinta dalla necessità di condividere questi temi con persone
              appassionate come lei del settore, il{" "}
              <span className=" text-pink-600">18 settembre 2020</span> prende
              vita l&apos;Associazione nata con l&apos;obiettivo di tendere una
              mano ai giovani che hanno voglia di conoscere sempre di più sul
              mondo del farmaceutico.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  href="/dashboard/association/register"
                  className="focus:shadow-outline-pink flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-pink-500 focus:border-pink-700 focus:outline-none md:px-10 md:py-4 md:text-lg"
                >
                  Diventa socio
                </Link>
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <Link
                  href="/associazione/statuto"
                  className="focus:shadow-outline-pink flex w-full items-center justify-center rounded-md border border-transparent bg-pink-100 px-8 py-3 text-base font-medium leading-6 text-pink-700 transition duration-150 ease-in-out hover:bg-pink-50 hover:text-pink-600 focus:border-pink-300 focus:outline-none md:px-10 md:py-4 md:text-lg"
                >
                  Leggi lo Statuto
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
        src="https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/associazione/associazione_l9slp8.jpg"
        alt="Associazione"
        width={1000}
        height={1000}
      />
    </div>
  </div>
);

const Principles = () => {
  const principles = [
    {
      name: "Be passionately curious",
      description:
        "La curiosità è il motore del mondo. Sii curioso di scoprire Noi e con Noi cosa il sorprendente mondo farmaceutico può offrirti.",
      img: (
        // rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <defs />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              y2="197.2"
              x2="600"
              y1="725"
              x1="600"
              id="a"
            >
              <stop stopOpacity=".3" stopColor="gray" offset="0" />
              <stop stopOpacity=".1" stopColor="gray" offset=".5" />
              <stop stopOpacity=".1" stopColor="gray" offset="1" />
            </linearGradient>
            <linearGradient
              gradientTransform="matrix(-1 0 0 1 1767 0)"
              y2="164.4"
              x2="906.6"
              y1="809.1"
              x1="906.6"
              id="c"
            />
            <linearGradient
              y2="197.2"
              x2="600"
              y1="725"
              x1="600"
              gradientUnits="userSpaceOnUse"
              id="b"
            />
          </defs>
          <path
            d="M86 55.6C83 61 83.4 68.3 84.8 74c.4 2 1 4 .5 6.2a9.5 9.5 0 01-4 6c-3.2 2.2-6.9 2.1-9.5-.1-2.3-2-3.8-5.4-6.2-7.3-4-3-9.3-1.1-14 1.8-3.4 2-7 4.7-10.1 3.2-2.2-1-3.5-4-4.2-7.1-.2-1.6-.4-3.2-1.1-4.4-.4-.7-1-1.2-1.6-1.5-5.4-3.5-12.7-.6-17.9-4.5-3.5-2.6-5.4-8.1-6-14-.7-6-.1-12.2.6-18.5a32 32 0 013.3-12.7c2.3-3.8 5.9-5.5 9-5.2 3.2.4 5.9 2.5 8.2 5 3 3.3 5.5 7.5 9.3 8.5 2.6.7 5.4-.2 8.2-.6 4.5-.8 9-.6 13.5-.4 4.3.3 8.7.6 12.7 2.2 2.8 1.2 5 3.6 7.6 5.1 1.7 1 3.6 1.1 5.2 2.5 2 1.6 3.7 4.7 2.9 8.6-.8 3.7-3.5 5.8-5.2 8.7z"
            fill="#6c63ff"
            opacity=".1"
          />
          <path
            d="M1139.3 705.6l-87.7-385.5h-32.5c-1.3-14.7-2.2-29-2.5-42.4 0 0-118 25.8-212.1-48.9s-204.7 6.5-204.7 6.5l-.5-.3v-.2.2c-7.6-5.4-113.6-78-204.2-6.1C301 303.6 183 277.8 183 277.8c-.4 13.6-1.2 28-2.6 42.8h-30.2L60.8 707s363.6 13.6 491.1 1c4.6 9.7 24.3 17 47.9 17 26.5 0 48-9.2 48.8-20.6 99.2 7.5 312.7 19.6 490.6 1.2z"
            transform="matrix(.09194 0 0 .09716 -5.2 6.3)"
            fill="url(#b)"
          />
          <g transform="matrix(.09194 0 0 .09716 .4 12)">
            <path
              fill="#6c63ff"
              d="M294.3 277.3s-147.1-32.9 40-225.4c0 0 80.8 76.5 51.2 171.6a78.2 78.2 0 01-89 54.3z"
            />
            <path
              opacity=".4"
              fill="#fff"
              d="M294.3 277.3c-3.2-.7-144-36.1 40-225.4 0 0 80.8 76.5 51.2 171.6a78.2 78.2 0 01-89 54.3z"
            />
            <path
              strokeMiterlimit="10"
              stroke="#535461"
              fill="none"
              d="M296.3 278.4s77.7-117 38.1-226.5"
            />
            <path
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#535461"
              fill="none"
              d="M899.6 391s-25.4-102.1 13-174.8a159.4 159.4 0 0017.2-99.4 268 268 0 00-12.1-47.5"
            />
            <path
              fill="#6c63ff"
              d="M941.6 23.4c-.5 12.3-24.4 47.2-24.4 47.2S896.4 33.8 897 21.4a22.4 22.4 0 0144.8 2zm34.1 70c-7.2 10-46.2 26.4-46.2 26.4s2.5-42.2 9.7-52.3a22.4 22.4 0 1136.5 25.9zm-6.6 116.9c-11.3 5-53.2-.6-53.2-.6s23.5-35.1 34.7-40.2a22.4 22.4 0 0118.5 40.8zm-25 87.3c-10.2 7-52.5 8.4-52.5 8.4s17.2-38.6 27.5-45.5a22.4 22.4 0 0125 37.1zm-61.7-177.4c8.5 9 49.5 19.7 49.5 19.7s-8.4-41.5-16.9-50.5a22.4 22.4 0 00-32.6 30.8zm-27.8 102.4c10.8 6 53 4 53 4s-20.3-37-31.2-43a22.4 22.4 0 00-21.8 39zM841.2 326c9.6 7.7 51.6 12.9 51.6 12.9s-13.9-40-23.5-47.8a22.4 22.4 0 00-28.1 34.9z"
            />
            <path
              fill="#fc6681"
              d="M941.6 23.4c-.5 12.3-24.4 47.2-24.4 47.2S896.4 33.8 897 21.4a22.4 22.4 0 0144.8 2zm34.1 70c-7.2 10-46.2 26.4-46.2 26.4s2.5-42.2 9.7-52.3a22.4 22.4 0 1136.5 25.9zm-6.6 116.9c-11.3 5-53.2-.6-53.2-.6s23.5-35.1 34.7-40.2a22.4 22.4 0 0118.5 40.8zm-25 87.3c-10.2 7-52.5 8.4-52.5 8.4s17.2-38.6 27.5-45.5a22.4 22.4 0 0125 37.1zm-61.7-177.4c8.5 9 49.5 19.7 49.5 19.7s-8.4-41.5-16.9-50.5a22.4 22.4 0 00-32.6 30.8zm-27.8 102.4c10.8 6 53 4 53 4s-20.3-37-31.2-43a22.4 22.4 0 00-21.8 39zM841.2 326c9.6 7.7 51.6 12.9 51.6 12.9s-13.9-40-23.5-47.8a22.4 22.4 0 00-28.1 34.9z"
            />
            <path
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#535461"
              fill="none"
              d="M806.8 325s106.3-89 130-134c23.6-45 53.7-83.7 53.7-83.7"
            />
            <path fill="#6c63ff" d="M976.6 207.8l-46-10.4s10.8 48.5 46 10.3z" />
            <path
              fill="#6c63ff"
              d="M906.3 158.2l26.4 39.6s-51.7 3.8-26.5-39.6zm88.4 12.3l-42-7.4s26.4 40.2 42 7.4zM932.5 135l20.8 27.2s-36.8 3.4-20.8-27.2zm41.9-5.4s35.8 1.7 40 5.2c4.1 3.4-5.3 23.4-19 20.2-13.7-3.3-21-25.4-21-25.4zm-14.3-32s14.6 26.7 14 31.8c-.5 5-22.2 10.7-26.6-8.5C943 101.7 960 97.6 960 97.6z"
            />
            <circle
              fill="#ffd037"
              transform="rotate(-72.4 988 183.3)"
              r="10"
              cy="171.7"
              cx="1059.3"
            />
            <circle
              fill="#ffd037"
              transform="rotate(-72.4 972.4 173.1)"
              r="10"
              cy="161.5"
              cx="1043.7"
            />
            <path
              fill="#6c63ff"
              d="M328.9 348s43-32-11-144c0 0-72-89 0-173 0 0-157 4-154 150s78.5 167 78.5 167z"
            />
            <path
              strokeWidth="2"
              strokeMiterlimit="10"
              stroke="#535461"
              fill="none"
              d="M288.7 348s-10.8-77-39.8-124a100.8 100.8 0 01-12.2-30.8A125.9 125.9 0 01272 75.5L318 30.9"
            />
            <path
              fill="#6c63ff"
              d="M418.4 90.9s9.9 12.9-4.5 32.4c-14.5 19.5-26.4 36-21.6 48.1 0 0 21.8-36.2 39.5-36.7 17.8-.5 6.1-22-13.4-43.8z"
            />
            <path
              opacity=".1"
              d="M418.4 90.9a16 16 0 012 4c17.3 20.3 26.5 39.3 9.9 39.8-15.5.4-34 28.1-38.5 35.1a15 15 0 00.5 1.6s21.8-36.2 39.5-36.7 6.1-22-13.4-43.8z"
            />
            <path
              fill="#ffd037"
              d="M436.8 107.3c0 4.6-.5 8.3-1.2 8.3-.6 0-1.1-3.7-1.1-8.3 0-4.5.6-2.4 1.3-2.4.6 0 1-2.1 1 2.4z"
            />
            <path
              fill="#ffd037"
              d="M443 112.8c-4 2.1-7.4 3.5-7.7 2.9-.3-.6 2.7-2.8 6.7-5 4-2.1 2.4-.5 2.7 0 .3.7 2.4-.1-1.6 2z"
            />
            <path
              fill="#6c63ff"
              d="M366.3 90.9s-10 12.9 4.5 32.4c14.4 19.5 26.3 36 21.5 48.1 0 0-21.7-36.2-39.5-36.7-17.7-.5-6-22 13.5-43.8z"
            />
            <path
              opacity=".1"
              d="M366.3 90.9a16 16 0 00-2 4c-17.4 20.3-26.6 39.3-10 39.8 15.6.4 34.1 28.1 38.6 35.1a15 15 0 01-.5 1.6s-21.9-36.2-39.6-36.7c-17.7-.5-6-22 13.4-43.8z"
            />
            <path
              fill="#ffd037"
              d="M347.9 107.3c0 4.6.5 8.3 1.1 8.3.6 0 1.1-3.7 1.1-8.3 0-4.5-.6-2.4-1.2-2.4s-1-2.1-1 2.4z"
            />
            <path
              fill="#ffd037"
              d="M341.6 112.8c4 2.1 7.4 3.5 7.7 2.9.3-.6-2.7-2.8-6.6-5-4-2.1-2.5-.5-2.8 0-.3.7-2.3-.1 1.7 2z"
            />
            <path
              fill="#e2e2ec"
              d="M98.8 263.7L11.3 642s482.1 18.1 521-7.2c0 0 299.3 30.3 535 5.9l-85.8-377.4z"
            />
            <path
              opacity=".1"
              d="M128.6 276.8L47 629.5s449.5 16.8 485.7-6.7c0 0 279 28.2 498.8 5.4l-80-351.9z"
            />
            <path
              fill="#f1f2fb"
              d="M947.2 221.7S831.6 247 739.5 174c-92.1-73.2-200.5 6.3-200.5 6.3s-108.3-79.5-200.4-6.3c-92.1 73.1-207.7 47.8-207.7 47.8-3.7 147.2-72.2 385.6-72.2 385.6S185 641.6 352 572c167-69.6 187 24.3 187 24.3s19.8-93.9 186.8-24.3c167 69.5 293.5 35.2 293.5 35.2s-68.6-238.4-72.2-385.6z"
            />
            <path
              opacity=".1"
              d="M316 599.2s152.6-34.3 223 16.2c0 0 67.7-61.4 224.8-13.5"
            />
            <ellipse fill="#e8eaf8" ry="20.8" rx="47.9" cy="638.9" cx="539" />
            <path opacity=".1" d="M538.6 179.7s34.3 174.3.9 419.9" />
            <path
              opacity=".1"
              strokeWidth="4"
              strokeMiterlimit="10"
              stroke="#000"
              fill="none"
              d="M164 276.4s71.8 16.7 134 0 176.5-71.4 214 0M164 307s71.8 16.6 134 0c62.2-16.8 197-15.9 214 0m-348 54s71.8 16.8 134 0c62.2-16.6 176.5-71.3 214 0M164 392s71.8 16.7 134 0 197-15.8 214 0m402.1-115.5s-71.9 16.7-134 0c-62.3-16.7-176.5-71.4-214 0M914 307s-71.9 16.6-134 0c-62.3-16.8-197-15.9-214 0m348 54s-71.9 16.8-134 0c-62.3-16.6-176.5-71.3-214 0M914 392s-71.9 16.7-134 0c-62.3-16.7-197-15.8-214 0"
            />
            <path
              fill="#6c63ff"
              d="M915.6 717c3-2.3 5.8-5 6.7-8.3a7 7 0 00-4.7-8.4c-4.3-1.4-9 1-12.4 3.5-3.5 2.5-7.5 5.3-12 4.8 4.6-3.4 7-9 5.6-14a5.4 5.4 0 00-1.6-2.9c-2.4-2-6.7-1.2-9.6.5-9 5.2-11.6 15.3-11.7 24.4-.9-3.3-.1-6.7-.1-10 0-3.4-1.2-7.2-4.7-9a16.6 16.6 0 00-7-1.3c-4.1-.1-8.7.2-11.5 2.6-3.5 3-2.6 8.2.5 11.5 3 3.4 7.6 5.5 11.8 7.8 3.2 1.7 6.5 3.8 8.5 6.6a6 6 0 01.6 1.1h25.7a73.8 73.8 0 0015.9-9z"
            />
            <path
              fill="url(#c)"
              transform="translate(-60.8 -59.8)"
              d="M798.8 416.7l.7 4-.7 1.2c-8.2 13.8-9.4 33.7-8.7 50a163.6 163.6 0 006.9 38.8 181.4 181.4 0 017 50.4 36.6 36.6 0 0011.5 8.3l.6 2a204.4 204.4 0 017.7 38.7l2.5 32.6s19.8 74 25.8 87.7c4.3 9.8 3.4 30 2.5 40.8-2.6 7.3-5.7 14.3-8.5 15-5 1.4-10 13.5-2.7 19.5a11.6 11.6 0 001.7 1.2l.3.2.5.3.8.3.4.2.9.2.3.1 1.2.4a21.8 21.8 0 0014.9-2.4 30 30 0 0014-6.7l-.1 5.2h6l-.3-10.4 1.7-2s.2-6.3.8-13.6l-.4 23.5h6l-1.6-43.4a7 7 0 011.2-1.8c5-5-3.7-21-8.1-23.8 2-10.6 9.6-25.9 18.4-55.2 12.9-43-3.4-85.1-3.4-85.1v-33c4.3-1.9 6.8-3.2 6.8-3.2s-6-35.2 0-60.1a93.3 93.3 0 001.7-44.1l7.8-26.4 6-61.9a369.3 369.3 0 003.4-26.5c1.1-12.6 1-21 .2-26.5a42.1 42.1 0 00.3-7.6 30 30 0 00.2-4l2.5-3a43 43 0 005.4-8.5c6.6-12.5 6.8-27.7-2.4-38.7-5.7-6.8-7.5-14-12.4-21.3-4.5-6.6-5.3-14.5-6.4-22.1a270.7 270.7 0 00-5.5-28c-.7-2.8-4.5-4.5-6.4-6.7-3.6-4.4-14.2-4.3-20.3-5.2-10.3-1.7-21.4-3.2-30.7.9-6.5 2.8-11.2 7.9-16.3 12.4-5.4 4.8-16.6 7.2-18.4 13-1.5 2.2-1.6 5 1 8.7 2.6 3.6 6.6 6.1 10.3 8.8l1.4 1a36.5 36.5 0 0019.8 38.7l-.3 1.9a115.8 115.8 0 01-4.5 16.5c-1.1 3.3-14 9.1-23 12.8a11.5 11.5 0 00-3.7-2.5c-6.9-1.7-30 11.2-31.8 15.5-.4 1.2.8 4.5 2.9 8.7a31 31 0 00.9 5.6c-.5 8.8.4 23 4.8 45.8zm96.5 9.7l-1-2c-9.5-19.2-15.2-50.4-1.5-69l3.6.3c.9 25.3.4 67 .4 67l-1.5 3.7zm-34 147.1l6.3 31.4a82.5 82.5 0 01-.5 36.3L859 617l-1.9-42.6-.1-1.8 3.9-.7z"
            />
            <path
              fill="#fdc2cc"
              d="M806.7 543.2a81.2 81.2 0 01-.5 35.8 46.3 46.3 0 01-2 6.5l2.3 92.7.3 10.5a52.9 52.9 0 006.4 1 29 29 0 006 0c2-.3 3.7-.9 4.7-2 1-1.2 1.1-3-.2-5.7a17 17 0 01-1.7-9.6l.5-2.8c2-10.5 9.4-25.5 18.1-54.4 12.7-42.3-3.4-83.8-3.4-83.8v-39l-41.4-4.1a2564 2564 0 0011 55z"
            />
            <path
              opacity=".1"
              d="M806.7 543.2a81.2 81.2 0 01-.5 35.8 46.3 46.3 0 01-2 6.5l2.3 92.7.3 10.5a52.9 52.9 0 006.4 1 29 29 0 006 0c2-.3 3.7-.9 4.7-2 1-1.2 1.1-3-.2-5.7a17 17 0 01-1.7-9.6l.5-2.8c2-10.5 9.4-25.5 18.1-54.4 12.7-42.3-3.4-83.8-3.4-83.8v-39l-41.4-4.1a2564 2564 0 0011 55z"
            />
            <path
              fill="#fdc2cc"
              d="M749.2 492.5a127 127 0 016.9 17.8 201.2 201.2 0 017.5 38l2.5 32.2s19.5 72.7 25.4 86.2c4.2 9.7 3.3 29.6 2.4 40.3l-.7 7.1 8.6-10.5 11.3-14 5.2-6.2 1.1-1.4a52 52 0 01-3.3-8.9 151 151 0 01-5.1-28.3c-2.6-26.2-3.4-61.8-3.4-61.8l-1.4-4-8-23.9-1.8-42-.7-15.5z"
            />
            <path
              fill="#5f5d7e"
              d="M814.6 675a60.2 60.2 0 00-10 19.9c-2.7 9.1-7.4 23.2-11.4 24.3-6 1.7-11.9 18.6 3.4 22 15.2 3.4 27.9-13.5 27.9-13.5s.8-29.6 5.9-34.7c5-5-4.2-22-8.5-23.7-1.7-.7-4.5 2.1-7.3 5.7z"
            />
            <path
              opacity=".1"
              d="M791.5 738.7a20.4 20.4 0 0011.9-1.1 26.6 26.6 0 0016.6-22.8c.7-9 2.2-21.3 5.3-24.4 4-4-1-15.4-5.3-20.8a2.3 2.3 0 012-.3c4.2 1.7 13.5 18.6 8.4 23.7-5 5-6 34.7-6 34.7s-12.6 16.9-27.8 13.5a14 14 0 01-6-2.8l.9.3z"
            />
            <path
              fill="#5f5d7e"
              d="M829.2 693.7l1.6 43.7H825l.8-43.7a1.7 1.7 0 011.8-1.6 1.7 1.7 0 011.7 1.6z"
            />
            <path
              opacity=".1"
              d="M829.2 693.7l1.6 43.7H825l.8-43.7a1.7 1.7 0 011.8-1.6 1.7 1.7 0 011.7 1.6z"
            />
            <path
              fill="#5f5d7e"
              d="M807 677.5a60.2 60.2 0 00-10 19.9c-2.7 9.2-7.5 23.2-11.4 24.3-6 1.7-11.9 18.6 3.4 22 15.2 3.4 27.9-13.5 27.9-13.5s.8-29.6 5.9-34.7c5-5-4.2-22-8.5-23.7-1.7-.6-4.5 2.1-7.3 5.7z"
            />
            <path
              opacity=".1"
              d="M783.9 741.2a20.4 20.4 0 0011.9-1.1 26.6 26.6 0 0016.6-22.8c.7-9 2.2-21.2 5.3-24.3 4-4-1-15.4-5.3-20.9a2.3 2.3 0 012-.3c4.2 1.7 13.5 18.6 8.4 23.7-5.1 5-6 34.7-6 34.7S804.3 747 789 743.7a14 14 0 01-6.1-2.8l1 .3z"
            />
            <path
              fill="#5f5d7e"
              d="M821.6 696.2l1.6 43.7h-6l.9-43.7a1.7 1.7 0 011.7-1.6 1.7 1.7 0 011.8 1.6z"
            />
            <path
              opacity=".1"
              d="M821.6 696.2l1.6 43.7h-6l.9-43.7a1.7 1.7 0 011.7-1.6 1.7 1.7 0 011.8 1.6z"
            />
            <path
              fill="#fdc2cc"
              d="M750 227.7L784 281l39.7 5s24.6-48.1 23.7-50.7c-.8-2.5-13.5-7.6-25.3-16.9-11.9-9.3 2.5-48.2 2.5-48.2l-39 3.4.5 1.5c1.5 6.6 1 13.9-.2 20.3a114 114 0 01-4.5 16.2c-1.7 5.1-31.3 16.1-31.3 16.1z"
            />
            <path
              opacity=".1"
              d="M795.7 488.3l4.8 24a194.1 194.1 0 0036.7-11.7v-8.1zm-46.5 4.2a127 127 0 016.9 17.8 71.2 71.2 0 0040.3 2.8l-.7-15.6z"
            />
            <path
              fill="#d39999"
              d="M739 363c-8 13.6-9.3 33.2-8.5 49.3a161 161 0 006.8 38.2 178.5 178.5 0 016.9 49.6c28.7 31.3 99.8-4.2 99.8-4.2s-6-34.7 0-59.2c4-17.1 5-32.1.8-46.5a73.3 73.3 0 00-8.4-18.7 67.6 67.6 0 01-3.3-5.9c-9.8-19.8-15.5-52.3.3-70.3a32.9 32.9 0 015.5-5c13.7-10 20-21 22.6-30.3a40.8 40.8 0 001-18c-1.6-9.2-25.3-17.7-25.3-17.7.8 28-34.7 51.6-34.7 51.6s-40.6-52.4-47.4-54.1c-6.7-1.7-29.6 11-31.3 15.2-1.7 4.2 18.6 35.5 18.6 35.5S755.1 336 739 363z"
            />
            <path
              opacity=".1"
              d="M838.9 290.3c13.7-10 20-21 22.6-30.4-.7-14-4-16.1-4-16.1s-28 27-25.4 36.4c.6 2.1 1 7.7 1.3 15.1a32.9 32.9 0 015.5-5zm-47.4 192.9c6 17.8 35.5-13.6 36.4-27 .5-8.7 10-42.7 16.9-66a73.3 73.3 0 00-8.5-18.7 67.6 67.6 0 01-3.2-5.8c-3.2 7.9-16.1 40.2-15.4 49.8.9 11-5 27-5 27s-27.1 23-21.2 40.7z"
            />
            <path
              fill="#fdc2cc"
              d="M859.2 243.8s9.3 5.9 0 62.6l-6 60.9s-22.8 75.3-23.6 88.8c-.9 13.5-30.5 44.8-36.4 27-6-17.7 21.1-40.5 21.1-40.5s6-16.1 5.1-27.1c-.8-11 16-51.6 16-51.6s1-74.4-1.6-83.8c-2.5-9.3 25.4-36.3 25.4-36.3z"
            />
            <path
              opacity=".1"
              d="M734 237s-11 2.5 0 59.2l6.7 61.8s15.3 88.8 14.4 99c-.8 10.2 33 36.4 35.5 22 2.6-14.4-16.9-38-16.9-38s-8.5-18.7-8.5-53.4l-1.6-28L751.7 259z"
            />
            <path
              fill="#fdc2cc"
              d="M732.3 237s-11 2.5 0 59.2L739 358s15.2 88.8 14.4 99c-.8 10.2 33 36.4 35.5 22 2.6-14.4-16.9-38-16.9-38s-8.5-18.7-8.5-53.4l-1.6-28L750 259z"
            />
            <path
              opacity=".1"
              d="M726.8 240s-5.1 27 30.4 36.3c35.6 9.4-4.2-32.1-4.2-32.1s-13.5-20.3-26.2-4.2z"
            />
            <path
              fill="#d39999"
              d="M727.6 239.1s-5 27 30.5 36.4c35.5 9.3-4.2-32.2-4.2-32.2s-13.6-20.3-26.3-4.2z"
            />
            <path
              opacity=".1"
              d="M863 240s5 27-30.5 36.3c-35.5 9.4 4.2-32.1 4.2-32.1s13.5-20.3 26.3-4.2z"
            />
            <path
              fill="#d39999"
              d="M862.1 239.1s5.1 27-30.4 36.4c-35.6 9.3 4.2-32.2 4.2-32.2s13.5-20.3 26.2-4.2z"
            />
            <path
              opacity=".1"
              d="M785.8 195.4c4.7 1.4 9.9-9.6 15.4-9.6 5.9 0 11.4 11.7 16.3 9.2a146.6 146.6 0 016.1-23.1l-37.6 3.3c1.5 6.5 1 13.8-.2 20.2z"
            />
            <circle fill="#fdc2cc" r="36" cy="161.3" cx="802.1" />
            <path
              opacity=".1"
              d="M755 145.8c2.6 3.5 6.5 6 10.2 8.6a111 111 0 0112.8 10.8 37.9 37.9 0 017.2 8.9 40.5 40.5 0 013.6 17.2l3.5 60.5c.2 4 .4 8-.6 12a41 41 0 01-4.3 9.5 83.1 83.1 0 01-16.8 23c-2.5 2.1-5.5 4.9-4.2 7.7 1 2.3 4.3 3 7.1 3.3 11.8 1.6 24.8 3 34.7-2.8 3.7-2.1 6.8-5.2 11-6.6 5.8-1.8 12.2.1 18.4.1 6.6 0 12.9-2.2 19-4.3a6.8 6.8 0 003.1-1.8 5.2 5.2 0 001-2.4c.9-4.9 1.7-10 .2-14.8-1.6-5.2-6-9.7-6.5-15-.6-7.6 6.3-13.7 11.3-19.8 10.5-13.1 12.9-32 2-44.9-5.6-6.6-7.3-13.8-12.1-20.9-4.5-6.5-5.3-14.3-6.4-21.8a266.5 266.5 0 00-5.4-27.6c-.7-2.7-4.4-4.3-6.2-6.5-3.6-4.3-14-4.2-20-5.1-10.1-1.6-21-3.1-30.3.8-6.4 2.8-11 7.8-16 12.3-7 6.3-24.2 8.3-16.2 19.6z"
            />
            <path
              fill="#865a61"
              d="M756 144c2.4 3.6 6.4 6 10 8.8a111 111 0 0112.9 10.7 37.9 37.9 0 017.1 8.9 40.5 40.5 0 013.6 17.2l3.5 60.5c.3 4 .5 8-.5 12a41 41 0 01-4.4 9.5 83.1 83.1 0 01-16.7 23c-2.5 2.1-5.5 5-4.2 7.7 1 2.3 4.3 3 7.1 3.4 11.8 1.5 24.8 2.9 34.7-2.8 3.7-2.2 6.8-5.3 11-6.6 5.8-1.9 12.2 0 18.4 0 6.6 0 12.9-2.2 19-4.3a6.8 6.8 0 003.1-1.8 5.2 5.2 0 001-2.4c.8-4.9 1.7-10 .2-14.8-1.6-5.2-6-9.7-6.5-15-.6-7.6 6.3-13.7 11.2-19.8 10.6-13 13-32 2.1-44.9-5.6-6.6-7.3-13.8-12.2-20.9-4.4-6.5-5.2-14.3-6.3-21.7a266.5 266.5 0 00-5.4-27.7c-.7-2.7-4.4-4.3-6.3-6.5-3.5-4.3-14-4.2-20-5.1-10-1.6-21-3.1-30.2.8-6.4 2.8-11 7.8-16 12.3-7.1 6.3-24.3 8.3-16.3 19.6z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Think perpendicular!",
      description:
        " Un punto di vista diverso è la chiave del successo. Guardare le cose che ci circondano tutti i giorni da un’altra prospettiva potrà condurci su sentieri inesplorati.",
      img: (
        // rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 100 100"
        >
          <defs />
          <g transform="matrix(.09875 0 0 .09875 0 8.3)">
            <path
              d="M957 270.3c0 35.2-8.3 64.1-22.8 89a177.7 177.7 0 01-16.2 23.2C865 447.5 766.1 483 677 540.6c-263.5 170-292-102.4-280.1-270.3a299.5 299.5 0 0173-177.3 278.2 278.2 0 0128.5-28C546 24.5 607.3 0 677 0 796.2 0 898 72 938.4 173.3a261.9 261.9 0 0118.6 97z"
              fill="#6c63ff"
            />
            <path
              d="M736.6 61L469.9 93a278.2 278.2 0 0128.4-28zm197.6 298.2a177.7 177.7 0 01-16.2 23.3L689.6 355zm13.6-158L560.6 151l377.8 22.3a260.4 260.4 0 019.4 28z"
              fill="#d0cde1"
            />
            <path
              d="M423 72v2a28 28 0 11-52.7-15 25.7 25.7 0 012-3.4A28 28 0 01423 69.7l.1 2.3z"
              fill="#6c63ff"
            />
            <path
              d="M423 72v2l-42-5 42 .7V72zm-10 14.1l-38.7 4.7a28 28 0 01-3-4zm-11-31L370.3 59a25.7 25.7 0 012-3.3z"
              fill="#d0cde1"
            />
            <path
              d="M806.8 576.1l-1 1.8a28 28 0 11-39.5-38 25.7 25.7 0 013.4-2 28 28 0 0138 36.2 25 25 0 01-1 2z"
              fill="#6c63ff"
            />
            <path
              d="M806.8 576.1l-1 1.8-34.7-24.1 36.6 20.3a25 25 0 01-1 2zm-15.5 7.8l-36.4-14a28 28 0 01-.8-5zm4.8-32.5l-29.8-11.5a25.7 25.7 0 013.4-2z"
              fill="#d0cde1"
            />
            <path
              d="M1005 93.5c.6.4 1 1 1.4 1.5a28 28 0 11-48.2 26 25.7 25.7 0 01-.9-3.9 28 28 0 0146.1-25.2 24.5 24.5 0 011.7 1.6z"
              fill="#6c63ff"
            />
            <path
              d="M1005 93.5c.6.4 1 1 1.4 1.5L973 120.6l30.5-28.7a24.5 24.5 0 011.7 1.6zm2.8 17L983.3 141a28 28 0 01-5-.8zM978.3 96l-20.1 25a25.7 25.7 0 01-.9-3.9z"
              fill="#d0cde1"
            />
            <path
              d="M479.8 609.5s61.4 2.5 61.4 17.9c0 15.3-69.1 0-69.1 0z"
              fill="#a0616a"
            />
            <path
              d="M387.6 845l-115.2-7.7-5.1-61.4-25.6 53.7L129 814.3c2.6-97.3 43.6-192 46.1-204.8 2.6-12.8 8.7-65.7 8.7-65.7 11.2-23.8 69.8-26 115.8-23.9 19 1 36 2.6 46.3 3.7l11 1.4c18.3 18.9 30.2 44.7 37.4 73.5 26.3 103.7-6.7 246.5-6.7 246.5z"
              fill="#2f2e41"
            />
            <circle cx="259.6" cy="187" r="64" fill="#a0616a" />
            <path
              d="M216 202.4s-17.8 79.3-46 102.4c-28.2 23 110 0 110 0s-30.6-51.2-7.6-74.3c23-23-56.3-28.1-56.3-28.1z"
              fill="#a0616a"
            />
            <path
              d="M346.6 530l-42.4 4.8L185.4 548l-1.6-4.2c-8.6-23.6-50.2-138-54.8-172.4-5-38.5 48.7-84.5 48.7-84.5s51.2-10.3 66.5-10.3c15.4 0 76.8 23 76.8 23l23 206.2 2 17.8z"
              fill="#d0cde1"
            />
            <path
              d="M394.3 598.5l-86-50.5-4.1-13.2-4.6-14.9c-10-31.9-26.6-84.5-40-123-20.5-58.8 79.4 105 79.4 105l5 3.9 2 17.8 10.9 1.4c18.3 18.9 30.2 44.7 37.4 73.5z"
              opacity=".1"
            />
            <path
              d="M280 304.8s-25.5 33.3-5 92.2c20.4 58.8 48.6 151 48.6 151l148.5 87 20.5-25.5-138.3-107.6s-5-194.6-30.7-202.2c-25.6-7.7-43.5 5-43.5 5z"
              fill="#d0cde1"
            />
            <path
              d="M153.3 528.8s35.9 74.3 51.3 66.6c15.3-7.7-38.4-84.5-38.4-84.5z"
              fill="#a0616a"
            />
            <path
              d="M149.5 325.3L13.8 437.9s-51.2 35.9 43.5 61.5c94.8 25.6 102.5 41 102.5 41s10.2-33.4 23-28.2L72.7 458.4l89.6-53.8z"
              fill="#d0cde1"
            />
            <path
              d="M95 239.5c7.1-3.5 22.8-10.6 36.2-19.2-1-27.9 2.5-53.2 12.6-66.6 5.6-12.8 17.5-25.7 26.8-35.8 22.7-24.8 73.2-38.6 82.1-26.2 67.6 1.3 74.7 54.3 74.7 54.3-.3 22.2-23.3 22.9-43.5 22 1.8 15.2-3 31-17 38-26.7 13.2-34.7 30.6-21.3 42.6 13.3 12 37.3 44 5.3 52-32 8-36 24-26.7 30.7 9.4 6.7-21.3-12-21.3-12s-5.4 32-33.4 24c-2.5-.7-5-2.6-7.4-5.3-7.6 8.3-14.4 13.2-19.4 13.2-29.2.2-25.7-32-25.7-32s-34.6 9.6-23.8 5.7c10.8-3.9 11.3-20.4-17.4-36.7-28.7-16.3 3-40.7 19.2-48.7z"
              fill="#2f2e41"
            />
            <path
              d="M452.4 323.2h-.5l1.2 4.2a113.2 113.2 0 004.6 17.7l33.2 126.3a21.4 21.4 0 0017.5 15.7l67.7 10.5a21.4 21.4 0 0022.2-11l64.4-120.3a113 113 0 005.5-10.3l2.2-4.1h-.4a113.8 113.8 0 10-217.6-28.7z"
              fill="#3f3d56"
            />
            <path
              d="M580.3 505.9a23.3 23.3 0 01-3.6-.3l-70.8-11a23.4 23.4 0 01-19-17.1l-34.8-132a119 119 0 01-4.9-18.6l-.8-5.8a120 120 0 01137.4-133.9l-.4 2a118 118 0 00-134.9 133l.7 4.3a118.3 118.3 0 004.8 18.4l34.8 132a21.4 21.4 0 0017.4 15.7l70.8 11a21.4 21.4 0 0022.1-11l1.8 1a23.4 23.4 0 01-20.6 12.3z"
              fill="#d0cde1"
            />
            <path
              fill="#d0cde1"
              d="M555.1 469.6l43.1-117.7 2.5.9-43.1 117.6zM525.3 341l2.6-.1 5.5 125.2-2.6.1z"
            />
            <path
              d="M574.3 565.7l-90.8-14a2.6 2.6 0 01.8-5.1l90.8 14a2.6 2.6 0 11-.8 5.1zm2.3-19.3l-90.7-14a2.6 2.6 0 11.7-5.1l90.8 14a2.6 2.6 0 11-.8 5.1zm2.3-19.2l-90.7-14a2.6 2.6 0 01.8-5.2l90.7 14a2.6 2.6 0 01-.8 5.2z"
              fill="#3f3d56"
            />
            <path
              d="M526 577c18 2.7 34.2-5 36.2-17.4L497 549.5c-2 12.4 11 24.6 29 27.4z"
              fill="#3f3d56"
            />
            <path
              d="M558.7 327.1c-3.9-.6-7-3.7-8.8-5.7l-1.7-2c-2-2.6-4-5-6.7-6.3-6-2.8-13 1.1-19 5.3l-1.4-2.2c6.6-4.5 14.4-8.8 21.5-5.4 3.2 1.5 5.5 4.2 7.6 6.9a84.6 84.6 0 001.6 2c1.9 2.1 5.5 5.6 9.4 4.8a12.6 12.6 0 004.5-2.4 24 24 0 013.2-2 12.7 12.7 0 0113.9 2 25 25 0 011.9 2c1.2 1.3 2.3 2.5 3.7 3 2.1.7 4.3-.5 6.7-1.8 2.4-1.3 5-2.7 7.8-2.3h.3c5.1.8 7.5 6.4 8.8 10.6l-2.5.8c-1.8-5.7-4-8.6-6.9-8.9-2-.2-4 .9-6.3 2-2.7 1.6-5.5 3-8.7 2-2.1-.6-3.5-2.2-4.9-3.7a22.8 22.8 0 00-1.6-1.8 10.2 10.2 0 00-11-1.6 21.8 21.8 0 00-2.9 1.8 14.7 14.7 0 01-5.5 2.8 8.5 8.5 0 01-3 .1z"
              fill="#d0cde1"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Embrace change",
      description:
        "Il cambiamento va abbracciato e vissuto con spirito positivo e intraprendente. Non siate spettatori passivi di un mondo che intorno a voi sta cambiando. Afferrate il cambiamento in modo che siate voi a dominarlo.",
      img: (
        // rome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 100 100"
        >
          <defs />
          <g transform="matrix(.11853 0 0 .11853 .5 17.2)">
            <path fill="#3f3d56" d="M0 538.6h836v2H0z" />
            <path fill="#3f3d56" d="M92 378h201v162H92z" />
            <path fill="#6c63ff" d="M165 493h34v46h-34z" />
            <path
              d="M585 274c-6.5 13.8-61.5-4-61.5-4l-104.8-33-26-16.3-16.6-10.3 34-12.5 1 .4 25.2 9.7 97.2 48.2S602 238 585 274z"
              fill="#a0616a"
            />
            <path
              d="M321.9 132s-13.1 5.3-14.7 20.1c-1.5 14.8-1.6 98.2-1.6 98.2s34.3-19.7 52.7-20.1c18.4-.4 61.3-31.5 61.3-31.5s-80.7-72.9-97.7-66.7z"
              fill="#d0cde1"
            />
            <path
              d="M321.9 132s-13.1 5.3-14.7 20.1c-1.5 14.8-1.6 98.2-1.6 98.2s34.3-19.7 52.7-20.1c18.4-.4 61.3-31.5 61.3-31.5s-80.7-72.9-97.7-66.7z"
              opacity=".1"
            />
            <path
              d="M603.3 255l-.5-1c-.1-.4-15.2-31.8-6.8-62.8 8.4-31 37.2-50.5 37.5-50.7l1-.7.5 1c.1.4 15.1 31.8 6.8 62.8-8.4 31-37.2 50.5-37.5 50.7zm30.4-112.2c-5.1 3.7-28.4 21.9-35.8 49-7.3 27 3.7 54.5 6.2 60.2 5-3.7 28.4-21.9 35.7-49 7.4-27-3.6-54.5-6.1-60.2z"
              fill="#3f3d56"
            />
            <path
              d="M564.5 203.3c8.4 31 37.1 50.2 37.1 50.2s15.2-31 6.8-62c-8.4-31-37.1-50.2-37.1-50.2s-15.1 31-6.8 62z"
              fill="#6c63ff"
            />
            <path
              d="M603.8 254.5h-1.2c-.3 0-35.1-2.2-58.1-24.6-23-22.4-26-57-26.1-57.4l-.1-1.2 1.1.1c.4 0 35.2 2.2 58.2 24.6 23 22.3 26 57 26 57.4zm-83.3-81c.8 6.2 5.3 35.4 25.4 55 20 19.5 49.4 23.3 55.6 23.9-.7-6.2-5.2-35.5-25.3-55-20.1-19.6-49.5-23.3-55.7-24z"
              fill="#3f3d56"
            />
            <path
              d="M628.5 196.7c-23 22.4-25.8 56.8-25.8 56.8s34.5-1.9 57.5-24.3c23-22.4 25.8-56.8 25.8-56.8s-34.5 1.9-57.5 24.3z"
              fill="#3f3d56"
            />
            <circle cx="602.2" cy="121.2" r="15" fill="#6c63ff" />
            <rect
              x="550"
              y="247"
              width="108"
              height="52"
              rx="16.8"
              fill="#d0cde1"
            />
            <circle cx="350.4" cy="81" r="49.2" fill="#2f2e41" />
            <path d="M468.7 512l-3.5-2.8.3 1.8 3.2 1z" fill="none" />
            <path
              d="M450.5 405l-28 2s-.9 52.5-4.5 66l48 38-10-32z"
              fill="#a0616a"
            />
            <path
              d="M468.7 512c-2-.6-1.7-1-1.7-1v-2l-49-39.3c-.4 1.8-1 3-1.5 3.3-1.8 1-4.4 4.6-7 8.7a39 39 0 00-4 32.3l-2 34h8l2-31h10s17 22 22 30 27 10 49-5c18.6-12.7-15-26-25.8-30z"
              fill="#2f2e41"
            />
            <circle cx="350.5" cy="104.5" r="32" fill="#a0616a" />
            <path
              d="M368 122l-17 57-41-30s21-23 21-29 37 2 37 2z"
              fill="#a0616a"
            />
            <path
              d="M204.5 286.5s-49 59-2 95c20.7 15.8 38.8 45.8 52.7 74.4a171 171 0 00112.3 91.6s167-195 110-250-211-7-211-7z"
              fill="#2f2e41"
            />
            <path
              d="M343.2 236.8c.3 13.1-2.3 27.6-13.7 30.7-22 6-24 3-24 3s-4 7-3 15-9.5 1.5-9.5 1.5-106.5 13.5-102.5-1.5 42-67 42-67 62-87 75-84l1.4.3c13.2 4 35.7 21 37.6 27.7 2 7-6 51-6 51a126.3 126.3 0 012.7 23.3z"
              fill="#d0cde1"
            />
            <circle cx="357" cy="16.4" r="16.4" fill="#2f2e41" />
            <path
              d="M375.4 26.5a16.4 16.4 0 00-1.4-22l1.3 1A16.4 16.4 0 11355 31.2l-1.2-1.1a16.4 16.4 0 0021.6-3.6zm-16 31.6c18.6 5 31.3 18 28.4 28.8-1.4 4.9-5.6 8.5-11.5 10.6L371 91l-.3 7.8-2.5.4-6.6-14-3.8 14a58.6 58.6 0 01-9.2-1.8c-18.6-5-31.3-18-28.3-28.8s20.4-15.5 39-10.5z"
              fill="#2f2e41"
            />
            <path
              d="M500.5 359.5c-13 8-21-49-21-49l-94-57-21.4-22-13.6-14 36-4 .9.6 22.1 15.4 83 70s21 52 8 60z"
              fill="#a0616a"
            />
            <path
              d="M340.5 213.5a126.3 126.3 0 012.7 23.3c-7 1.2-13.3 1.7-17.7.7-18-4-56 7-56 7s20-81 25-95a24.5 24.5 0 0114.4-14.7c13.2 4 35.7 21 37.6 27.7 2 7-6 51-6 51zm52 8s-13.2 5.4-28.4 10l-13.6-14 36-4 .9.6 5.1 7.4z"
              opacity=".1"
            />
            <path
              d="M316.5 128.5s-14 2-19 16-25 95-25 95 38-11 56-7 67-16 67-16-61-90-79-88z"
              fill="#d0cde1"
            />
            <path
              fill="#3f3d56"
              d="M693.8 381.8l5.4-14.3 50-28.5L783 332zm-183.6 0l-5.4-14.3-50-28.5L421 332z"
            />
            <path fill="#3f3d56" d="M697.4 385.4H506.6l-16-75h222.9z" />
            <path opacity=".1" d="M697.4 385.4H506.6l-16-75h222.9z" />
            <path fill="#3f3d56" d="M505.7 381h192.6v158H505.7z" />
            <path fill="#6c63ff" d="M585 492h34v46h-34z" />
          </g>
        </svg>
      ),
    },
  ];
  return (
    <div className="bg-white py-12">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-pink-600  sm:text-4xl sm:leading-10">
          I principi che ci ispirano
        </h2>
      </div>
      <div className="mx-auto mt-12 max-w-xl px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {principles.map((principle, idx) => (
            // rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={idx} className="mt-10 lg:mt-0">
              <div className="m-auto w-1/2"> {principle.img}</div>
              <div className="mt-5">
                <h5 className="text-2xl font-medium leading-6 text-gray-900">
                  {principle.name}
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Help = () => {
  return (
    <div className="overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <svg
          className="absolute left-full top-0 -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              <span className="text-pink-600">Sostieni</span> Farmaceutica
              Younger
            </h3>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-pink-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </span>
              <div className="mt-5 flex h-48 flex-col">
                <h4 className="text-lg font-medium leading-6 text-gray-900">
                  La Community
                </h4>
                <p className="mt-2 flex-grow text-base leading-6 text-gray-500">
                  Siamo un gruppo di giovani appassionati come te del mondo
                  Farmaceutico! Con la voglia di scambiarsi idee, spunti e
                  opinioni per accrescere professionalmente.
                </p>

                <a
                  href="https://t.me/lacommunitydiFarmaceuticaYounger"
                  target="_blank"
                  className="mt-2 block rounded border-2 border-pink-500 px-4 py-2 text-center text-pink-500 hover:bg-pink-500 hover:text-white"
                  rel="noreferrer"
                >
                  Entra in Telegram
                </a>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-pink-500 text-white">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 576 512"
                  stroke="currentColor"
                >
                  <path
                    fill="currentColor"
                    d="M296 464h-56V338.78l168.74-168.73c15.52-15.52 4.53-42.05-17.42-42.05H24.68c-21.95 0-32.94 26.53-17.42 42.05L176 338.78V464h-56c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h240c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM432 0c-62.61 0-115.35 40.2-135.18 96h52.54c16.65-28.55 47.27-48 82.64-48 52.93 0 96 43.06 96 96s-43.07 96-96 96c-14.04 0-27.29-3.2-39.32-8.64l-35.26 35.26C379.23 279.92 404.59 288 432 288c79.53 0 144-64.47 144-144S511.53 0 432 0z"
                  ></path>
                </svg>
              </div>
              <div className="mt-5 flex h-48 flex-col">
                <h4 className="text-lg font-medium leading-6 text-gray-900">
                  L&apos;Aperitivo
                </h4>
                <p className="mt-2 flex-grow text-base leading-6 text-gray-500">
                  Se ti piace il progetto e vuoi aiutarci concretamente puoi
                  fare una piccola donazione simbolica offrendoci un aperitivo!
                </p>
                <a
                  href="https://www.paypal.com/paypalme/farmaceuticayounger"
                  target="_blank"
                  className="mt-2 block rounded border-2 border-pink-500 px-4 py-2 text-center text-pink-500 hover:bg-pink-500 hover:text-white "
                  rel="noreferrer"
                >
                  Dona con PayPal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = ({
  title,
  description,
  events,
}: {
  title: string;
  description: string;
  events: any[];
}) => {
  return (
    <div className="text-center">
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-pink-600 sm:text-4xl">
          {title}
        </h2>
        <p className="text-xl leading-7 text-gray-500">{description}</p>
      </div>

      <div className="py-12">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            {events.map((event2020, idx) => (
              <div key={idx} className="mt-10 lg:mt-0">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="focus:shadow-outline relative block w-full overflow-hidden rounded-lg focus:outline-none">
                    <YouTube
                      className="w-full"
                      opts={{
                        host: "https://www.youtube-nocookie.com",
                      }}
                      videoId={event2020.youtube}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <h5 className="text-lg font-medium leading-6 text-gray-900">
                    {event2020.name}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {event2020.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Images = () => {
  return (
    <div className="mt-20 text-center">
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-pink-600 sm:text-4xl">
          Alcuni momenti insieme
        </h2>
      </div>
      <div className="mt-10 flex flex-row overflow-x-scroll">
        {images.map((img, idx) => (
          <CloudinaryImage
            key={idx}
            className="h-80 max-w-sm flex-grow"
            width={800}
            height={500}
            src={img}
            alt="associazione"
          />
        ))}
      </div>
    </div>
  );
};

const IndexPage = (props: Props) => {
  return (
    <Layout>
      <SEO
        title="Associazione"
        description="L'associazione nata con l'obiettivo di tendere una mano ai giovani che hanno voglia di conoscere sempre di più sul mondo del farmaceutico!"
        image="https://res.cloudinary.com/dbdvy5b2z/image/upload/v1674638601/fy/associazione/associazione_l9slp8.jpg"
      />
      <Hero />
      <Map {...props} />
      <Principles />
      <Team />
      <Comments />
      <div className="z-0 mt-20 bg-gray-50 py-20">
        <Events
          title="Eventi 2020"
          description="Le iniziative portate avanti dal vivo nel corso di questo anno da
          Farmaceutica Younger ci hanno permesso di raccontare il mondo delle
          GxP in un modo diverso, divertendoci insieme."
          events={events2020}
        />
      </div>
      <div>
        <Images />
      </div>
      <div className="mt-20 bg-gray-50 py-20">
        <Events
          title="Contenuti digitali"
          description="Gli ultimi video caricarti sul canale YouTube di Farmaceutica Younger ti permetteranno di far chiarezza sulle molteplici professioni che il mondo farmaceutico può offrire."
          events={contents}
        />
      </div>

      <Help />
    </Layout>
  );
};

const Map = (props: Props) => {
  return (
    <div className="bg-white pt-6 text-center">
      <div className="space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-pink-600 sm:text-4xl">
            La mappa dei soci
          </h2>
          <p className="text-xl leading-7 text-gray-500">
            Divertiti a scoprire insieme a noi dove vivono e lavorano i soci di
            Farmaceutica Younger! Trova i soci più vicino a te e condividi i
            tuoi interessi con loro!{" "}
            <Link
              href="/associazione/mappa"
              className="hover:text-pint-800 text-pink-400 underline"
            >
              {" "}
              Scopri tutti i soci!
            </Link>
          </p>
        </div>
        <MembersMap markers={props.locations} />
      </div>
    </div>
  );
};

const events2020 = [
  {
    youtube: "wb-4PlQApCQ",
    name: "Apertivo in GMP",
  },
  {
    youtube: "MtftNowN-wk",
    name: "Taboo in GxP",
  },
];

const contents = [
  {
    youtube: "Rfcq3b-Cek8",
    name: "Internvista QA Auditor CRO - Maurizio Cuocolo",
  },
  {
    youtube: "MvVkFiXn8Yg",
    name: "Aperitivo Digitale con QA Studi Clinici",
  },
];

const images = [
  "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/associazione/4_oigrwn.jpg",
  "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/associazione/2_znbp5p.jpg",
  "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/associazione/5_gkgmso.jpg",
  "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/associazione/3_adohoa.jpg",
  "https://res.cloudinary.com/dbdvy5b2z/image/upload/fy/associazione/1_ry8bra.jpg",
];

export default IndexPage;

export const getStaticProps = async () => {
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
    revalidate: 60,
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

type Props = InferGetStaticPropsType<typeof getStaticProps>;
