"use client";

import { sortingAlgorithmType } from "@/lib/types";
import { createContext, useContext, useState } from "react";
import { MAX_ANIMATION_SPEED } from "@/lib/utils";

interface SortingAlgorithmContextType {
  arrayToSort: number[];
  setArrayToSort: React.Dispatch<React.SetStateAction<number[]>>;
  selectedAlgorithm: sortingAlgorithmType;
  setSelectedAlgorithm: React.Dispatch<
    React.SetStateAction<sortingAlgorithmType>
  >;
  isSorting: boolean;
  setIsSorting: React.Dispatch<React.SetStateAction<boolean>>;
  animationSpeed: number;
  setAnimationSpeed: React.Dispatch<React.SetStateAction<number>>;
  isAnimationComplete: boolean;
  setIsAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
  resetArrayAndAnimation: () => void;
  runAnimation: () => void;
}

const SortingAlgorithmContext = createContext<
  SortingAlgorithmContextType | undefined
>(undefined);

export const SortingAlgorithmProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [arrayToSort, setArrayToSort] = useState<number[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<sortingAlgorithmType>("bubble");
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [animationSpeed, setAnimationSpeed] =
    useState<number>(MAX_ANIMATION_SPEED);
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  const resetArrayAndAnimation = () => {
    // Add logic to reset the array and animation states
  };

  const runAnimation = () => {
    // Add logic to run the sorting animation
  };

  const value: SortingAlgorithmContextType = {
    arrayToSort,
    setArrayToSort,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isSorting,
    setIsSorting,
    animationSpeed,
    setAnimationSpeed,
    isAnimationComplete,
    setIsAnimationComplete,
    resetArrayAndAnimation,
    runAnimation,
  };

  return (
    <SortingAlgorithmContext.Provider value={value}>
      {children}
    </SortingAlgorithmContext.Provider>
  );
};

export const useSortingAlgorithmContext = () => {
  const context = useContext(SortingAlgorithmContext);
  if (!context) {
    throw new Error("The context must be within a provider");
  }
  return context;
};
