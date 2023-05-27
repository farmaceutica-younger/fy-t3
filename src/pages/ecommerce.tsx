import Image from "next/image";
import { CloudinaryImage } from "~/ui/cloudinary-image";
import { Layout } from "~/ui/layout";
import { SEO } from "~/ui/seo";

const EcommercePage = () => {
  return (
    <Layout>
      <SEO title="GMP Pocker Book" />
      <CTABook />
      <Content />
      <Testimonial />
    </Layout>
  );
};

export default EcommercePage;

const CTABook = () => {
  return (
    <div className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Scopri il </span>{" "}
            <span className="block text-pink-600 xl:inline">
              GMP Pocket Book
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Il <strong className="text-pink-500">GMP Pocket book</strong> è una
            traduzione delle Good Manufacturing Practice Volume 4, Parte I che
            tratta dei Requisiti base che deve avere un prodotto medicinale per
            essere fabbricato.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="https://amzn.to/3sGVHO7"
                rel="noreferrer"
                target="_blank"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:px-10 md:py-4 md:text-lg"
              >
                Acquista su Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <Image
          width={720}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
          src="/gmp.jpeg"
          alt="GNP Pocket Book"
        />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
        <div
          className="relative mx-auto h-full max-w-prose text-lg"
          aria-hidden="true"
        >
          <svg
            className="absolute left-full top-12 translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg">
          <h1>
            <span className="block text-center text-base font-semibold uppercase tracking-wide text-pink-600">
              Scopri il
            </span>
            <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              GMP Pocket Book
            </span>
          </h1>
        </div>
        <div className="prose-lg prose-indigo prose mx-auto mt-6 text-gray-500">
          <p className="mt-3 text-base leading-snug text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Il{" "}
            <span className="font-semibold italic text-pink-600">
              GMP Pocket book
            </span>{" "}
            è una traduzione delle Good Manufacturing Practice Volume 4, Parte I
            che tratta dei Requisiti base che deve avere un prodotto medicinale
            per essere fabbricato.
          </p>
          <p className="mt-3 text-base leading-snug text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Fondamentali per mettere in piedi un sistema di qualità che
            garantisca che il farmaco sia di qualità, sicuro ed efficace. Il GMP
            Pocket book ti permetterà di comprendere le fondamenta di un’azienda
            farmaceutica attraverso le normative che la regolano.
          </p>{" "}
          <p className="mt-3 text-base leading-snug text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Lo trovi in due versioni, quella elettronica che ti permetterà di
            riceverlo istantaneamente e la versione cartacea, dove potrai
            ammirare anche la grafica curata dall’illustratrice nonché CTFina{" "}
            <a
              className="text-pink-600 underline hover:text-pink-900"
              href="https://instagram.com/silfraen?igshid=6c23ibmkflvm"
              target="_blank"
              rel="noreferrer"
            >
              Francesca Silvestri
            </a>
            .
          </p>
          <p className="text-sm italic">
            I soldi raccolti dalla vendita del GMP pocket book serviranno ad
            organizzare gli eventi di Farmaceutica Younger!
          </p>
          <div className="not-prose mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="https://amzn.to/3sGVHO7"
                rel="noreferrer"
                target="_blank"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:px-10 md:py-4 md:text-lg"
              >
                Acquista su Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="bg-white pt-16 lg:py-24">
      <div className="bg-pink-600 pb-16 lg:relative lg:z-10 lg:pb-0">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded-xl shadow-xl lg:h-full">
                <CloudinaryImage
                  className="object-cover lg:h-full lg:w-full"
                  src="https://res.cloudinary.com/dbdvy5b2z/image/upload/v1646563513/fy/ecommerce/gmpbook_uxszzd.jpg"
                  size={600}
                  alt="Sara"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-6 text-2xl font-medium text-white">
                    Credo che il GMP Pocket book sia la bibbia di ogni buon
                    CTFino! Veramente ben fatto e molto pratico
                  </p>
                </div>
                <footer className="mt-6">
                  <p className=" text-xl font-medium text-white">Sara</p>
                  <p className="text-base font-medium text-pink-100"></p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
