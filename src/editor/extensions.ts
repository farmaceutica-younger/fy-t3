import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import { Image } from "./image.plugin";

export const extensions = [
  Link.configure({
    protocols: ["https"],
    autolink: true,
  }),
  Image.configure({}),
  StarterKit,
];
