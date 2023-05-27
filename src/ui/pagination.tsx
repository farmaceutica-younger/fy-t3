import Link from "next/link";
import React from "react";

interface PaginationPros {
  pageCount: number;
  currentPage: number;
  basePath: string;
}

function getPage(nextPage: number, basePath: string) {
  if (nextPage === 1) {
    return `/${basePath}`;
  } else {
    return `/${basePath}/page/${nextPage}`;
  }
}

export const Pagination = (props: PaginationPros) => {
  if (props.pageCount <= 1) {
    return null;
  }
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
    <div className="w-full bg-white">
      <nav className="m-auto flex max-w-xl items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="flex w-0 flex-1">
          {hasPreviousPage ? (
            <Link
              href={getPage(props.currentPage - 1, props.basePath)}
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
            </Link>
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
              <Link
                key={p}
                href={getPage(p, props.basePath)}
                className={`-mt-px border-t-2 ${
                  p === props.currentPage
                    ? "border-indigo-500"
                    : "border-transparent"
                } inline-flex items-center px-4 pt-4 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-700 focus:border-gray-400 focus:text-gray-700 focus:outline-none`}
              >
                {p}
              </Link>
            );
          })}
        </div>
        {hasNextPage ? (
          <div className="flex w-0 flex-1 justify-end">
            <Link
              href={getPage(props.currentPage + 1, props.basePath)}
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
            </Link>
          </div>
        ) : (
          <div className="flex w-0 flex-1 justify-end"></div>
        )}
      </nav>
    </div>
  );
};
