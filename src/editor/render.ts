import { generateHTML } from "@tiptap/html";
import { extensions } from "./extensions";
import { type JSONContent } from "@tiptap/react";
import { type JSONValue } from "superjson/dist/types";

export const renderHTML = (doc: JSONValue) => {
  return generateHTML(doc as unknown as JSONContent, extensions);
};
