"use client";
import { useRouter } from "next/navigation";
import { useAuthorUpload } from "~/hooks/upload/upload-image";
import { Loading } from "~/ui/loading";
import { reactApi } from "~/utils/api";
import { PostForm } from "./post-form";

const EditPostPage = ({ params }: { params: { postId: string } }) => {
  const postId = decodeURIComponent(params.postId);
  const router = useRouter();
  const upload = useAuthorUpload();
  const { mutateAsync: savePost } = reactApi.author.savePost.useMutation();

  const { data: post, isLoading: isLoadingPost } =
    reactApi.author.getPost.useQuery({ id: postId });

  if (isLoadingPost) {
    return <Loading />;
  }

  if (!post) {
    return "error";
  }

  return (
    <div className="h-100%">
      <div className="m-auto w-full">
        <PostForm
          uploadImage={upload}
          initialValue={post}
          author={post.author}
          back={() => router.push("..")}
          onSave={async (value) => {
            savePost({
              data: value,
              id: post.id,
            });
          }}
        />
      </div>
    </div>
  );
};

export default EditPostPage;
