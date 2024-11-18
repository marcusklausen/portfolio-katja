import React from "react";
import Hero from "../_components/hero";
import HeroTitle from "../_components/hero/hero-title";
import HeroDescription from "../_components/hero/hero-description";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

import bottom1 from "./images/bottom1.jpg";
import bottom2 from "./images/bottom2.jpg";
import Section from "../_components/section";
import SectionTitle from "../_components/section/section-title";
import SectionDescription from "../_components/section/section-description";
import ImageRow from "../_components/image-row";
import ExternalLink from "../_components/hero/external-link";

export default async function Page() {
  return (
    <>
      <Hero>
        <HeroTitle>Cphbusiness</HeroTitle>
        <HeroDescription>
          Cphbusiness ønskede en helt ny hjemmeside - både UX og UI. De ønskede
          bedre struktur og et helt nyt design og liv som skulle ruske op i
          deres så at sige konservative udtryk.
        </HeroDescription>
        <ExternalLink />

        <ImageRow
          className="mt-16"
          sources={[
            { src: img1.src, alt: "Cphbusiness" },
            { src: img2.src, alt: "Cphbusiness" },
          ]}
        />
      </Hero>
      <Section hasBackground={true} className="">
        <SectionTitle>Min rolle på projektet</SectionTitle>
        <SectionDescription>
          <p>
            Jeg kom sent ind på projektet, men derfor skal min portfolio da ikke
            snydes for et projekt jeg har bidraget til. Som mange andre
            projekter, er er en masse deadlines som skal overholdes og ligger
            altid lige om hjørnet. Og Cphbusiness var et kæmpe projekt. Derfor
            var der også en masse som skulle afleveres. Sidetyper, moduler,
            globale elementer, komponenter og styles - alt sammen i en samlet
            aflevering. Derfor var det all hands on deck. Udfra den styleguide
            og allerede lavet design, producerede jeg en masse sider og
            elementer som skulle med i afleveringen.Den aflevering har jeg lavet
            (sammen med projektet fantastiske projektleder, designer, og anden
            UX’er). Alt det flotte design skulle simpelthen nøje samles og
            kategoriseres. Vi afleverede en ordentlig bunke design til kunden,
            som selv stod for videre udvikling af løsningen. Aflevering vil jeg
            meget gerne vise til en privat samtale.
          </p>
        </SectionDescription>
      </Section>

      <div className="container mx-auto ">
        <ImageRow
          sources={[
            { src: bottom1.src, alt: "Cphbusiness" },
            { src: bottom2.src, alt: "Cphbusiness" },
          ]}
          className=""
        />
      </div>
    </>
  );
}
