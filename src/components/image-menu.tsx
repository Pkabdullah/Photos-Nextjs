import { FolderPlus, Menu, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AddToAlbumDialog } from "./add-to-album";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setopen] = useState(false);

  return (
    <div className="absolute top-2 right-2 bg-black ">
      <DropdownMenu open={open} onOpenChange={setopen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className=" w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32 bg-black rounded-lg">
          <DropdownMenuItem asChild>
            <AddToAlbumDialog image={image} onClose={() => setopen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild >
            <div className="hover:bg-gray-500">
          <Button asChild variant="ghost" className=" cursor-pointer flex justify-start pl-4">
            <Link 
              href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
            >
              <Pencil className="mr-2 w-4 h-4" />
              Edit
            </Link>
            </Button>  </div>
          </DropdownMenuItem>
        
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
