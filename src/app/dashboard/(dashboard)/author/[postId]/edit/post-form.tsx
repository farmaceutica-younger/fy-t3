import styled from "@emotion/styled";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { DatePickerField } from "~/forms/fields/date-picker";
import { PostPage } from "~/ui/post";
import deepEqual from "fast-deep-equal";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Field, FormSpy } from "react-final-form";
import { z } from "zod";
import { ZodForm } from "~/forms/zod-form";
import { reactApi } from "~/utils/api";
import { readTime } from "~/utils/read-time";
import { MultiSelectField } from "~/forms/fields/multi-select-field";
import { FeatureImageField } from "~/forms/fields/image-field";
import { SwitchField } from "~/forms/fields/switch-field";
import { TextField } from "~/forms/fields/text-field";
import clsx from "clsx";

const EditorField = dynamic(
  () => import("~/forms/fields/editor").then((m) => m.EditorField),
  {
    ssr: false,
  }
);

type Author = {
  name: string;
  bio: string;
  profileImage: string;
};

export const PostFormSchema = z.object({
  title: z.string().max(100),
  description: z.string().max(500),
  body: z.string(),
  featuredImage: z.string(),
  publishedTime: z.date(),
  showFeaturedImage: z.boolean(),
  tags: z.string().array(),
});

type PostType = z.TypeOf<typeof PostFormSchema>;

export interface PostFormProps {
  initialValue: Partial<PostType>;
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
  const [showPreview, setShowPreview] = useState(false);

  const openPreview = () => setShowPreview(true);

  return (
    <ZodForm
      schema={PostFormSchema}
      initialValues={initialValue}
      initialValuesEqual={deepEqual}
      onSubmit={onSave}
    >
      {({ handleSubmit, invalid, submitting }) => {
        return (
          <PostFormStyled onSubmit={handleSubmit}>
            <EditorField uploadImage={uploadImage} name="body" />
            <div className="fields relative bg-white">
              <div className="px-2 py-2">
                <PostFormFiels uploadImage={uploadImage} />
              </div>
              <div className="sticky bottom-0 flex justify-end space-x-2 border-gray-200 bg-white py-2 px-4">
                <button
                  className="btn-ghost btn-sm btn"
                  type="button"
                  onClick={back}
                >
                  Annulla
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
            <Dialog
              open={showPreview}
              onClose={() => setShowPreview(false)}
              className="fixed inset-0 z-50 overflow-y-auto "
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

              <div className="fixed inset-10 overflow-auto rounded bg-white shadow-xl ring-1">
                <FormSpy<PostType>
                  render={({ values }) => (
                    <div className="overflow-y-scroll rounded-2xl">
                      <PostPreview post={values} author={author} />
                    </div>
                  )}
                ></FormSpy>
                <button
                  onClick={() => setShowPreview(false)}
                  className="absolute top-4 right-4 grid h-10 w-10 place-content-center rounded-full hover:bg-slate-200"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </Dialog>
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

type PostData = Awaited<ReturnType<typeof getPostPreviewData>>;

const PostPreview = ({ post, author }: { post: PostType; author: Author }) => {
  const { mutateAsync: mut } = reactApi.author.mdSerialize.useMutation();

  const [data, setData] = useState<PostData | undefined>();
  useEffect(() => {
    const serialize = async (body: string) => {
      const { source } = await mut({ body });
      return source;
    };
    getPostPreviewData(post, serialize).then(setData);
  }, [post, mut]);

  if (!data) {
    return <p>loading....</p>;
  }

  const { frontmatter, mdxSource } = data;

  return (
    <PostPage frontmatter={frontmatter} source={mdxSource} author={author} />
  );
};

const getPostPreviewData = async (
  post: PostType,
  serialize: (
    body: string
  ) => Promise<MDXRemoteSerializeResult<Record<string, unknown>>>
) => {
  const { body, ...frontmatter } = post;

  const mdxSource = await serialize(body);

  return {
    mdxSource,
    frontmatter: {
      ...frontmatter,
      showFeaturedImage: frontmatter.showFeaturedImage,
      readTime: readTime(body),
    },
  };
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
