"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { TextField } from "~/forms/fields/text-field";
import { CreatePostSchema } from "~/forms/post/post-schema";
import { ZodForm } from "~/forms/zod-form";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import { DashboardContainer } from "~/ui/dashboard-container";
import { Loading } from "~/ui/loading";
import { reactApi } from "~/utils/api";
import { PostsList } from "./posts-list";

const AdminPostsPage = () => {
  const openDialog = useOpenDialog();
  const [options, setOptions] = useState({ skip: 0, take: 20 });

  const goToPage = (page: number) => {
    setOptions({ ...options, skip: (page - 1) * options.take });
  };

  const q = reactApi.author.getPosts.useQuery({
    skip: 0,
    take: 100,
  });
  const context = reactApi.useContext();

  const { mutateAsync: publishPostMut } =
    reactApi.author.publishPost.useMutation({
      onSuccess: async () => {
        await context.author.getPosts.invalidate();
      },
    });

  const publishPost = async (postID: string) => {
    await publishPostMut({ id: postID });
  };

  if (q.isError) {
    return <div>{q.error.message}</div>;
  }

  if (q.isLoading || !q.data) {
    return <Loading />;
  }

  const { posts, total } = q.data;

  const pageCount = Math.ceil(total / options.take);
  const currentPage = Math.floor(options.skip / options.take) + 1;

  return (
    <DashboardContainer>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">I Miei Post</h2>
        <button
          className="btn-primary btn-sm btn"
          onClick={() => openDialog(<CreatePostDialog />)}
        >
          Crea Post
        </button>
      </div>
      <PostsList posts={posts} publish={publishPost} />
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          goToPage={goToPage}
        />
      </div>
    </DashboardContainer>
  );
};

export default AdminPostsPage;

interface PaginationPros {
  pageCount: number;
  currentPage: number;
  goToPage: (page: number) => void;
}

const Pagination = (props: PaginationPros) => {
  const hasPreviousPage = props.currentPage > 1;
  const hasNextPage = props.currentPage < props.pageCount;

  let pages: (number | "...")[] = [];
  if (props.pageCount <= 6) {
    pages = Array.from(new Array(props.pageCount)).map((_, i) => i + 1);
  } else {
    pages = [
      1,
      2,
      3,
      "...",
      props.pageCount - 2,
      props.pageCount - 1,
      props.pageCount,
    ];
  }
  return (
    <nav className="m-auto flex max-w-xl items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="flex w-0 flex-1">
        {hasPreviousPage ? (
          <button
            onClick={() => props.goToPage(props.currentPage - 1)}
            className="-mt-px inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:border-gray-400 focus:text-gray-700 focus:outline-none"
          >
            <svg
              className="mr-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </button>
        ) : null}
      </div>
      <div className="hidden md:flex">
        {pages.map((p) => {
          if (p === "...") {
            return (
              <div
                key="..."
                className={`-mt-px inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:border-gray-400 focus:text-gray-700 focus:outline-none`}
              >
                ...
              </div>
            );
          }
          return (
            <button
              key={p}
              onClick={() => props.goToPage(p)}
              className={`-mt-px border-t-2 ${
                p === props.currentPage
                  ? "border-indigo-500"
                  : "border-transparent"
              } inline-flex items-center px-4 pt-4 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:border-gray-400 focus:text-gray-700 focus:outline-none`}
            >
              {p}
            </button>
          );
        })}
      </div>
      {hasNextPage ? (
        <div className="flex w-0 flex-1 justify-end">
          <button
            onClick={() => props.goToPage(props.currentPage + 1)}
            className="-mt-px inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:border-gray-400 focus:text-gray-700 focus:outline-none"
          >
            Next
            <svg
              className="ml-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="flex w-0 flex-1 justify-end"></div>
      )}
    </nav>
  );
};

const CreatePostDialog = () => {
  const utils = reactApi.useContext();
  const closeDialog = useCloseDialog();

  const createPost = reactApi.author.createPost.useMutation({
    onSuccess: () => {
      utils.author.invalidate();
      closeDialog();
    },
  });

  return (
    <>
      <ZodForm
        onSubmit={async () => {
          await toast.promise(
            createPost.mutateAsync({ title: "asd", description: "asd" }),
            {
              pending: "Creating Post",
              success: "Post Created",
              error: "Error Creating Post",
            },
          );
        }}
        schema={CreatePostSchema}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <h2 className="text-lg font-semibold">Crea un nuovo post </h2>
            </div>
            <TextField label="Titolo" name="title" />
            <TextField
              label="Post Description"
              name="description"
              numRows={5}
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="btn-ghost btn-xs btn"
                onClick={closeDialog}
              >
                Annulla
              </button>
              <button type="submit" className="btn-primary btn-xs btn">
                Salva
              </button>
            </div>
          </form>
        )}
      </ZodForm>
    </>
  );
};
