import MasonryGrid from "./components/masonry-grid";
import LinkWithArrow from "./components/link-with-arrow";

import { ComponentProps } from "react";

import ObscuredLink from "./components/obscured-link";
import Image from "next/image";
import PortfolioCard from "./components/portfolio-card";
import { PortfolioGridItem } from "src/types";

const projects: PortfolioGridItem[] = [
  {
    title: "DCC Energi",
    slug: "dcc-energi",
    description: "Nyt og fremtidssikret Wordpress-site",
    imageSrc: "/images/home-grid/dcc-energi.jpg",
    height: "tall",
    style: {
      background: "linear-gradient(45deg, #004781, #007DC5)",
      color: "white",
    },
  },
  {
    title: "Ethics & Society",
    slug: "ethics-and-society",
    description: "Nyt og fremtidssikret Wordpress-site",
    imageSrc: "/images/home-grid/ethics-and-society.jpg",
    height: "short",
    style: { backgroundColor: "#C8E6F3", color: "#000" },
  },
  {
    title: "Landbrugsavisen",
    slug: "landbrugsavisen",
    description: "Nyt og fremtidssikret Wordpress-site",
    height: "short",
    style: { backgroundColor: "#076171", color: "white" },
  },
  {
    title: "CPH Business",
    slug: "cph-business",
    description: "Nyt og fremtidssikret Wordpress-site",
    height: "medium",
    style: {
      background: "linear-gradient(45deg,  #6410F5, #D414B7)",
      color: "white",
    },
  },
  {
    title: "Scleroseforeningen",
    slug: "scleroseforeningen",
    description: "Nyt og fremtidssikret Wordpress-site",
    imageSrc: "/images/home-grid/scleroseforeningen.jpg",
    height: "tall",
    style: { backgroundColor: "#6AD0FF", color: "#000" },
  },
  {
    title: "Nordvision",
    slug: "nordvision",
    description: "Nyt og fremtidssikret Wordpress-site",
    imageSrc: "/images/home-grid/nordvision.jpg",
    height: "medium",
    style: { backgroundColor: "#35B6AB", color: "#FFF" },
  },
  {
    isEmpty: true,
  },
  {
    isEmpty: true,
  },
  {
    title: "Studio Naal",
    slug: "studio-naal",
    description: "Nyt og fremtidssikret Wordpress-site",
    imageSrc: "/images/home-grid/studio-naal.jpg",
    height: "medium",
    style: { backgroundColor: "#001FDD", color: "white" },
  },
];

export default function Page() {
  return (
    <main>
      <section className="container mt-20">
        <MasonryGrid projects={projects} />
      </section>

      <section className="mt-20 bg-background-secondary" id="about">
        <div className="container py-20">
          <h1 className="text-[56px] font-medium text-[#48392A]">About</h1>

          <div className="flex text-2xl justify-between items-end gap-10 mt-[260px]">
            <div className="space-y-2">
              <LinkWithArrow href="#">Download CV</LinkWithArrow>
              <LinkWithArrow href="#">LinkedIn</LinkWithArrow>
              <LinkWithArrow href="#">Instagram</LinkWithArrow>
            </div>
            <p className="leading-relaxed max-w-[710px]">
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
        <div className="container py-20">
          <h1 className="text-[56px] font-medium text-[#48392A]">Contact</h1>

          <div className="grid grid-cols-2 text-2xl  gap-10 mt-20 ">
            <div className="flex flex-col justify-between items-stretch">
              <div className="space-y-2">
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

              <Image
                src="/images/profile-images/katja.jpg"
                alt="Katja Kurz Levring"
                className="object-cover mt-auto"
                width={1200}
                height={100}
              />
            </div>

            <Image
              src="/images/profile-images/katja-2.jpg"
              alt="Katja Kurz Levring"
              className="object-cover block"
              width={1200}
              height={100}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
