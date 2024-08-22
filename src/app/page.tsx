"use client";

import { useSortingAlgorithmContext } from "@/context/Visualizer";
import { useContext, useEffect } from "react";

export default function Home() {
  const { arrayToSort, isSorting } = useSortingAlgorithmContext();

  return (
    <main className="absolute top-0 h-screen w-screen z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#150229_1px)] bg-[size:40px_40px] "></main>
  );
}
