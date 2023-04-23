import Link from "next/link";
import { CloudinaryImage } from "~/ui/cloudinary-image";

interface PostListProps {
  posts: Post[];
  publish: (postId: string) => void;
}

type Post = {
  postId: string;
  path: string;
  description: string;
  body: string;
  title: string;
  featuredImage: string;
  publishedTime: Date | undefined;
};

export const PostsList = ({ posts, publish }: PostListProps) => {
  return (
    <>
      <ul className="space-y-4">
        {posts.map((p) => (
          <PostView key={p.postId} post={p} publish={() => publish(p.postId)} />
        ))}
      </ul>
    </>
  );
};

function PostView({
  post,
  publish,
}: {
  post: Post;
  publish: () => void;
}): JSX.Element {
  return (
    <li className="mt-4 rounded-md bg-slate-200 shadow-md">
      <Link
        href={`/dashboard/author/${post.postId}/edit`}
        className="flex cursor-pointer gap-2 align-middle hover:ring-2"
      >
        <CloudinaryImage
          className="w-32 flex-shrink-0 object-contain"
          src={post.featuredImage}
          alt={post.title}
        />
        <div>
          <div className="my-2">
            <PostStatus post={post} publish={publish} />
          </div>
          <h4 className="text-sm text-stone-800">{post.title}</h4>
          <p className="text-sm text-stone-600"> {post.description}</p>
        </div>
      </Link>
    </li>
  );
}

const PostStatus = ({ post, publish }: { post: Post; publish: () => void }) => {
  if (!post.path) {
    return (
      <button
        className="cursor-pointer rounded-full bg-blue-600 px-2 py-1 text-xs text-blue-200 hover:bg-blue-800"
        onClick={(e) => {
          e.preventDefault();
          publish();
        }}
      >
        Pubblica
      </button>
    );
  }
  if ((post.publishedTime?.getTime() || 0) > new Date().getTime()) {
    return (
      <span className="rounded-full bg-orange-200 px-2 py-1 text-xs text-orange-600 ring-1 ring-orange-600">
        schedulato il {post.publishedTime?.toLocaleDateString()}
      </span>
    );
  }
  return (
    <div className="mb-2">
      <span className="rounded-full bg-green-200 px-2 py-1 text-xs text-green-600 ring-1 ring-green-600">
        pubblicato
      </span>
    </div>
  );
};
