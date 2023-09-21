import cloudinary from "cloudinary";
import UploadButton from "./upload-button";
import { CldImage } from "next-cloudinary";
import { CloudinaryImage } from "../../components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";
import GalleryGrid from "./gallery-grid";
import { SearchBar } from "./search-bar";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GalleryPage({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags = ${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <div className="flex flex-col gap-8 ">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold sm:text-2xl md:text-3xl ">Gallery</h1>
          <UploadButton />
        </div>

        <SearchBar initialSearch={search} />

        <GalleryGrid images={results.resources} />
        <div className="grid grid-cols-4 gap-8 "></div>
      </div>
    </section>
  );
}
