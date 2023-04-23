"use client";
import { Dialog, Transition } from "@headlessui/react";
import { MapIcon } from "@heroicons/react/20/solid";
import {
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
  ClipboardIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Fragment, SVGProps, useCallback } from "react";
import { useAuthenticatedSession } from "~/hooks/authenticated-session";
import { BlogLogo } from "~/ui/logo";

export function SideBar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 flex md:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-pink-700 pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <BlogLogo className="h-10 w-10 text-white" />
                <div className="ml-3 flex flex-col text-xs text-white">
                  <span className="font-bold">Farmaceutica</span>{" "}
                  <span>Younger</span>{" "}
                </div>
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <Navigation />
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      <div className="z-20 hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-pink-700 pt-5">
          <div className="flex flex-shrink-0 items-center px-4">
            <BlogLogo className="h-10 w-10 text-white" />
            <div className="ml-3 flex flex-col text-xs text-white">
              <span className="font-bold">Farmaceutica</span>{" "}
              <span>Younger</span>{" "}
            </div>
          </div>
          <div className="mt-5 flex flex-1 flex-col">
            <Navigation />
          </div>
        </div>
      </div>
    </>
  );
}

const Navigation = () => {
  const pathname = usePathname();
  const navigation = useNavigation();
  const isCurrentPath = useCallback(
    (path: string) => {
      return path === pathname;
    },
    [pathname]
  );

  return (
    <nav className="flex-1 space-y-1 px-2 pb-4">
      {navigation.map((item, id) => {
        if (item.type === "link") {
          return (
            <a
              key={id}
              href={item.href}
              className={clsx(
                isCurrentPath(item.href)
                  ? "bg-pink-800 text-white"
                  : "text-pink-100 hover:bg-pink-600",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-pink-300"
                aria-hidden="true"
              />
              {item.name}
            </a>
          );
        } else if (item.type === "section") {
          return (
            <div key={id} className="ml-3 pt-4 text-sm text-white">
              <span>{item.name}</span>
            </div>
          );
        }
      })}
    </nav>
  );
};

function useNavigation(): Nav[] {
  const { user } = useAuthenticatedSession();
  const navigation: Nav[] = [
    {
      type: "link",
      name: "Profilo",
      href: "/dashboard/profile",
      icon: HomeIcon,
    },
  ];
  if (user.isMember) {
    navigation.push({
      type: "section",
      name: "Associazione",
    });
    navigation.push({
      type: "link",
      name: "Mappa",
      href: "/dashboard/association/location",
      icon: MapIcon,
    });
  }
  if (user.authorId) {
    navigation.push({
      type: "section",
      name: "Autore",
    });
    navigation.push({
      type: "link",
      name: "I Miei Articoli",
      href: "/dashboard/author",
      icon: BookOpenIcon,
    });
  }

  if (user.isAdmin) {
    navigation.push({
      type: "section",
      name: "Admin",
    });
    navigation.push({
      type: "link",
      name: "Events",
      href: "/dashboard/admin/events",
      icon: CalendarIcon,
    });
    navigation.push({
      type: "link",
      name: "Sponsored Jobs",
      href: "/dashboard/admin/sponsored-jobs",
      icon: BriefcaseIcon,
    });
    navigation.push({
      type: "link",
      name: "Associazione",
      href: "/dashboard/admin/association",
      icon: UserGroupIcon,
    });
    navigation.push({
      type: "link",
      name: "Card",
      href: "/dashboard/admin/card",
      icon: ClipboardIcon,
    });
  }

  return navigation;
}

interface LinkNav {
  readonly type: "link";
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element | null;
}

interface SectionNav {
  readonly type: "section";
  name: string;
}

type Nav = LinkNav | SectionNav;
