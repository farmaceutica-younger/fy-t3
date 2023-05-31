import { JobForm } from "components/form/jobs-form";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { cloudinaryUploadImage } from "utils/cloudinary";
import { trpc } from "utils/trpc";

const defaultBody = `
## Descrizione Job Post

## xxx

## xxxx
`;

const NewPostPage = () => {
  const router = useRouter();

  const { mutateAsync: getCloudinarySecret } =
    trpc.sponsoredJobs.cloudinaryUploadSignature.useMutation();
  const { mutateAsync: createJob } =
    trpc.sponsoredJobs.createSponsoredJob.useMutation();

  const uploadImage = useCallback(
    (file: Blob) => {
      return cloudinaryUploadImage(file, () => getCloudinarySecret());
    },
    [getCloudinarySecret],
  );

  return (
    <div className="m-auto w-full">
      <JobForm
        back={() => router.push(".")}
        uploadImage={uploadImage}
        initialValue={{
          body: defaultBody,
          publicStartDate: new Date(),
          publicEndDate: new Date(
            new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
          ),
          remoteType: "office",
        }}
        onSave={async (value) => {
          const res = await createJob(value);
          router.push(`/admin/sponsored-jobs/${res!.jobId}/edit`);
        }}
      />
    </div>
  );
};

export default NewPostPage;
