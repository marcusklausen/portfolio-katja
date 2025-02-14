import MasonryGrid from "./_components/masonry-grid";
import LinkWithArrow from "./_components/link-with-arrow";
import AnimatedSection from "./_components/animated-section";
import Image from "next/image";
import { projects } from "src/utils/constants";

export default async function Page() {
  return (
    <main>
      <AnimatedSection className="container px-4 md:px-0 mt-10 md:mt-20">
        <MasonryGrid projects={projects} />
      </AnimatedSection>

      <AnimatedSection className="mt-20 bg-background-secondary" id="about">
        <div className="container px-4 md:px-0 py-20">
          <h1 className="text-3xl md:text-5xl font-medium text-[#48392A]">
            Om mig
          </h1>

          <div className="flex flex-col md:flex-row text-xl md:text-2xl md:justify-between md:items-end gap-10 mt-10 md:mt-[260px]">
            <div className="space-y-2">
              <LinkWithArrow href="/CV.pdf" target="_blank">
                Download CV
              </LinkWithArrow>
              <LinkWithArrow
                href="https://www.linkedin.com/in/katja-kurz-levring/"
                target="_blank"
              >
                LinkedIn
              </LinkWithArrow>
              <LinkWithArrow
                href="https://www.instagram.com/katjaklevring/"
                target="_blank"
              >
                Instagram
              </LinkWithArrow>
            </div>
            <p className="leading-relaxed max-w-[710px] text-lg md:text-2xl">
              Jeg hedder Katja, er 27 år og UX/UI-designer med en baggrund som
              multimediedesigner. Jeg studerer Digital Konceptudvikling på KEA,
              og brænder for at skabe intuitive og værdiskabende digitale
              løsninger, der forener teknologi og brugernes behov. Med en
              proaktiv og detaljeorienteret tilgang værdsætter jeg samarbejde og
              stræber efter at udvikle mine designfærdigheder i dynamiske og
              kreative miljøer.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-20" id="contact">
        <div className="container px-4 md:px-0 py-20">
          <h1 className="text-3xl md:text-5xl font-medium text-[#48392A]">
            Kontakt
          </h1>

          <div className="grid md:grid-cols-2 text-2xl  gap-10 mt-10 md:mt-20 ">
            <div className="flex flex-col justify-between items-stretch">
              <div className="space-y-2 mb-10 md:mb-0">
                <LinkWithArrow href="tel:+4530277927">
                  +45 30 27 79 27
                </LinkWithArrow>
                <LinkWithArrow href="mailto:katjakl@msn.com">
                  katjakl@msn.com
                </LinkWithArrow>
              </div>

              <div className="flex flex-col gap-6">
                <Image
                  src="/images/profile-images/katja.jpg"
                  alt="Katja Kurz Levring"
                  className="object-cover mt-auto block w-full "
                  width={1200}
                  height={100}
                />
                <Image
                  src="/images/profile-images/katja-2.jpg"
                  alt="Katja Kurz Levring"
                  className="object-cover  block md:hidden"
                  width={1200}
                  height={100}
                />
              </div>
            </div>

            <Image
              src="/images/profile-images/katja-2.jpg"
              alt="Katja Kurz Levring"
              className="object-cover  hidden md:block"
              width={1200}
              height={100}
            />
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
