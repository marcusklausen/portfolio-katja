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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landbrugsavisen Case - Katja Kurz Levring ",
  description:
    "Landbrugsmedierne gav den opgave at der skulle sælges flere abonnementer til Landbrugsavisen, og meget gerne alt indhold og magasiner digitalt.",
  openGraph: {
    title: "Landbrugsavisen Case - Katja Kurz Levring",
    description:
      "Landbrugsmedierne gav den opgave at der skulle sælges flere abonnementer til Landbrugsavisen digitalt.",
    images: [
      {
        url: "/images/home-grid/landbrugsavisen.jpg",
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
        <HeroTitle>Ethics & Society</HeroTitle>
        <HeroDescription>
          Ethics & Society ønskede et touchup af design og UX på websitet.
          Redesignet gav sitet nyt liv og en behagelig oplevelse for alle
          besøgende.
        </HeroDescription>
        <ExternalLink />

        <ImageRow
          className="mt-16"
          sources={[
            { src: img1, alt: "Ethics and Society" },
            { src: img2, alt: "Ethics and Society" },
          ]}
        />
      </Hero>
      <Section hasBackground={true}>
        <SectionTitle>Min rolle på projektet</SectionTitle>
        <SectionDescription>
          <p>
            Landbrugsmedierne gav den opgave at der skulle sælges flere
            abonnementer til Landbrugsavisen, og meget gerne alt indhold og
            magasiner digitalt, da man ønsker at gå væk fra det fysiske blad.
            Jeg var med på projektet som UX designer. Der blev brugt mange timer
            på wireframes, nørdning med komponenter, prototyping som til sidst
            skulle ende ud med en række brugertests. Vi fokuserede på
            brugerrejsen fra første landingside, til slutpunktet hvor man gerne
            skulle have sagt ja til et abonnement. Det handlede også om at finde
            ud af hvad der betød noget for kunderne, og dette kunne man kun
            finde ud af ved at snakke med nogle landmænd.
          </p>
          <p>
            Jeg startede på dette projekt, først som praktikant, derefter som
            studentermedhjælper, og til sidst som fuldtidsansat. Så man kan godt
            sige at jeg har fulgt dette projekt til dørs og det var et af de
            projekter som jeg nød at arbejde på.
          </p>
        </SectionDescription>
        <ImageRow
          sources={[
            {
              src: largeImage,
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
            Efter brugertests med brugerne, afrapportering til kunden,
            optimering af indsigter, mange timers overvejelse af sprogvalg (for
            hvad appelerer til landmændende?), så blev alt UX godkendt af
            kunden. Og det var så fedt! Så gik opgaven videre til UI, for at
            løfte looket. Og da det blev godkendt, så var det sidste at kunden
            selv skulle udvikle det. Så tag et kig på abonnements flowet!
          </p>
        </SectionDescription>
      </Section>
      <div className="container mx-auto">
        <ImageRow
          sources={[
            { src: bottom1, alt: "DCC Energi iPhone app" },
            { src: bottom2, alt: "DCC Energi iPhone app" },
          ]}
          className=""
        />
      </div>
    </>
  );
}
