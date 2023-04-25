import Link from "next/link";
import { type FC } from "react";
import Masonry from "react-masonry-css";
import { formatDate } from "~/utils/dates";
import { CloudinaryImage } from "./cloudinary-image";

interface PostPreview {
  path: string;
  title: string;
  description: string;
  publishedTime: Date;
  featuredImage: string;
  readTime: number;
  author: {
    name: string;
    image: string;
  };
}

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  640: 1,
};

const BlogPostPreview: FC<{
  post: PostPreview;
}> = ({ post }) => {
  return (
    <Link
      href={"/a" + post.path}
      className="m-auto mt-4 flex max-w-lg cursor-pointer flex-col overflow-hidden rounded-lg shadow-lg ring-pink-400 transition-all hover:shadow-2xl hover:ring-2"
    >
      <div className="flex-shrink-0">
        <CloudinaryImage
          className="h-auto w-full"
          src={post.featuredImage}
          alt={post.title}
          size={600}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <div className="block">
            <h3 className="mt-2 text-xl leading-7 text-gray-900">
              {post.title}
            </h3>
            <p className="truncate-3-lines mb-4 mt-3 text-base leading-6 text-gray-500">
              {post.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <div className="h-10 w-10 overflow-hidden rounded-full">
              <CloudinaryImage
                src={post.author.image}
                alt={post.author.name}
                className="h-10 w-10"
                size={200}
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium leading-5 text-gray-900">
              {post.author.name}
            </p>
            <div className="flex flex-col text-sm leading-5 text-gray-500 xl:flex-row">
              <time dateTime={post.publishedTime.toDateString()}>
                {formatDate(post.publishedTime)}
              </time>
              <span className="mx-1 hidden xl:block">&middot;</span>
              <span>Lettura in {post.readTime} min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const PostsList: FC<{
  posts: PostPreview[];
  title: string;
  description: string;
}> = ({ posts, title, description }) => (
  <div className="relative bg-white px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
    <div className="absolute inset-0">
      <div className="h-1/3 bg-white sm:h-2/3"></div>
    </div>
    <div className="relative mx-auto max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-4">
          {description}
        </p>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex"
        columnClassName="px-2"
      >
        {posts.map((post, idx) => (
          <BlogPostPreview key={idx} post={post}></BlogPostPreview>
        ))}
      </Masonry>
    </div>
  </div>
);
