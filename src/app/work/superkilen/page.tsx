import React from "react";
import Hero from "../_components/hero";
import HeroTitle from "../_components/hero/hero-title";
import HeroDescription from "../_components/hero/hero-description";

import superkilen1 from "./images/1.jpg";
import superkilen2 from "./images/2.jpg";
import largeImage from "./images/large.png";
import bottom1 from "./images/bottom1.jpg";
import bottom2 from "./images/bottom2.gif";
import Section from "../_components/section";
import SectionTitle from "../_components/section/section-title";
import SectionDescription from "../_components/section/section-description";
import ImageRow from "../_components/image-row";
import ExternalLink from "../_components/hero/external-link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superkilen Case - Katja Kurz Levring",
  description:
    "DCC Energi ønskede et ny og moderne website. Vi skabte fleksibilitet og til hurtigt at skabe informativt indhold ved at kombinere forskellige moduler.",
  openGraph: {
    title: "Superkilen - Katja Kurz Levring",
    description:
      "Duckwise ønskede et ny og moderne website. Vi skabte fleksibilitet og til hurtigt at skabe informativt indhold ved at kombinere forskellige moduler.",
    images: [
      {
        url: "/images/home-grid/superkilen.jpg",
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
        <HeroTitle>Superkilen Uncovered</HeroTitle>
        <HeroDescription>
        Konceptet Superkilen Uncovered lavede jeg i forbindelse med min eksamen på Digital Konceptudvikling. Et digitale koncept der bringer pladsens kulturelle historier til live gennem QR-koder. Projektet udforsker, hvordan teknologi kan øge de lokales kendskab og engagement med Superkilens unikke elementer. 
        </HeroDescription>
        <ExternalLink title="Prototype" />

        <ImageRow
          className="mt-16"
          sources={[
            { src: superkilen1, alt: "Mary Elizabeth Hospital" },
            { src: superkilen2, alt: "Duckwise Logo med sort baggrund" },
          ]}
        />
      </Hero>
      <Section hasBackground={true} className="">
        <SectionTitle>Research</SectionTitle>
        <SectionDescription>
          <p>
          For at skabe en brugerdrevet løsning til Superkilen har jeg gennemført omfattende research ved hjælp af desk research, spørgeskemaer og brugerinterviews. Desk research gav indsigt i Superkilens historik og nuværende brug, mens spørgeskemaer og interviews med lokale borgere og besøgende afslørede tre centrale udfordringer:

          <br>1. <b>Manglende kendskab til genstandenes baggrund</b> - Mange er ikke bevidste om historierne bag pladsens elementer.<br>
          <br>2. </b>Brugernes ønske om enkle løsninger</b> - De efterspørger en let og tilgængelig måde at lære om pladsens indhold.<br>
          <br>3. </b>Behov for autentisk formidling</b> - Det er vigtigt, at historiefortællingen føles relevant og troværdig.<br>

          Disse indsigter har dannet grundlag for udviklingen af Superkilen Uncovered, som fokuserer på at gøre historierne mere synlige og tilgængelige gennem en intuitiv digital løsning.
          </p>
        </SectionDescription>
        <ImageRow
          sources={[
            {
              src: largeImage,
              alt: "Superkilen Uncovered design mobile",
            },
          ]}
          className="justify-center mt-20"
        />
      </Section>
      <Section className="">
        <SectionTitle>Koncept</SectionTitle>
        <SectionDescription>
          <p>
          Superkilen Uncovered er en digital løsning, der gør pladsens kulturelle mangfoldighed let tilgængelig via QR-koder placeret ved de ikoniske genstande. Når brugerne scanner en QR-kode, får de adgang til engagerende indhold som tekst, billeder og videoer, der fortæller historien bag hvert element. Konceptet er skabt med fokus på enkelhed, autenticitet og tilgængelighed for at styrke de lokales og besøgendes kendskab til Superkilen. Løsningen bygger på brugernes behov og sikrer en interaktiv og lærerig oplevelse, der bringer pladsens historier til live på en ny og engagerende måde.
          </p>
        </SectionDescription>
      </Section>
      <div className="container mx-auto">
        <ImageRow
          sources={[
            { src: bottom1, alt: "Flyver om projektet" },
            { src: bottom2, alt: "Mobile visning med indkommende opkald" },
          ]}
          className="container gap-4"
        />
      </div>
    </>
  );
}
