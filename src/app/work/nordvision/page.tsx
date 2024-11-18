import React from "react";
import Hero from "../_components/hero";
import HeroTitle from "../_components/hero/hero-title";
import HeroDescription from "../_components/hero/hero-description";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import largeImage from "./images/large.jpg";
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
        <HeroTitle>Nordvision</HeroTitle>
        <HeroDescription>
          Kunden ønskede et nyt, intuitivt brugerflow til My Nordvision, hvor
          ansatte fra radiokanaler som DR og NRK kunne få detaljeret overblik
          over projekter og afgive støtte til en evt. produktion.
        </HeroDescription>
        <ExternalLink />

        <ImageRow
          className="mt-16"
          sources={[
            { src: img1.src, alt: "Ethics and Society" },
            { src: img2.src, alt: "Ethics and Society" },
          ]}
        />
      </Hero>
      <Section hasBackground={true} className="pb-0">
        <SectionTitle>Min rolle på projektet</SectionTitle>
        <SectionDescription>
          <p>
            Som UX designer havde jeg ansvaret for at udvikle et effektivt og
            brugervenligt flow for loggede brugere på My Nordvision. Opgaven
            omfattede at skabe en overskuelig struktur, hvor man nemt kunne
            navigere mellem projekter, finde de nødvendige oplysninger og afgive
            evalueringer. Gennem brugertests og iterativ udvikling justerede vi
            layout og interaktioner for at sikre en gnidningsfri oplevelse, der
            opfyldte brugernes behov i deres daglige arbejde.
          </p>
        </SectionDescription>
        <ImageRow
          sources={[
            {
              src: largeImage.src,
              alt: "Ethics and Society phone app concept",
            },
          ]}
          className="justify-center mt-20"
        />
      </Section>
      <Section className="">
        <SectionTitle>Design og aflevering</SectionTitle>
        <SectionDescription>
          <p>
            I designet arbejdede vi med stor kreativ frihed, men inden for
            Nordvisions eksisterende designguide for farver og fonte. Jeg
            udviklede et komponentbibliotek, der gjorde det muligt at videreføre
            designstilen på tværs af hele brugeroplevelsen, samtidig med at vi
            skabte et detaljeret og dynamisk layout for hvert projekt. Efter
            omfattende tests og tilpasninger, som blev gennemgået og godkendt
            med Nordvision, blev den fulde løsning sendt afsted til udvikling.
          </p>
        </SectionDescription>
      </Section>
      <div className="container mx-auto">
        <ImageRow
          sources={[
            { src: bottom1.src, alt: "DCC Energi iPhone app" },
            { src: bottom2.src, alt: "DCC Energi iPhone app" },
          ]}
          className=""
        />
      </div>
    </>
  );
}
