"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, type ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { DialogContainer } from "~/hooks/dialog/dialog";
import { Loading } from "~/ui/loading";
import { createReactCli, reactApi } from "~/utils/api";

const Layout = ({ children }: { children: ReactNode }) => {
  const queryClient = useMemo(() => new QueryClient(), []);
  const trpcClient = useMemo(() => createReactCli(), []);

  const { status } = useSession();
  const router = useRouter();
  const path = usePathname();

  if (status === "unauthenticated") {
    router.push(`/auth/signin?callbackUrl=${path}`);
  }

  if (status !== "authenticated") {
    return <Loading />;
  }

  return (
    <reactApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="flex justify-center h-screen w-screen p-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
          {children}
        </div>
        <DialogContainer />
        <ToastContainer />
      </QueryClientProvider>
    </reactApi.Provider>
  );
};

const BaseLayout = (props: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <Layout {...props} />
    </SessionProvider>
  );
};

export default BaseLayout;
