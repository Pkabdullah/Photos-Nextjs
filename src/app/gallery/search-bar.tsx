"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchBar({initialSearch}:{initialSearch:string}) {
  const [tagname, setTagName] = useState(initialSearch??"");
  const router = useRouter();

  useEffect(()=>{
setTagName(initialSearch)
  },[initialSearch])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagname)}`)
        router.refresh()
      }}
    >
      <Label htmlFor="tag-name" className="text-right">
        Search By Tag
      </Label>
      <div className="flex gap-2">
       
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="album-name"
          value={tagname}
        />
        <Button
          type="submit"
          className=" text-white hover:bg-white hover:text-black rounded-xl"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
