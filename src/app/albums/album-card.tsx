import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Folder } from "./page";
import Link from "next/link";

export function AlbumCard({ folder }: { folder: Folder }) {
  return (
    <Card className="rounded-xl flex-col">
      <CardHeader>
        <CardTitle>{folder.name} </CardTitle>

        <CardDescription className="text-gray-400">All your {folder.name}images </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between ">
        <Button asChild className="bg-white text-black hover:bg-white rounded-lg">
          <Link href={`/albums/${folder.name}`} >View Album </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
