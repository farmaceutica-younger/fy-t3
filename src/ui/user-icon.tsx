import { FC } from "react";

export const UserAvatar: FC<{ src: string; size?: number; name: string }> = ({
  name,
  src,
  size = 200,
}) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="mx-auto h-6 w-6 rounded-full lg:h-8 lg:w-8"
      src={squaredCloudinaryImage(src, size)}
      alt={name}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = `https://ui-avatars.com/api/?background=random&name=${name}`;
      }}
    />
  );
};

const rg = /https?:\/\/res.cloudinary.com\/(.*)\/image\/upload\/v[^\/]*(.*)/;
const squaredCloudinaryImage = (link: string, s: number) => {
  return link.replace(rg, (_, name, id) => {
    return `https://res.cloudinary.com/${name}/image/upload/c_fill,w_${s},h_${s},f_auto${id}`;
  });
};
