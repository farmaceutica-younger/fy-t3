"use client";
import { useSession } from "next-auth/react";
import { DashboardContainer } from "~/ui/dashboard-container";
import { Loading } from "~/ui/loading";
import { reactApi } from "~/utils/api";
import { Membership } from "./membership";
import { ProfileInfo } from "./profile";

const ProfilePage = () => {
  const session = useSession();
  const pq = reactApi.me.profilePageData.useQuery();
  if (pq.isLoading || session.status === "loading") {
    return <Loading />;
  }

  if (pq.error) {
    return <pre>{JSON.stringify(pq, null, 2)}</pre>;
  }

  const user = pq.data;

  return (
    <DashboardContainer>
      <div className="prose">
        <h2>Benvenuto, {session.data?.user.name}</h2>
        <p>
          In questa pagina puoi gestire il tuo profilo su farmaceutica younger!
        </p>
      </div>
      <ProfileInfo data={user} />
      <div className="mt-10"></div>
      <Membership data={user} />
    </DashboardContainer>
  );
};

export default ProfilePage;
