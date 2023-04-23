import { useCallback } from "react";
import { toast } from "react-toastify";
import { reactApi } from "~/utils/api";
import { cloudinaryUploadImage } from "./utils";

export const useUserUpload = () => {
  const getUploadSignatureMut = reactApi.me.getUploadSignature.useMutation();

  return useCallback(
    (file: Blob) => {
      return toast.promise(
        cloudinaryUploadImage(file, () => getUploadSignatureMut.mutateAsync()),
        {
          pending: "Caricamento in corso",
          success: "Immagine Caricata",
          error: "Errore nel caricamento",
        }
      );
    },
    [getUploadSignatureMut]
  );
};

export const useAuthorUpload = () => {
  const getUploadSignatureMut =
    reactApi.author.getUploadSignature.useMutation();

  return useCallback(
    (file: Blob) => {
      return toast.promise(
        cloudinaryUploadImage(file, () => getUploadSignatureMut.mutateAsync()),
        {
          pending: "Caricamento in corso",
          success: "Immagine Caricata",
          error: "Errore nel caricamento",
        }
      );
    },
    [getUploadSignatureMut]
  );
};
