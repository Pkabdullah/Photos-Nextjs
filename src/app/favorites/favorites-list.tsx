"use client"
import { CloudinaryImage } from "../../components/cloudinary-image";
import { SearchResult } from "../gallery/page";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  const [resources, setResources] = useState(initialResources);

  useEffect(()=>{
    setResources(initialResources)
  },[initialResources])
  return (
    <ImageGrid
     images={resources}
        getImage={(imageData:SearchResult)=>{
        return(
          <CloudinaryImage
          key={imageData.public_id}
          imageData={imageData}
          alt="abdcefghijklmnop"
          width="400"
          height="300"
          onUnheart={(unheartedResource) => {
            setResources((currentResources) =>
              currentResources.filter(
                (resource) => resource.public_id !== unheartedResource.public_id
              )
            );
          }}
        /> 
        )
        }}/>
  )
  
}
