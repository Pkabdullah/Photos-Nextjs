"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "removeBackground"
  >();
  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");


  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit{publicId}</h1>
        </div>

        <div className="flex gap-4 ">
          <Button
            variant="ghost"
            onClick={() => {
              setTransformation(undefined);
            }}
            className="  rounded bg-black"
          >
            Clear All
          </Button>
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt)
              }}
              className=" bg-white text-black hover:bg-white rounded gap-4"
            >
              Apply Generative Fill
            </Button> 
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>

          <Button
            onClick={() => {
              setTransformation("blur");
            }}
            className=" bg-white text-black hover:bg-white rounded"
          >
            Apply Blur
          </Button>
          <Button
            onClick={() => {
              setTransformation("grayscale");
            }}
            className=" bg-white text-black hover:bg-white rounded "
          >
            Convert Grayscale
          </Button>
          <Button
            onClick={() => {
              setTransformation("pixelate");
            }}
            className=" bg-white text-black hover:bg-white rounded"
          >
            Apply Pixelate
          </Button>
          <Button
            onClick={() => {
              setTransformation("removeBackground");
            }}
            className=" bg-white text-black hover:bg-white rounded"
          >
            Remove Background
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <CldImage src={publicId} width="300" height="200" alt=" an image" />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1800"
              height="1200"
              alt=" an image"
              crop="pad"
              fillBackground={{
                prompt
              }}
            />
          )}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt=" an image"
              blur=""
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt=" an image"
              grayscale
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt=" an image"
              pixelate
            />
          )}
          {transformation === "removeBackground" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt=" an image"
              removeBackground
            />
          )}
        </div>
      </div>
    </section>
  );
}
