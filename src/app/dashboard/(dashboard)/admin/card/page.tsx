import { use } from "react";
import { BlogLogo, LogoFull } from "~/ui/logo";

export const revalidate = 3600;

const CardPage = () => {
  const cards = use(getCards());
  return (
    <>
      {Object.entries(categories).map(([cat, color]) => {
        return (
          <div key={cat} className="flex flex-wrap justify-center gap-4 p-4">
            <Back colors={colors[color]} />
            {cards
              .filter((c) => c.category === cat)
              .map((c, idx) => (
                <div key={idx} className="space-y-2">
                  <Front
                    card={c}
                    colors={colors[categories[c.category] || "red"]}
                  />
                </div>
              ))}
          </div>
        );
      })}
    </>
  );
};
export default CardPage;

const getCards = async () => {
  const cards = await readCsv(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQIXeEIa0Df5Cof019rz-6oZTqwn2x2HG0KsWF-T6_wc7SVw2ywMsT8upjo4KbhUz2WGCzcCvkYRNi5/pub?gid=0&single=true&output=csv",
  );
  return cards;
};

const readCsv = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();
  const lines = text.split("\n");
  const cards: CardInfo[] = lines.slice(1).map((line) => {
    const [category, word, ...taboos] = line.split(",");
    return {
      word: mcap(word || "r&d"),
      category: category!.toLocaleLowerCase(),
      taboos: taboos.filter((v) => !!v).map((v) => mcap(v)),
    };
  });
  return cards;
};

const categories: { [k: string]: ColorKey } = {
  "r&d": "emerald",
  production: "blue",
  marketing: "pink",
  quality: "red",
  regolatorio: "amber",
  clinical: "gray",
};

const colors = {
  amber: {
    bg: "bg-amber-400",
    ring: "ring-amber-400",
    text: "text-amber-400",
  },
  blue: {
    bg: "bg-blue-400",
    ring: "ring-blue-400",
    text: "text-blue-400",
  },
  emerald: {
    bg: "bg-emerald-400",
    ring: "ring-emerald-400",
    text: "text-emerald-400",
  },
  pink: {
    bg: "bg-pink-400",
    ring: "ring-pink-400",
    text: "text-pink-400",
  },
  gray: {
    bg: "bg-gray-400",
    ring: "ring-gray-400",
    text: "text-gray-400",
  },
  red: {
    bg: "bg-red-400",
    ring: "ring-red-400",
    text: "text-red-400",
  },
} as const;

type ColorKey = keyof typeof colors;

interface Colors {
  bg: string;
  text: string;
  ring: string;
}

interface CardInfo {
  word: string;
  taboos: string[];
  category: string;
}

const Front = ({ colors, card }: { colors: Colors; card: CardInfo }) => {
  return (
    <div className={`h-96 w-64 rounded-lg text-center ring-2 ${colors.ring}`}>
      <div>
        <div className="flex h-24 items-center justify-center">
          <p className="px-1 text-2xl font-bold">{card.word}</p>
        </div>
        <div className="mx-4 overflow-hidden rounded-full">
          <div className={`h-2 w-full ${colors.bg}`}></div>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        {card.taboos.map((t) => (
          <p key={t} className="text-xl">
            {t}
          </p>
        ))}
      </div>
      <div className="mt-4 grid place-content-center">
        <BlogLogo className={`${colors.text}`} />
      </div>
    </div>
  );
};

const Back = ({ colors }: { colors: Colors }) => {
  return (
    <div
      className={`h-96 w-64 rounded-lg ${colors.bg} text-center  ring-2 ${colors.ring}`}
    >
      <div className=" grid h-full place-content-center text-white">
        <div className="text-center">
          <LogoFull className="w-40 text-white" />
        </div>
      </div>
    </div>
  );
};

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function mcap(s: string) {
  return s
    .split(" ")
    .map((w) => cap(w))
    .join(" ");
}
