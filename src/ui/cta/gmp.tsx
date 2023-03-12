import Link from "next/link";

export const GmpCta = () => (
  <div className="relative pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    <div>
      <main className="mx-auto mt-8 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
              {" "}
              Sostieni l&apos;associazione
            </div>
            <h2 className="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-6xl sm:leading-none lg:text-5xl xl:text-6xl">
              Acquista il
              <br />
              <span className="text-pink-600">#GMP PocketBook</span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Il{" "}
              <span className="font-semibold italic text-pink-600">
                GMP PocketBook
              </span>{" "}
              è una traduzione delle Good Manufacturing Practice Volume 4, Parte
              I che tratta dei Requisiti base che deve avere un prodotto
              medicinale per essere fabbricato. Fondamentali per mettere in
              piedi un sistema di qualità che garantisca che il farmaco sia di
              qualità, sicuro ed efficace.
            </p>

            <div className="mt-5 space-y-2 sm:mt-8 sm:flex sm:justify-center sm:space-x-2 sm:space-y-0 lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://amzn.to/3sGVHO7"
                  rel="noreferrer"
                  target="_blank"
                  className="focus:shadow-outline-pink flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-pink-500 focus:border-pink-700 focus:outline-none md:py-4 md:px-10 md:text-lg"
                >
                  Acquista su Amazon
                </a>
              </div>

              <div className="rounded-md shadow">
                <Link
                  href="/ecommerce"
                  className="focus:shadow-outline-pink flex w-full items-center justify-center rounded-md border border-transparent bg-stone-600 px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-stone-500 focus:border-pink-700 focus:outline-none md:py-4 md:px-10 md:text-lg"
                >
                  Info
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <Link
                href="/ecommerce"
                className="focus:shadow-outline relative block w-full overflow-hidden rounded-lg focus:outline-none"
              >
                <img
                  src="https://res.cloudinary.com/dbdvy5b2z/image/upload/c_scale,w_600/v1646564506/fy/ecommerce/book_bjsonl.jpg"
                  alt="GMP Pocket Book"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);
