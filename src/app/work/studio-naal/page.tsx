import React from "react";
import Hero from "../_components/hero";
import HeroTitle from "../_components/hero/hero-title";
import HeroDescription from "../_components/hero/hero-description";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";

import bottom1 from "./images/bottom1.jpg";
import bottom2 from "./images/bottom2.jpg";
import purpose1 from "./images/purpose1.jpg";
import purpose2 from "./images/purpose2.jpg";
import role1 from "./images/role1.jpg";
import role2 from "./images/role2.jpg";
import Section from "../_components/section";
import SectionTitle from "../_components/section/section-title";
import SectionDescription from "../_components/section/section-description";
import ImageRow from "../_components/image-row";
import ExternalLink from "../_components/hero/external-link";

export default async function Page() {
  return (
    <>
      <Hero>
        <HeroTitle>Studio N.A.A.L</HeroTitle>
        <HeroDescription>
          Studio N.A.A.L er en alsidig og kreativ tattoobiks. Vi skabte en ny
          visuel identitet og udviklede en webløsning som omfavner deres
          kreative mindset.
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
      <Section hasBackground={true} className="">
        <SectionTitle>Opgavens formål</SectionTitle>
        <SectionDescription>
          <p>
            Dette projekt var mit afgangseksamensprojekt som multimediedesigner
            og vores case og kunde var Studio N.A.A.L. Vi udviklede en
            webløsning som skulle kunne hjælpe deres kunder med at booke tid,
            designede en visuel identitet som også skulle strømlines på deres
            digitale kanaler, fx. Instagram, i form af content lavet med den nye
            identitet og design. Alt dette for at Studio N.A.A.L skulle
            strømlines og fremstå som en samlet virksomhed.
          </p>
        </SectionDescription>
        <ImageRow
          sources={[
            {
              src: purpose1.src,
              alt: "Studio N.A.A.L website",
            },
            {
              src: purpose2.src,
              alt: "Studio N.A.A.L Instagram",
            },
          ]}
          className="justify-start mt-20 gap-10"
          imageClassName="max-w-[400px]"
        />
      </Section>
      <Section className="">
        <SectionTitle>Min rolle på projektet</SectionTitle>
        <SectionDescription>
          <p>
            Jeg lavede projektet sammen med en medstuderende. Vi uddelerede
            opgaverne for at nå opgavens formål indenfor deadline. Vi arbejdede
            ud fra Double Diamond modellen, og uddelegerede derfor ansvar og
            tovholderi for hver af faserne. Jeg var tovholder for discover og
            define faserne og fokuserede på research, wireframing og prototyping
            til brugertestning. Dernæst design, projektledelse og til sidst
            kodning.
          </p>
        </SectionDescription>
        <div className="container mx-auto">
          <ImageRow
            sources={[
              { src: role1.src, alt: "Studio N.A.A.L website" },
              { src: role2.src, alt: "Studio N.A.A.L website" },
            ]}
            className="gap-5 mt-16"
          />
        </div>
      </Section>
      <Section hasBackground={true} className="">
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
      <ImageRow
        sources={[
          { src: bottom1.src, alt: "Studio N.A.A.L website" },
          { src: bottom2.src, alt: "Studio N.A.A.L website" },
        ]}
        className="mx-auto justify-center"
        imageClassName="w-full"
      />
    </>
  );
}
