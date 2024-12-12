import React from "react";
import Hero from "../_components/hero";
import HeroTitle from "../_components/hero/hero-title";
import HeroDescription from "../_components/hero/hero-description";

import dccEnergi1 from "./images/1.jpg";
import dccEnergi2 from "./images/2.png";
import largeImage from "./images/large.png";
import bottom1 from "./images/bottom1.png";
import bottom2 from "./images/bottom2.png";
import Section from "../_components/section";
import SectionTitle from "../_components/section/section-title";
import SectionDescription from "../_components/section/section-description";
import ImageRow from "../_components/image-row";
import ExternalLink from "../_components/hero/external-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duckwise X Børneriget Fonden Case - Katja Kurz Levring",
  description:
    "DCC Energi ønskede et ny og moderne website. Vi skabte fleksibilitet og til hurtigt at skabe informativt indhold ved at kombinere forskellige moduler.",
  openGraph: {
    title: "Duckwise X Børneriget Fonden - Katja Kurz Levring",
    description:
      "Duckwise ønskede et ny og moderne website. Vi skabte fleksibilitet og til hurtigt at skabe informativt indhold ved at kombinere forskellige moduler.",
    images: [
      {
        url: "/images/home-grid/dcc-energi.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Page() {
  return (
    <>
      <Hero>
        <HeroTitle>Duckwise</HeroTitle>
        <HeroDescription>
          Duckwise ønskede et ny og moderne website. Vi skabte fleksibilitet
          og til hurtigt at skabe informativt indhold ved at kombinere
          forskellige moduler.
        </HeroDescription>
        <ExternalLink />

        <ImageRow
          className="mt-16"
          sources={[
            { src: dccEnergi1, alt: "DCC Energi" },
            { src: dccEnergi2, alt: "DCC Energi" },
          ]}
        />
      </Hero>
      <Section hasBackground>
        <SectionTitle>Min rolle på projektet</SectionTitle>
        <SectionDescription>
          <p>
            Jeg kom på projektet efter salgspitch og research. Derfor var der
            allerede en masse grundarbejde, som jeg skulle være ajour med. Min
            primære opgave bestod bl.a. i at udarbejde navigationsprincip og
            designe wireframes med moduler og komponenter som var en del af
            salget og opgaven. Der er to primære målgrupper, private og
            erhvervsfolk, hvor indholdet naturligvis skulle kunne differentieres
            efter behov, men have den samme struktur. Derudover var der et stort
            ønske om at den grønne tilgang skulle inkorporeres. Det kom til at
            hedde Energiomstilling. Og så blev der ellers bare produceret og
            vist frem til styregruppemøder, projektgruppen og DCC Energi.
          </p>
        </SectionDescription>
        <ImageRow
          sources={[{ src: largeImage, alt: "DCC Energi iPhone app" }]}
          className="justify-center mt-20"
        />
      </Section>
      <Section className="">
        <SectionTitle>Design og aflevering</SectionTitle>
        <SectionDescription>
          <p>
            Mod leveringsdato og designet var blevet udformet, hjalp jeg med at
            få lavet en god leverance til vores udviklere. Denne leverance
            bestod af en kitchen sink over alt design i form af komponenter og
            moduler både vist i desktop og mobile, med tilhørende forklarende
            tekst. Sidetyperne var også designet med diverse, så designet kom
            til sit rette element. Derefter kunne udvikling påbegyndes med en
            leverance med alt UX og UI.
          </p>
        </SectionDescription>
      </Section>
      <div className="container mx-auto">
        <ImageRow
          sources={[
            { src: bottom1, alt: "DCC Energi iPhone app" },
            { src: bottom2, alt: "DCC Energi iPhone app" },
          ]}
          className="container gap-4"
        />
      </div>
    </>
  );
}
