import React from "react";
import Hero from "../_components/hero";
import HeroTitle from "../_components/hero/hero-title";
import HeroDescription from "../_components/hero/hero-description";
import LinkWithArrow from "src/app/components/link-with-arrow";

import dccEnergi1 from "./images/1.jpg";
import dccEnergi2 from "./images/2.jpg";
import largeImage from "./images/large.jpg";
import bottom1 from "./images/bottom1.jpg";
import bottom2 from "./images/bottom2.jpg";
import Section from "../_components/section";
import SectionTitle from "../_components/section/section-title";
import SectionDescription from "../_components/section/section-description";
import ImageRow from "../_components/image-row";

export default async function Page() {
  return (
    <>
      <Hero>
        <HeroTitle>DCC Energi</HeroTitle>
        <HeroDescription>
          DCC Energi ønskede et ny og moderne website. Vi skabte fleksibilitet
          og til hurtigt at skabe informativt indhold ved at kombinere
          forskellige moduler.
        </HeroDescription>
        <LinkWithArrow href="#">Besøg website</LinkWithArrow>
        <ImageRow
          className="gap-10 mt-16"
          sources={[
            { src: dccEnergi1.src, alt: "DCC Energi" },
            { src: dccEnergi2.src, alt: "DCC Energi" },
          ]}
        />
      </Hero>
      <Section className="bg-background-secondary">
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
        </SectionDescription>
        <ImageRow
          sources={[{ src: largeImage.src, alt: "DCC Energi iPhone app" }]}
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
            { src: bottom1.src, alt: "DCC Energi iPhone app" },
            { src: bottom2.src, alt: "DCC Energi iPhone app" },
          ]}
          className="container -mx-10"
        />
      </div>
    </>
  );
}
