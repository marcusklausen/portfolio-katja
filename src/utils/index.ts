export const portfolioCardHeightMap = {
  short: "280px",
  medium: "420px",
  tall: "560px",
} as const;

export type PortfolioCardHeight = keyof typeof portfolioCardHeightMap;
