import React from "react";
import HeroTitle from "./hero-title";
import HeroDescription from "./hero-description";
import LinkWithArrow from "src/app/components/link-with-arrow";
import HeroImageRow from "../image-row";

export default async function Hero({
  children,
}: {
  children: readonly [
    React.ReactElement<typeof HeroTitle> & { type: typeof HeroTitle },
    React.ReactElement<typeof HeroDescription> & {
      type: typeof HeroDescription;
    },
    React.ReactElement<typeof LinkWithArrow> & { type: typeof LinkWithArrow },
    React.ReactElement<typeof HeroImageRow> & { type: typeof HeroImageRow }
  ];
}) {
  return (
    <div className="container mx-auto py-14 px-4 md:px-0 group">
      <div data-hero></div>
      {children}
    </div>
  );
}
