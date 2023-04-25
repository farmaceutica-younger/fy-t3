"use client";
import { RouterOutputs, reactApi } from "~/utils/api";
import { MemberList } from "./memberslist";
import { Nav } from "./nav";
import { Loading } from "~/ui/loading";

export default function AssociationPage() {
  const { error, isLoading, members } = useMembers();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <Nav />
      <MemberList members={members || []} />
    </div>
  );
}

export function useMembers() {
  const {
    data: members,
    isLoading,
    error,
  } = reactApi.association.admin.getMembersWithPayments.useQuery({
    skip: 0,
    take: 1000,
  });

  return { members, isLoading, error };
}
