import styled from "@emotion/styled";
import clsx from "clsx";
import deepEqual from "fast-deep-equal";
import dynamic from "next/dynamic";
import { z } from "zod";
import { renderHTML } from "~/editor/render";
import { DatePickerField } from "~/forms/fields/date-picker";
import { FeatureImageField } from "~/forms/fields/image-field";
import { MultiSelectField } from "~/forms/fields/multi-select-field";
import { SwitchField } from "~/forms/fields/switch-field";
import { TextField } from "~/forms/fields/text-field";
import { ZodForm } from "~/forms/zod-form";
import { useOpenDialog } from "~/hooks/dialog/dialog";
import { PostPage } from "~/ui/post";

const EditorField = dynamic(
  () => import("~/forms/fields/editor").then((m) => m.EditorField),
  {
    ssr: false,
  }
);

type Author = {
  name: string;
  image: string;
};

export const PostFormSchema = z.object({
  title: z.string().max(100),
  description: z.string().max(500),
  body: z.object({
    type: z.literal("doc"),
    content: z.array(z.any()),
  }),
  featuredImage: z.string(),
  showFeaturedImage: z.boolean(),
  tags: z.string().array(),
});

type PostType = z.TypeOf<typeof PostFormSchema>;

export interface PostFormProps {
  initialValue: Partial<any>;
  uploadImage: (file: Blob) => Promise<string>;
  onSave: (value: PostType) => Promise<void>;
  back: () => void;
  author: Author;
}

export const PostForm = ({
  uploadImage,
  onSave,
  author,
  back,
  initialValue,
}: PostFormProps) => {
  const openDialog = useOpenDialog();

  return (
    <ZodForm
      schema={PostFormSchema}
      initialValues={initialValue}
      initialValuesEqual={deepEqual}
      onSubmit={onSave}
    >
      {({ handleSubmit, invalid, submitting, values }) => {
        return (
          <PostFormStyled onSubmit={handleSubmit}>
            <EditorField name="body" />
            <div className="fields flex flex-col bg-white">
              <div className="flex-grow px-2 py-2">
                <PostFormFiels uploadImage={uploadImage} />
              </div>
              <div className="sticky bottom-0 flex justify-end space-x-2 border-gray-200 bg-white px-4 py-2">
                <button
                  className="btn-ghost btn-sm btn"
                  type="button"
                  onClick={back}
                >
                  Indietro
                </button>
                <div className="flex-grow"></div>
                <button
                  type="button"
                  className="btn-primary btn-sm btn"
                  onClick={() =>
                    openDialog(<PostPreview post={values} author={author} />)
                  }
                >
                  Preview
                </button>

                <button
                  className={clsx("btn-primary btn-sm btn", {
                    loading: submitting,
                  })}
                  type="submit"
                  disabled={invalid}
                >
                  Salva
                </button>
              </div>
            </div>
          </PostFormStyled>
        );
      }}
    </ZodForm>
  );
};

const PostFormStyled = styled.form`
  display: grid;
  width: 100%;
  height: calc(100vh - 4rem);
  grid-template-columns: 2fr minmax(300px, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "editor fields";
  overflow: hidden;

  .editor {
    grid-area: editor;
  }

  .fields {
    grid-area: fields;
    overflow-y: scroll;
  }
`;

const PostPreview = ({ post, author }: { post: PostType; author: Author }) => {
  const html = renderHTML(post.body);
  return (
    <PostPage
      author={author}
      frontmatter={{
        featuredImage: post.featuredImage,
        publishedTime: new Date(),
        readTime: 5,
        showFeaturedImage: post.showFeaturedImage,
        tags: post.tags,
        title: post.title,
      }}
      html={html}
    />
  );
};

interface PostFormFielsProps {
  uploadImage: (file: Blob) => Promise<string>;
}

const PostFormFiels = ({ uploadImage }: PostFormFielsProps) => {
  return (
    <div className="space-y-6 divide-gray-200">
      <TextField type="text" name="title" label="Titolo del Post" />
      <MultiSelectField name="tags" label="Sezioni" options={categories} />
      <DatePickerField name="publishedTime" label="Data di Pubblicazione" />
      <TextField
        type="text"
        name="description"
        label="Descrizione del Post"
        max={500}
        numRows={5}
      />
      <FeatureImageField
        label="Immagine Copertina"
        uploadImage={uploadImage}
        name="featuredImage"
      />
      <SwitchField name="showFeaturedImage" label="Mostra Immagine" />
    </div>
  );
};

const categories: {
  value: string;
  label: string;
}[] = [
  {
    value: "hotthisweek",
    label: "Hot This Week",
  },
  {
    value: "pharmacronimi",
    label: "Farma Acronimi",
  },

  {
    value: "blog",
    label: "Articoli",
  },
  {
    value: "cgmp",
    label: "GMP",
  },
  {
    value: "pharmaquotes",
    label: "Farma Quotes",
  },
  {
    value: "intervista",
    label: "Interviste",
  },
];
