import React from "react";
import LinkWithArrow from "src/app/components/link-with-arrow";
import Hero from "../_components/hero";
import HeroDescription from "../_components/hero/hero-description";
import HeroImageRow from "../_components/image-row";
import HeroTitle from "../_components/hero/hero-title";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";

export default async function Page() {
  return (
    <Hero>
      <HeroTitle>Landbrugsavision</HeroTitle>
      <HeroDescription>
        Landbrugsavision ønskede et ny og moderne website. Vi skabte
        fleksibilitet og til hurtigt at skabe informativt indhold ved at
        kombinere forskellige moduler. til hurtigt at skabe informativt indhold
        ved at kombinere forskellige moduler.
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
