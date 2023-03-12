import { GetServerSidePropsContext } from "next";
import { categories, getPageProps } from "~/utils/categories";
import Page from "./page/[page]";

export default Page;

export async function getStaticProps({
  params,
}: GetServerSidePropsContext<{
  category: string;
}>) {
  const category = params!.category;
  return getPageProps(1, category, 20);
}

export const getStaticPaths = async () => {
  const paths = categories.map((c) => {
    return { params: { category: c.category } };
  });

  return { paths, fallback: false };
};
