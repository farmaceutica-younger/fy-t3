import { Editor } from "@tiptap/react";
import { z } from "zod";
import { ZodForm } from "~/forms/zod-form";
import { useCloseDialog, useOpenDialog } from "~/hooks/dialog/dialog";
import { useAuthorUpload } from "~/hooks/upload/upload-image";
import { resizeCloudinaryImage } from "~/ui/cloudinary-image";
import { FeatureImageField } from "../image-field";
import { TextField } from "../text-field";

export const useOpenUploadDialog = (editor: Editor) => {
  const open = useOpenDialog();

  return () => open(<UplaodDialog editor={editor} />);
};

const EditorSchema = z.object({
  src: z.string().url(),
  alt: z.string(),
});

export const UplaodDialog = ({ editor }: { editor: Editor }) => {
  const uploadImg = useAuthorUpload();
  const closeDialog = useCloseDialog();
  return (
    <ZodForm
      schema={EditorSchema}
      onSubmit={({ alt, src }) => {
        src = resizeCloudinaryImage(src, 800);
        editor.chain().setImage({ alt, src }).run();
        closeDialog();
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="w-80">
          <FeatureImageField label="Image" name="src" uploadImage={uploadImg} />
          <TextField label="alt" name="alt" />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="btn-ghost btn-sm btn"
              onClick={() => closeDialog()}
            >
              Annulla
            </button>
            <button type="submit" className="btn-primary btn-sm btn">
              Ok
            </button>
          </div>
        </form>
      )}
    </ZodForm>
  );
};
