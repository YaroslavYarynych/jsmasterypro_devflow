import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techmap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normilizedTechName: string = techName
    .replace(/[ .]/g, "")
    .toLowerCase();

  return techMap[normilizedTechName]
    ? `${techMap[normilizedTechName]} colored`
    : "devicon-devicon-plain";
};
