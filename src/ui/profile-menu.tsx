import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { signIn, signOut, useSession } from "next-auth/react";
import { Fragment } from "react";

export const ProfileMenu = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }
  if (status === "unauthenticated") {
    return (
      <button className="btn-primary btn" onClick={() => signIn()}>
        Login
      </button>
    );
  }

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={session?.user?.image!}
            alt=""
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => {
                if (item.type === "action") {
                  return (
                    <button
                      onClick={() => item.action()}
                      className={clsx(
                        active ? "bg-gray-100" : "",
                        "block w-full px-4 py-2 text-left text-sm text-gray-700",
                      )}
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <a
                    href={item.href}
                    className={clsx(
                      active ? "bg-gray-100" : "",
                      "block w-full px-4 py-2 text-sm text-gray-700",
                    )}
                  >
                    {item.name}
                  </a>
                );
              }}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const userNavigation: UserMenu[] = [
  {
    type: "nav",
    name: "Profilo",
    href: "/dashboard/profile",
  },
  {
    type: "action",
    name: "Sign out",
    action: () => {
      signOut({
        callbackUrl: "/",
        redirect: true,
      });
    },
  },
];

interface UserAction {
  type: "action";
  name: string;
  action: () => void;
}

interface UserNav {
  type: "nav";
  name: string;
  href: string;
}

type UserMenu = UserAction | UserNav;
