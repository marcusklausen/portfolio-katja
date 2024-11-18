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
        <HeroTitle>Scleroseforeningen</HeroTitle>
        <HeroDescription>
          Scleroseforeningen ønskede en multisite-løsning i WordPress, der
          sikrer en rød tråd på tværs af hovedsiden og undersider som YOU GO og
          Sclerosehospitalerne.
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
            I projektet var jeg ansvarlig for at skabe en brugervenlig oplevelse
            med fokus på at opfylde både brugerens og kundens behov. Med den
            overordnede designstil allerede fastlagt af et andet bureau,
            arbejdede jeg fra bunden med UX-delen. Jeg udviklede detaljerede
            wireframes, gennemførte brugertests for at sikre intuitiv navigation
            og engagerede interaktioner, og skabte prototyper, som kunne testes
            og justeres løbende. Processen var præget af et agilt samarbejde med
            kunden, med hyppige møder og feedbackrunder, der sikrede en
            brugeroplevelse i tråd med projektets mål og målgruppe.
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
            {`Med farver og skrifttyper allerede fastlagt af et andet bureau lå
            mit fokus på at videreføre stilen konsistent på tværs af hele
            løsningen. Jeg udviklede et omfattende komponentbibliotek i Figma,
            hvor hver enkelt komponent blev skabt med autolayout og
            responsivitet for øje. Dette gjorde det muligt at udbrede det
            eksisterende design på tværs af hele hjemmesiden og sikre sammenhæng
            på alle undersider. Komponenterne blev designet ned til mindste
            detalje for at sikre en ensartet brugeroplevelse og en let
            vedligeholdelse. Efter løbende tests og en godkendelsesproces med
            kunden blev hele løsningen – både UX og UI – afleveret færdig og
            klar til brug.`}
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
