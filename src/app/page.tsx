"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
;

 export type UploadResult = {
  info: {
    public_id: string;
  };
  event: 'success';
};

export default function page () {

  const [imageId,setImageId]=useState("")
  return (
    

    <main className="   flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton className="bg-white text-black w-36 h-12 rounded hover:bg-slate-500"
        onUpload={(result: UploadResult) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="dk9leemtx"
      />
      {imageId &&

      <CldImage
        width="400"
        height="300"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
}
    </main>
  );
};

