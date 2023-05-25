import { JobForm } from "components/form/jobs-form";
import { PostForm } from "components/form/post-form";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { cloudinaryUploadImage } from "utils/cloudinary";
import { trpc } from "utils/trpc";

const EditPostPage = () => {
  const router = useRouter();
  const jobId = router.query.jobId as string;

  const { mutateAsync: getCloudinarySecret } =
    trpc.sponsoredJobs.cloudinaryUploadSignature.useMutation();
  const { mutateAsync: saveJob } =
    trpc.sponsoredJobs.saveSponsoredJob.useMutation();

  const {
    data,
    isLoading,
    refetch: refetchPost,
  } = trpc.sponsoredJobs.getSponsoredJob.useQuery({ id: jobId });

  const uploadImage = useCallback(
    (file: Blob) => {
      return cloudinaryUploadImage(file, () => getCloudinarySecret());
    },
    [getCloudinarySecret]
  );

  if (isLoading) {
    return <p>Loading .... </p>;
  }

  if (!data?.job) {
    return "error";
  }

  return (
    <div className="">
      <div className="m-auto w-full">
        <JobForm
          uploadImage={uploadImage}
          initialValue={data.job as any}
          back={() => router.push("..")}
          onSave={async (value) => {
            saveJob({
              job: value,
              id: jobId,
            });
          }}
        />
      </div>
    </div>
  );
};

export default EditPostPage;
