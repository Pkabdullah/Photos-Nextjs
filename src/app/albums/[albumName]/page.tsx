import cloudinary from "cloudinary";

import { CldImage } from "next-cloudinary";

import { ImageGrid } from "@/components/image-grid";
import AlbumGrid from "./album-grid";
import { SearchResult } from "@/app/gallery/page";
import { ForceResfresh } from "@/components/forceRefresh";

export default async function GalleryPage({
  params: { albumName },
}: {
  params: {
    albumName: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceResfresh/>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Album {albumName}</h1>
        </div>

        <AlbumGrid images={results.resources} />
        <div className="grid grid-cols-4 gap-8 "></div>
      </div>
    </section>
  );
}
