import { toast } from "react-toastify";
import { TextField } from "~/forms/fields/text-field";
import { ZodForm } from "~/forms/zod-form";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import { CreateSponsoreJobSchema } from "~/schemas/sponsored-jobs/create-sponsored-jobs";
import { reactApi } from "~/utils/api";

export const useCreateSponsoredJob = () => {
  const openDialog = useOpenDialog();

  return () => openDialog(<CreateSponsoredJobDialog />);
};

const CreateSponsoredJobDialog = () => {
  const utils = reactApi.useContext();
  const closeDialog = useCloseDialog();

  const createPost = reactApi.author.createPost.useMutation({
    onSuccess: () => {
      utils.author.invalidate();
      closeDialog();
    },
  });

  return (
    <>
      <ZodForm
        onSubmit={async () => {
          await toast.promise(
            createPost.mutateAsync({ title: "asd", description: "asd" }),
            {
              pending: "Creating Post",
              success: "Post Created",
              error: "Error Creating Post",
            }
          );
        }}
        schema={CreateSponsoreJobSchema}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <h2 className="text-lg font-semibold">Crea un nuovo post </h2>
            </div>
            <TextField label="Titolo" name="title" />
            <TextField
              label="Post Description"
              name="description"
              numRows={5}
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="btn-ghost btn-xs btn"
                onClick={closeDialog}
              >
                Annulla
              </button>
              <button type="submit" className="btn-primary btn-xs btn">
                Salva
              </button>
            </div>
          </form>
        )}
      </ZodForm>
    </>
  );
};
