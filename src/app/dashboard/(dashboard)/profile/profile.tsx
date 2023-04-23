import { ProfileForm } from "~/forms/profile/profile-form";
import { ProfileType } from "~/forms/profile/profile-schema";
import { useCallback } from "react";
import { ProfilePageComponentProps } from "./types";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import { reactApi } from "~/utils/api";
import { toast } from "react-toastify";

export const ProfileInfo = ({ data }: ProfilePageComponentProps) => {
  const openDialog = useOpenDialog();

  const profile = data.profile;
  if (!profile) {
    return (
      <div className="prose">
        <p>Non hai ancora configurato il tuo profilo!</p>
        <button
          className="btn-primary btn mt-4"
          onClick={() => openDialog(<ProfileDialog profile={profile} />)}
        >
          Configura il tuo Profilo!
        </button>
      </div>
    );
  }

  return (
    <div className="prose">
      <button
        className="btn-primary btn mt-4"
        onClick={() => openDialog(<ProfileDialog profile={profile} />)}
      >
        Aggiorna il tuo profilo!
      </button>
    </div>
  );
};

const ProfileDialog = ({
  profile,
}: {
  profile?: Partial<ProfilePageComponentProps["data"]["profile"]>;
}) => {
  const close = useCloseDialog();
  const utils = reactApi.useContext();
  const setProfile = reactApi.me.setProfile.useMutation({
    onSuccess: async () => {
      await utils.me.invalidate();
      close();
    },
  });

  const submitProfile = useCallback(
    async (data: ProfileType) => {
      await toast.promise(setProfile.mutateAsync(data), {
        pending: "Salvataggio in corso...",
        success: "Profilo salvato!",
        error: "Errore nel salvataggio del profilo",
      });
    },
    [setProfile]
  );

  return <ProfileForm submit={submitProfile} initialValues={profile} />;
};
