import { PortfolioCardHeight } from "src/utils";

export type PortfolioGridItem =
  | {
      title: string;
      height: PortfolioCardHeight;
      description?: string;
      slug?: string;
      imageSrc?: string;
      isEmpty?: never;
      className?: string;
      style?: React.CSSProperties;
    }
  | {
      isEmpty: true;
    };
