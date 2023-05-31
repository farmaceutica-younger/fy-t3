import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ArrowTopRightOnSquareIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { GetJobsDocument } from "src/generated/graphql";
import { gqlCli } from "~/server/gql";
import { resizeCloudinaryImage } from "~/ui/cloudinary-image";
import { Footer } from "~/ui/footer";
import { Header } from "~/ui/header";
import { SponsoredJobPreview } from "~/ui/jobs/preview";
import { SEO } from "~/ui/seo";
import { formatJobDate } from "~/utils/dates";

const PAGE_SIZE = 60;

interface Query {
  page?: number;
  company?: string;
  region?: string;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{}>,
) => {
  const query = {
    ...context.query,
  } as Query;

  const res = await gqlCli
    .query(GetJobsDocument, {
      companies: query.company ? [query.company] : [],
      regions: query.region ? [query.region] : [],
      skip: (query.page || 0) * PAGE_SIZE,
      take: PAGE_SIZE,
    })
    .toPromise();

  // Make sure to return { props: { trpcState: ssg.dehydrate() } }
  return {
    props: {
      jobs: res.data?.getJobs || { edges: [], total: 0 },
      sponsoredJobs: res.data?.getSponsoredJobs || { edges: [], total: 0 },
    },
  };
};

interface JobsRes {
  __typename?: "GetJobsRes" | undefined;
  total: number;
  edges: {
    __typename?: "GetJobsResEdge" | undefined;
    job: {
      __typename?: "Job" | undefined;
      id: string;
      title: string;
      url: string;
      company_id: string;
      location: string;
      postedAt: string;
    };
  }[];
}

interface SponsoredJobRes {
  __typename?: "GetSponsoredJobsRes" | undefined;
  total: number;
  edges: {
    __typename?: "GetSponsoredJobsResEdge" | undefined;
    job: {
      __typename?: "SponsoredJob";
      id: string;
      title: string;
      description: string;
      location: string;
      ralRange: string;
      companyName: string;
      companyLogo: string;
      remoteType: string;
    };
  }[];
}

export default function JobsPage({
  jobs,
  sponsoredJobs,
}: {
  jobs: JobsRes;
  sponsoredJobs: SponsoredJobRes;
}) {
  const router = useRouter();

  const setCompany = (c: string | undefined) => {
    if (!c) {
      router.query.company = undefined;
    } else {
      router.query.company = c;
    }
    router.query.page = undefined;
    router.push(router);
  };

  const setRegion = (r: string | undefined) => {
    if (!r) {
      router.query.region = undefined;
    } else {
      router.query.region = r;
    }
    router.query.page = undefined;
    router.push(router);
  };

  return (
    <div className="h-10">
      <SEO
        title="Trova lavoro con Farmaceutica Younger"
        description="Scopri gli ultimi annunci presenti sul mercato del lavoro nel mondo del Life Science in Italia."
        author="Silvia Vernotico"
      />
      <Header />
      <div className="bg-white">
        <Hero />

        <div>
          {sponsoredJobs.edges.map((e) => (
            <SponsoredJobPreview key={e.job.id} {...e.job} />
          ))}
        </div>
        <div id="jobs" className="mt-6 grid place-content-center">
          <SelectCompany
            onChange={(value) => {
              setCompany(value);
            }}
          />
        </div>
        <div id="jobs" className="mt-6 grid place-content-center">
          <SelectRegion
            onChange={(value) => {
              setRegion(value);
            }}
          />
        </div>

        <Jobs {...jobs} />
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

const Jobs = ({ edges, total }: JobsRes) => {
  const router = useRouter();
  const page = Number(router.query.page) || 0;
  const setPage = (page: number | ((p: number) => number)) => {
    if (typeof page === "number") {
      router.query.page = String(page);
    } else {
      const currePage = Number(router.query.page) || 0;
      router.query.page = String(page(currePage));
    }
    router.push(router);
  };

  return (
    <div>
      <div className="m-auto my-10 max-w-7xl">
        <div className="m-x-auto grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3">
          {edges.map(({ job }, id) => (
            <div key={job.id} className="h-full w-full p-2">
              <div className="card h-full  w-full  rounded  shadow-lg ring-1 ring-pink-200">
                <div className="card-body flex flex-col justify-between">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <div>
                        {getLogo(job.company_id) ? (
                          <div>
                            <img
                              className="h-10 w-20 object-contain"
                              src={getLogo(job.company_id)}
                              alt={job.company_id}
                            />
                          </div>
                        ) : null}
                      </div>
                      <div className="font-bold">
                        {companies[job.company_id]?.name}
                      </div>
                    </div>

                    <h2 className="card-title mt-5">{job.title}</h2>
                    <div className="mt-4 space-y-1">
                      {/* {job.type && <p>Tipo di contratto: {job.type}</p>} */}
                      <p className="truncate text-ellipsis">
                        📍 {job.location}
                      </p>
                      <p>
                        🗓️{" "}
                        {formatJobDate(
                          (job.postedAt
                            ? new Date(job.postedAt)
                            : new Date()
                          ).toISOString(),
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="card-actions mt-4 justify-end">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={job.url}
                      className="btn-outline btn-primary btn-sm btn"
                    >
                      Applica 🚀
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination current={page} setPage={setPage} total={total} />
    </div>
  );
};

const Pagination = ({
  total,
  current,
  setPage,
}: {
  total: number;
  current: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const hasNext = current < Math.ceil(total / PAGE_SIZE) - 1;
  const hasPrev = current > 0;

  const scroll = () => {
    const element = document.getElementById("jobs");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const next = () => {
    setPage((p) => p + 1);
    scroll();
  };
  const prev = () => {
    setPage((p) => p - 1);
    scroll();
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);
  return (
    <div className="my-8 flex w-full justify-center">
      <div className="btn-group ">
        <button
          onClick={prev}
          disabled={!hasPrev}
          className="btn btn-primary btn-sm"
          type="button"
        >
          &larr;
        </button>
        <button type="button" className="btn btn-primary btn-sm">
          Pagina {current + 1} di {totalPages}
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!hasNext}
          className="btn btn-primary btn-sm"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

const companies: { [k: string]: { logo: string; name: string } } = {
  gsk: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658851833/fy/logos/gsk-logo_e6pesx.png",
    name: "GSK",
  },
  janssen: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658851785/fy/logos/janssen-logo_ddtxvz.png",
    name: "Janssen",
  },
  sanofi: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658851785/fy/logos/sanofi_iuckig.jpg",
    name: "Sanofi",
  },
  chiesi: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658852178/fy/logos/chiesi_mnlrau.png",
    name: "Chiesi",
  },
  merk: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658852177/fy/logos/merk_b95w2b.webp",
    name: "Merck",
  },
  novartis: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658864238/fy/logos/Novartis-Logo_txlov8.png",
    name: "Novartis",
  },
  zambon: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658866139/fy/logos/Zambon_logo_fur62n.png",
    name: "Zambon",
  },
  baxter: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658867715/fy/logos/baxter_fmwdyh.png",
    name: "Baxter",
  },
  "eli-lilly": {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1658867137/fy/logos/lilly_ptrstp.png",
    name: "Eli Lilly",
  },
  evotec: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1659181313/fy/logos/Evotec-Logo.wine_p4ewxv.png",
    name: "Evotec",
  },
  ibsa: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1659259600/fy/logos/obsa_d87rhr.png",
    name: "IBSA",
  },
  angelini: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1659330805/fy/logos/angelini_b1ypog.png",
    name: "Angelini",
  },
  thermofisher: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1659968948/fy/logos/thermofisher_l0khsn.webp",
    name: "Thermo Fisher Scientific",
  },
  bayer: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1659975727/fy/logos/bayer_nfsau8.png",
    name: "Bayer",
  },
  roche: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1660034587/fy/logos/roche_d5gfrk.png",
    name: "Roche",
  },
  italfarmaco: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1662047427/fy/logos/italfarmaco_d7dnmg.png",
    name: "Italfarmaco",
  },
  "leo-pharma": {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1662570241/fy/logos/leopharma_lkzteu.png",
    name: "LEO Pharma",
  },
  astrazeneca: {
    logo: "https://res.cloudinary.com/dbdvy5b2z/image/upload/v1662570420/fy/logos/astrazeneca-logo_nqdd3x.webp",
    name: "Astrazeneca",
  },
};

const regions = [
  "Lombardia",
  "Piemonte",
  "Puglia",
  "Campania",
  "Lazio",
  "Abruzzo",
  "Emilia-Romagna",
  "Sardegna",
  "Toscana",
  "Veneto",
  "Calabria",
  "Trentino-Alto Adige",
  "Friuli-Venezia Giulia",
  "Marche",
];

const getLogo = (company: string) => {
  const c = companies[company];
  if (!c) {
    return "";
  }
  return resizeCloudinaryImage(c.logo, 100);
};

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
                  href="/a/blog/2022/7/la-nuova-sezione-jobs"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-100 px-8 py-3 text-base font-medium text-pink-700 hover:bg-pink-200 md:py-4 md:px-10 md:text-lg"
                >
                  Motivazioni
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
);

const SelectCompany = ({ onChange }: { onChange: (value: string) => void }) => {
  const router = useRouter();

  const [selected, setSelected] = useState(
    (router.query.company as string) || "",
  );

  const handleChange = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col items-baseline space-y-2 md:flex-row md:space-y-0 md:space-x-3">
      <div>Filtra per azienda</div>
      <div className="relative w-72">
        <Listbox value={selected} onChange={handleChange}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-pink-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {companies[selected]?.name || "Tutte le aziende"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Object.entries(companies).map(([company, value]) => (
                  <Listbox.Option
                    key={company}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={company}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {value.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <button
        disabled={selected === ""}
        className="btn btn-primary btn-xs"
        onClick={() => handleChange("")}
        type="button"
      >
        vedi tutte
      </button>
    </div>
  );
};

const SelectRegion = ({ onChange }: { onChange: (value: string) => void }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(
    (router.query.region || "") as string,
  );

  const handleChange = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col items-baseline space-y-2 md:flex-row md:space-y-0 md:space-x-3">
      <div>Filtra per regione</div>
      <div className="relative w-72">
        <Listbox value={selected} onChange={handleChange}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-pink-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {selected.replaceAll("-", " ") || "Tutte le regioni"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {regions.map((region) => (
                  <Listbox.Option
                    key={region}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={region}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {region.replaceAll("-", " ")}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <button
        disabled={selected === ""}
        className="btn btn-primary btn-xs"
        onClick={() => handleChange("")}
        type="button"
      >
        vedi tutte
      </button>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="relative mt-10 bg-gray-800">
      <div className="h-56 bg-pink-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
            Collaborazioni Aperte
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Collabora con Farmaceutica Younger
          </p>
          <p className="mt-3 text-lg text-gray-300">
            Sei un&apos;azienda che opera nel settore Life Science e vuoi
            collaborare con Farmaceutica Younger? Mandaci una mail, ti
            contatteremo appena possibile.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:silvia@farmaceuticayounger.science?subject=Collaborazione con Farmaceutica Younger"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                Scrivici una mail
                <ArrowTopRightOnSquareIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
