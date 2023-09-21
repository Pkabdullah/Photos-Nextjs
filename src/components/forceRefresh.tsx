"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ForceResfresh (){
    const router = useRouter();

    useEffect(() => {
        router.refresh()

    },[])
    return <></>
}