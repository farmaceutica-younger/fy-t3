import {
  faBold,
  faImage,
  faItalic,
  faLink,
  faList,
  faListOl,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import clsx from "clsx";
import { Fragment, useCallback } from "react";
import { useField } from "react-final-form";
import { extensions } from "~/editor/extensions";

interface EditorFieldProps {
  name: string;
  uploadImage: (file: Blob) => Promise<string>;
}

export const EditorField = ({ name, uploadImage }: EditorFieldProps) => {
  const { input } = useField<string>(name, { type: "text" });

  const editor = useEditor({
    extensions: extensions,
    onUpdate: ({ editor }) => {
      const content = editor.getJSON();
      input.onChange(content);
    },
    content: input.value,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm overflow-y-scroll bg-white max-w-6xl focus:outline-none px-2 py-4 h-full overflow-y-scroll shadow ring-1 ring-pink-200",
      },
    },
  });
  if (!editor) {
    return null;
  }
  return (
    <div className="flex h-full flex-col overflow-hidden bg-stone-100 p-2">
      <div className="flex h-full flex-col ring-1 ring-pink-200">
        <MenuBar editor={editor} />
        <EditorContent
          className="flex-grow overflow-y-scroll"
          editor={editor}
        />
      </div>
    </div>
  );
};

export const MenuBar = ({ editor }: { editor: Editor }) => {
  const className = "h-10 w-10 text-lg hover:bg-gray-200 text-gray-800";

  const setLink = useCallback(() => {
    if (editor.isActive("link")) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) {
      return;
    }
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="flex items-center border-b border-gray-200 bg-white px-2">
      <Headings editor={editor} />
      <div className="h-10 self-stretch border-l border-gray-200 "></div>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={clsx(className, {
          "bg-blue-100 text-blue-800": editor.isActive("bold"),
        })}
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faBold} className="h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={clsx(className, {
          "bg-blue-100 text-blue-800": editor.isActive("italic"),
        })}
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faItalic} className="h-4" />
      </button>
      <div className="h-10 self-stretch border-l border-gray-200 "></div>

      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={clsx(className, {
          "bg-blue-100 text-blue-800": editor.isActive("bulletList"),
        })}
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faList} className="h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={clsx(className, {
          "bg-blue-100 text-blue-800": editor.isActive("orderedList"),
        })}
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faListOl} className="h-4" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={clsx(className, {
          "bg-blue-100 text-blue-800": editor.isActive("blockquote"),
        })}
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faQuoteLeft} className="h-4" />
      </button>
      <button
        onClick={setLink}
        className={clsx(className, {
          "bg-blue-100 text-blue-800": editor.isActive("link"),
        })}
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faLink} className="h-4" />
      </button>
      <button
        onClick={() =>
          editor.chain().setImage({ src: "https://picsum.photos/200" }).run()
        }
        className={clsx(className, {
          "bg-blue-100 text-blue-800": editor.isActive("link"),
        })}
      >
        {/* @ts-ignore */}
        <FontAwesomeIcon icon={faImage} className="h-4" />
      </button>
    </div>
  );
};

export function Headings({ editor }: { editor: Editor }) {
  const textValues = [
    {
      label: "Testo Normale",
      value: "p",
      activate: () => editor.chain().focus().setParagraph().run(),
    },
    {
      label: "Titolo",
      value: "h2",
      active: editor.isActive("heading", { level: 2 }),
      activate: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Sotto Titolo",
      value: "h3",
      active: editor.isActive("heading", { level: 3 }),
      activate: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
  ];
  const selected = textValues.find((item) => item.active) || textValues[0]!;

  return (
    <div className="z-10">
      <Listbox value={selected} onChange={(v) => v.activate()}>
        <div className="relative mt-1 w-40">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {textValues.map((style) => (
                <Listbox.Option
                  key={style.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={style}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {style.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

const lipsum = `<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque accumsan dignissim nibh pretium malesuada. Maecenas quis mi faucibus, pulvinar ipsum ac, blandit orci. In hac habitasse platea dictumst. Aenean nibh ex, maximus in enim nec, condimentum varius risus. Phasellus lacus felis, semper sed dapibus a, laoreet a risus. Sed eleifend mi eget volutpat convallis. Mauris consequat mollis neque eget rutrum. Integer et commodo sapien, sit amet ultricies urna.
</p>
<p>
Etiam tristique mollis nisi ac fringilla. Pellentesque cursus eleifend sodales. Suspendisse nec tempus augue. Vestibulum quis velit varius lorem rhoncus ultricies eget non felis. Etiam ullamcorper a mi sed ullamcorper. Fusce consectetur malesuada tincidunt. Aenean pellentesque hendrerit leo a pellentesque. Aenean interdum eu massa sed blandit. Nulla vitae lacus velit. Suspendisse eget sem in neque posuere consectetur a vitae magna. Praesent cursus, lectus bibendum pretium efficitur, ante risus tristique sapien, a vulputate urna ante id ante. Fusce dictum, nulla in pretium faucibus, ante mauris faucibus nibh, a molestie metus elit iaculis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut mauris tortor, mattis a laoreet tempus, tincidunt nec justo. Fusce posuere felis est, ut suscipit augue condimentum vel. Vivamus sed sollicitudin nibh.
</p>
<p>
Phasellus euismod varius eleifend. Sed luctus neque quis maximus vulputate. Vestibulum aliquam augue justo, nec tincidunt sapien lacinia nec. Sed dolor velit, fringilla quis quam et, faucibus mollis velit. Duis mollis diam vitae tellus viverra iaculis. Donec tortor felis, euismod nec dignissim vitae, ullamcorper at arcu. Donec vel convallis massa. Nam massa mi, vestibulum eu suscipit eget, ultrices in turpis. Mauris id odio et tellus commodo dapibus at sit amet eros. Duis tempus, urna vel bibendum elementum, metus eros dictum quam, et venenatis quam nisl non nisi. Maecenas risus mauris, condimentum quis lectus ut, dignissim euismod sapien. Sed fringilla sem non suscipit rhoncus. Vestibulum lacinia luctus orci mattis iaculis. Nulla vel facilisis ipsum. Donec mi metus, accumsan sed commodo eu, lacinia eu mauris. Maecenas quis enim at enim sodales laoreet.
</p>
<p>
Integer a lacus cursus, aliquam nisi et, sollicitudin nisl. Proin porttitor diam turpis, nec pellentesque magna convallis aliquet. Aliquam turpis risus, feugiat eu laoreet ac, mollis feugiat arcu. Suspendisse potenti. Nullam semper diam enim, posuere fermentum mi imperdiet eu. Phasellus vitae ex accumsan, tincidunt libero sit amet, sagittis nunc. Quisque lacinia, nulla id bibendum congue, diam augue condimentum mi, quis ultrices purus lectus vel dolor. Vestibulum viverra convallis nibh, a sodales orci tristique vitae. Nunc eget erat non dui maximus malesuada at et turpis. Donec aliquet scelerisque eros sed suscipit. Nunc porttitor purus non velit blandit, eget fringilla velit posuere. Nulla facilisi. Vivamus at ultrices leo. Ut leo urna, hendrerit vitae scelerisque id, cursus ac nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis orci bibendum odio lacinia volutpat.
</p>
<p>
Duis non semper libero. In in fermentum arcu. Fusce et sem a mi tristique gravida ut at leo. Vivamus vitae pulvinar enim, non sodales lorem. Cras posuere, dolor a varius facilisis, massa ante efficitur mi, eu condimentum ipsum velit in purus. In molestie sit amet nibh quis aliquam. Nunc dignissim turpis ut sapien hendrerit facilisis. Vestibulum mollis ex porttitor aliquet scelerisque. Nulla est ex, accumsan at consectetur sit amet, porta venenatis quam. Sed volutpat rutrum risus, quis rhoncus arcu tempus vel. Suspendisse porta enim ornare risus consequat, a pellentesque elit mattis. Nunc faucibus elementum nunc, sit amet sodales massa ornare ac. Mauris eu lobortis risus, eget elementum risus.
</p>`;
