import { FC } from "react";

export const CloudinaryImage: FC<{
  alt: string;
  src: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}> = ({ alt, src, size = 300, className, height, width }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={resizeCloudinaryImage(src, size)}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

const rg = /https?:\/\/res.cloudinary.com\/(.*)\/image\/upload\/v[^\/]*(.*)/;
export const resizeCloudinaryImage = (link: string, w: number) => {
  return link?.replace(rg, (_, name, id) => {
    return `https://res.cloudinary.com/${name}/image/upload/c_scale,w_${w},f_auto${id}`;
  });
};
