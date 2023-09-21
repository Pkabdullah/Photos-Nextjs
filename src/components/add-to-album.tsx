import { SearchResult } from "@/app/gallery/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { addImageToAlbum } from "./actions";

export function AddToAlbumDialog({
  image,
  onClose,
}: {
  image: SearchResult;
  onClose: () => void;
}) {
  const [albumName, setAlbumName] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpenState) => {
        setOpen(newOpenState);
        if (!newOpenState) {
          onClose();
        }
      }}
    >
      <div className="hover:bg-gray-600 ">
      <DialogTrigger className="hover:bg-gray-600 ">
        <Button variant="ghost" >
          <FolderPlus className="mr-2 h-4 w-4 " />
          <span className="text-xs">Add to Album</span>
        </Button>
      </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px] bg-black">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription className="text-gray-300">
            Type the album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
              onChange={(e) => setAlbumName(e.currentTarget.value)}
              id="album-name"
              value={albumName}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              onClose()
              setOpen(false);
              await addImageToAlbum(image, albumName);
            }}
            type="submit"
            className="bg-white text-black hover:bg-white "
          >
            Add to Album
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
