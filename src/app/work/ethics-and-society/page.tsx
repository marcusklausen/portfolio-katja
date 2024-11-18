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
  title: "Ethics & Society Case - Katja Kurz Levring",
  description:
    "Ethics & Society ønskede et touchup af design og UX på websitet. Redesignet gav sitet nyt liv og en behagelig oplevelse for alle besøgende.",
  openGraph: {
    title: "Ethics & Society Case - Katja Kurz Levring",
    description:
      "Ethics & Society ønskede et touchup af design og UX på websitet. Redesignet gav sitet nyt liv og en behagelig oplevelse.",
    images: [
      {
        url: "/images/home-grid/ethics-and-society.jpg",
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
            { src: img1.src, alt: "Ethics and Society" },
            { src: img2.src, alt: "Ethics and Society" },
          ]}
        />
      </Hero>
      <Section hasBackground={true} className="pb-0">
        <SectionTitle>Min rolle på projektet</SectionTitle>
        <SectionDescription>
          <p>
            Kunden ønskede at både design og UX blev forfrisket og opdateret.
            Opgaven lød på at forbedre det eksisterende design og optimere
            brugeroplevelsen.På projektet håndterede jeg både UX-design, grafisk
            design og kundekontakt. Min funktion som UX-designer fokuserede på
            at forbedre brugeroplevelsen gennem intuitive grænseflader, mens jeg
            som grafisk designer skabte visuelt tiltalende designs. Mit
            engagement i direkte kundekontakt sikrede, at projektet ikke kun
            opfyldte tekniske krav, men også kundens forventninger og mål.
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
            Det eksisterende design havde allerede logo, typografi og en
            farvepalette. Da hjemmesiden er en underhjemmeside til Ebrains var
            logoet allerede udformet, og ikke en del af opgaven til redesignet.
            Derfor arbejdede jeg med en ny farvepalette og hierarki på
            typografien. Kunden ønskede grønne og blålige nuancer, så der var en
            strømlinet sammenhæng mellem de andre underhjemmesider og Ebrains.
            Redesignet udmundede i et opdateret design i form af nye farver og
            hierarki af typografi, samt margen og struktur af indholdet.
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
