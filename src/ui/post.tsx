import { formatDate } from "~/utils/dates";
import { CloudinaryImage } from "./cloudinary-image";
import { Tag } from "./tag";

export type frontmatter = {
  title: string;
  featuredImage: string;
  readTime: number;
  publishedTime: Date;
  showFeaturedImage: boolean;
  tags: string[];
};

export interface Author {
  name: string;
  image: string;
}

interface PostProps {
  frontmatter: frontmatter;
  author: Author;
  html: string;
}

export const PostPage = ({ frontmatter, html, author }: PostProps) => {
  return (
    <>
      <main className="wrapper py-10">
        <h1 className="m-auto mt-10 max-w-[900px] py-2 text-center text-4xl font-bold sm:py-4 md:text-6xl">
          {frontmatter.title}
        </h1>

        {author && (
          <div className="mt-10 flex flex-col items-center">
            <div className="flex-shrink-0">
              <span>
                <span className="sr-only">{author.name}</span>
                <CloudinaryImage
                  size={100}
                  className="h-10 w-10 rounded-full"
                  src={author.image}
                  alt={author.name}
                />
              </span>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">
                <span>{author.name}</span>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={frontmatter.publishedTime.toISOString()}>
                  {formatDate(frontmatter.publishedTime)}
                </time>
                <span aria-hidden="true">&middot;</span>
                <span>{frontmatter.readTime} min</span>
              </div>
            </div>
          </div>
        )}

        <div className="m-auto mt-3 flex w-full justify-center gap-2">
          {frontmatter.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>

        <div className="prose-lg prose m-auto mt-6 px-2 md:px-0">
          {frontmatter.showFeaturedImage && (
            <CloudinaryImage
              className="m-auto"
              src={frontmatter.featuredImage}
              alt={frontmatter.title}
              size={800}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </main>
    </>
  );
};
