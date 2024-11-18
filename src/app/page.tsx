import MasonryGrid from "./components/masonry-grid";
import LinkWithArrow from "./components/link-with-arrow";

import ObscuredLink from "./components/obscured-link";
import Image from "next/image";

import { projects } from "src/utils/constants";

export default async function Page() {
  return (
    <main>
      <section className="container px-4 md:px-0 mt-10 md:mt-20">
        <MasonryGrid projects={projects} />
      </section>

      <section className="mt-20 bg-background-secondary" id="about">
        <div className="container px-4 md:px-0 py-20">
          <h1 className="text-3xl md:text-5xl font-medium text-[#48392A]">
            About
          </h1>

          <div className="flex flex-col md:flex-row text-xl md:text-2xl md:justify-between md:items-end gap-10 mt-10 md:mt-[260px]">
            <div className="space-y-2">
              <LinkWithArrow href="#">Download CV</LinkWithArrow>
              <LinkWithArrow href="#">LinkedIn</LinkWithArrow>
              <LinkWithArrow href="#">Instagram</LinkWithArrow>
            </div>
            <p className="leading-relaxed max-w-[710px] text-lg">
              Jeg hedder Katja og er 26 år. Jeg har en baggrund som
              multimediedesigner og arbejder nu som UX/UI designer hos Minuba.
              Min passion ligger i at skabe brugeroplevelser, der forener
              teknologi med brugernes behov. Jeg ønsker at skabe digitale
              løsninger, der tilføjer værdi gennem min lidenskab for design.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <div className="container px-4 md:px-0 py-20">
          <h1 className="text-3xl md:text-5xl font-medium text-[#48392A]">
            Contact
          </h1>

          <div className="grid md:grid-cols-2 text-2xl  gap-10 mt-10 md:mt-20 ">
            <div className="flex flex-col justify-between items-stretch">
              <div className="space-y-2 mb-10 md:mb-0">
                <LinkWithArrow>
                  <ObscuredLink
                    value="+45 30 27 79 27"
                    href="tel:+4530277927"
                  />
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
      </section>
    </main>
  );
}
