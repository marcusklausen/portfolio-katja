import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { projects } from "./constants";

export const portfolioCardHeightMap = {
  short: "280px",
  medium: "420px",
  tall: "560px",
} as const;

export type PortfolioCardHeight = keyof typeof portfolioCardHeightMap;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCaseLink(slug: string) {
  return projects
    .filter((project) => !project.isEmpty)
    .find((project) => project.slug === slug)?.externalLink;
}
