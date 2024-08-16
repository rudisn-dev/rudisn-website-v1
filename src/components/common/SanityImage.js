import { getSanityImageConfig } from "../../../lib/sanity.client";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

export const SanityImage = (props) => {
  const { asset, alt, caption } = props;
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset);

  if (!imageProps) return null;

  return (
    <figure style={{ textAlign: "center" }}>
      <Image
        {...imageProps}
        alt={alt}
        sizes="(max-width: 800px) 100vw, 800px"
        style={{ maxWidth: "100%", height: "auto" }} // Inline CSS for image styling
      />
      {caption && (
        <figcaption
          style={{
            marginTop: "0.5rem",
            fontStyle: "italic",
            fontSize: "0.875rem",
            color: "#6c757d", // Bootstrap's gray-500 color
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
