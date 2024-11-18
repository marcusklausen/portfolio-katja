import React from "react";
import SectionTitle from "./section-title";
import SectionDescription from "./section-description";
import ImageRow from "../image-row";

export default async function Section({
  className,
  children,
}: {
  className?: string;
  children: readonly [
    React.ReactElement<typeof SectionTitle> & { type: typeof SectionTitle },
    React.ReactElement<typeof SectionDescription> & {
      type: typeof SectionDescription;
    },
    (React.ReactElement<typeof ImageRow> & { type: typeof ImageRow })?
  ];
}) {
  return (
    <section className={` ${className}`}>
      <div className="container mx-auto py-20">{children}</div>
    </section>
  );
}
