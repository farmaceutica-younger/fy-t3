import { useSession } from "next-auth/react";

export const useAuthenticatedSession = () => {
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    throw new Error("Not authenticated");
  }

  return {
    ...session,
  };
};
