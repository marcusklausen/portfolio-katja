import React from "react";
import Hero from "../_components/hero";
import HeroTitle from "../_components/hero/hero-title";
import HeroDescription from "../_components/hero/hero-description";

import duckwise1 from "./images/1.jpg";
import duckwise2 from "./images/2.jpg";
import role1 from "./images/role1.jpg";
import role2 from "./images/role2.jpg";
import bottom1 from "./images/bottom1.jpg";
import bottom2 from "./images/bottom2.jpg";
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
        url: "/images/home-grid/duckwise.jpg",
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
        <HeroTitle>Duckwise X Børneriget Fonden</HeroTitle>
        <HeroDescription>
        I forbindelse med mit studie, Digital Konceptudvikling, har jeg udviklet MedConnect, et koncept der udforsker, hvordan Apple Vision Pro kan forbedre akutbehandling og styrke kommunikationen mellem hospitaler.
        </HeroDescription>
        <ExternalLink title="Konceptvideo" />

        <ImageRow
          className="mt-16"
          sources={[
            { src: duckwise1, alt: "Mary Elizabeth Hospital" },
            { src: duckwise2, alt: "Duckwise Logo med sort baggrund" },
          ]}
        />
      </Hero>
      <Section hasBackground={true} className="">
        <SectionTitle>Brief</SectionTitle>
        <SectionDescription>
          <p>
          Opgaven tog udgangspunkt i en briefing fra Duckwise om Mary Elizabeths Hospital og deres Babylance-transporthold, der håndterer kritiske situationer med nyfødte patienter. Briefet stillede spørgsmålstegn ved, hvordan VR/AR-teknologi kan bringe specialister tættere på kolleger, patienter og deres familier. Målet var at skabe en løsning, der understøtter beslutningstagning og behandling uden behov for fysisk tilstedeværelse, og som samtidig reducerer unødvendige patientoverførsler.
          </p>
        </SectionDescription>
      </Section>
      <Section className="">
        <SectionTitle>Research</SectionTitle>
        <SectionDescription>
          <p>
          Opgaven tog udgangspunkt i en briefing fra Duckwise om Mary Elizabeths Hospital og deres Babylance-transporthold, der håndterer kritiske situationer med nyfødte patienter. Briefet stillede spørgsmålstegn ved, hvordan VR/AR-teknologi kan bringe specialister tættere på kolleger, patienter og deres familier. Målet var at skabe en løsning, der understøtter beslutningstagning og behandling uden behov for fysisk tilstedeværelse, og som samtidig reducerer unødvendige patientoverførsler.
          </p>
        </SectionDescription>
        <ImageRow quality={100}
          className="mt-16 gap-4"
          sources={[
            { src: role1, alt: "Persona" },
            { src: role2, alt: "Empathy Map" },
          ]}
        />
      </Section>
      <Section hasBackground={true} className="">
        <SectionTitle>Koncept</SectionTitle>
        <SectionDescription>
          <p>
          Vores koncept, MedConnect, er designet til at optimere kommunikationen mellem læger og specialister via Apple Vision Pro. Konceptet muliggør live video, deling af vitale data og brug af stemmeoptagelser for at forbedre vejledning og beslutningstagning i akutte situationer. Ved at reducere behovet for fysiske udrykninger med Babylancen, forbedrer løsningen ressourceudnyttelsen og patientoplevelsen. Du kan se konceptvideoen øverst oppe. 
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
