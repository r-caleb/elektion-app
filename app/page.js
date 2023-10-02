"use client";
import { useEffect, useLayoutEffect } from "react";
import Accueil from "./home/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = new useRouter();
  useLayoutEffect(() => {
    router.push("/home");
  }, []);
  return <></>;
}
