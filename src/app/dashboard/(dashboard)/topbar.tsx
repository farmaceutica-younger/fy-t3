import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Bars2Icon, BellIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { ProfileMenu } from "~/ui/profile-menu";

export const TopBar: FC<{
  setSidebarOpen: (open: boolean) => void;
}> = ({ setSidebarOpen }) => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex flex-1 justify-between px-4">
        <div className="flex items-center">
          <button
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeftIcon className={clsx("h-8 w-8 text-gray-700")} />
          </button>
          <button
            onClick={() => {
              router.forward && router.forward();
            }}
          >
            <ChevronRightIcon className={clsx("h-8 w-8 text-gray-700")} />
          </button>
        </div>
        <div className="flex flex-1"></div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};
