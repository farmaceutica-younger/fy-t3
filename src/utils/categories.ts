import { getPublishedPostsCount, getPublishedPostsPreview } from "~/server/db";

export const categories: {
  category: string;
  title: string;
  description: string;
}[] = [
  {
    category: "hotthisweek",
    title: "Hot This Week",
    description: "Le novità più frizzanti del mondo farmaceutico",
  },
  {
    category: "pharmacronimi",
    title: "Farma Acronimi",
    description: "Gli acronimi più bizzarri del mondo farmaceutico",
  },
  {
    category: "pharmaquotes",
    title: "Farma Quotes",
    description: "Le citazioni dei più grandi scienziati di fama mondiale",
  },
  {
    category: "blog",
    title: "Articoli",
    description:
      "Leggi gli articoli scritti dalla crew di Farmaceutica Younger",
  },
  {
    category: "cgmp",
    title: "GMP",
    description:
      "Leggi gli articoli scritti dalla crew di Farmaceutica Younger",
  },
];

export async function getPageProps(
  page: number,
  category: string,
  take: number,
) {
  const posts = await getPublishedPostsPreview(take * (page - 1), take, [
    category,
  ]);

  const total = await getPublishedPostsCount([category]);

  return {
    props: {
      posts,
      pagination: {
        currentPage: page,
        pageCount: Math.ceil(total / take),
      },
      category: categories.find((c) => c.category === category)!,
    },
    revalidate: 10 * 60,
  };
}
