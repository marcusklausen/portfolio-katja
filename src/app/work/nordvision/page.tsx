import React from "react";
import LinkWithArrow from "src/app/components/link-with-arrow";
import Hero from "../_components/hero";
import HeroDescription from "../_components/hero/hero-description";
import HeroImageRow from "../_components/image-row";
import HeroTitle from "../_components/hero/hero-title";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

export default async function Page() {
  return (
    <Hero>
      <HeroTitle>Nordvision</HeroTitle>
      <HeroDescription>
        Kunden ønskede et nyt, intuitivt brugerflow til My Nordvision, hvor
        ansatte fra radiokanaler som DR og NRK kunne få detaljeret overblik over
        projekter og afgive støtte til en evt. produktion.
      </HeroDescription>
      <LinkWithArrow href="#">Besøg website</LinkWithArrow>
      <HeroImageRow
        sources={[
          { src: img1.src, alt: "Landbrugsavision" },
          { src: img2.src, alt: "Landbrugsavision" },
        ]}
      />
    </Hero>
  );
}
