"use client";
import { MembershipStatus } from "@prisma/client";
import { MemberInfo } from "./info";
import { MemberPayments } from "./payments";
import { Loading } from "~/ui/loading";
import { reactApi } from "~/utils/api";

const MemberPage = ({ params }: { params: { memberId: string } }) => {
  const memberId = params.memberId;
  const res = reactApi.association.admin.getMemberWithQuestionairre.useQuery({
    memberId,
  });

  const approveMember = reactApi.association.admin.approveMember.useMutation();
  const setAsMember =
    reactApi.association.admin.setStatusAsMember.useMutation();

  if (res.isLoading) {
    return <Loading />;
  }

  if (res.error || !res.data) {
    return <p>error</p>;
  }

  return (
    <>
      <MemberInfo data={res.data} />
      <div className="mt-10">
        <MemberPayments memberId={memberId} />
      </div>
      {res.data.member.status === MembershipStatus.PENDING && (
        <div className="mt-10">
          <button
            className="btn-primary btn"
            onClick={async () => {
              await approveMember.mutateAsync({ memberId });
              await res.refetch();
            }}
          >
            Approva come Socio
          </button>
        </div>
      )}
      {(res.data.member.status === "APPROVED" ||
        res.data.member.status === "PENDING") && (
        <div className="mt-10">
          <button
            className="btn-primary btn"
            onClick={async () => {
              await setAsMember.mutateAsync({ memberId });
              await res.refetch();
            }}
          >
            Rendi Socio senza aspettare pagamento!
          </button>
        </div>
      )}
    </>
  );
};

export default MemberPage;
