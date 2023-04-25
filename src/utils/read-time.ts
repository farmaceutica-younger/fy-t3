import { convert } from "html-to-text";
const wpm = 225;

export function readTime(html: string) {
  const text = convert(html);
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm);
  return time;
}
