"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, type ReactNode } from "react";
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

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/auth/signin?callbackUrl=${path}`);
    }
  }, [status, router, path]);

  if (status !== "authenticated") {
    return <Loading />;
  }

  return (
    <reactApi.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <DialogContainer />
        <ToastContainer />
      </QueryClientProvider>
    </reactApi.Provider>
  );
};

const BaseLayout = (props: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <Layout {...props}></Layout>
    </SessionProvider>
  );
};

export default BaseLayout;
