import slug from "slug";

export function computePostPath(title: string, pt: Date) {
  const month = String(pt.getMonth() + 1).padStart(2, "0");
  if (title.length > 50) {
    title = title.substring(0, 50);
  }
  const yy = pt.getFullYear();

  // create string in form: 2022/01/slug
  return `/blog/${yy}/${month}/${slug(title)}`;
}
