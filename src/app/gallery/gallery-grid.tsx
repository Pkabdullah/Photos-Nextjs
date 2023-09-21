"use client";

import { CloudinaryImage } from "../../components/cloudinary-image";
import { SearchResult } from "./page";
import { ImageGrid } from "@/components/image-grid";

export default function GalleryGrid({ images }: { images: SearchResult []}) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt="abdcefghijklmnop"
          />
        );
      }}
    />
  );
}
