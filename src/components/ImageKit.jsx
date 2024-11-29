import { IKImage } from "imagekitio-react";

const ImageKit = ({ src, className, width, height, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
      lqip={{
        active: true,
        quality: 20,
      }}
    />
  );
};

export default ImageKit;
