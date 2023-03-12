import { Feed } from "feed";
import { GetServerSideProps } from "next";
import React from "react";
import { gqlCli } from "~/server/gql";
import { GetPostsPreviewDocument } from "src/generated/graphql";
import { config } from "~/utils/config";

const RSS: React.FC = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (res) {
    const feed = await generateRSSFeed();
    res.setHeader("Content-Type", "text/xml");
    res.write(feed);
    res.end();
  }
  return {
    props: {},
  };
};

export default RSS;

const generateRSSFeed = async () => {
  const baseUrl = `https://${config.hostname}`;
  const author = config.author;

  const feed = new Feed({
    title: escapeXmlAttr(config.title),
    description: escapeXmlAttr(config.description),
    id: baseUrl,
    link: baseUrl,
    language: "it",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
    },
    author,
    copyright: `2016 - ${new Date().getFullYear()} Silvia Vernotico. All rights reserved.`,
  });

  const data = await gqlCli
    .query(GetPostsPreviewDocument, {
      skip: 0,
      take: 30,
    })
    .toPromise();

  const edges = data.data?.getBlogPosts.edges;
  if (!edges) {
    throw new Error("cannot find post");
  }

  edges.forEach(({ post }) => {
    const url = `${baseUrl}/a/${post.path}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: escapeXmlAttr(post.description.trim()),
      image: {
        title: escapeXmlAttr(post.title.trim()),
        url: post.featuredImage,
      },
      author: [
        {
          name: author.name,
        },
      ],
      date: new Date(post.publishedTime),
    });
  });
  return feed.rss2();
};

function escapeXmlAttr(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
    }
    return c;
  });
}
