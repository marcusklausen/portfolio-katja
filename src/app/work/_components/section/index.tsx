import React from "react";
import SectionTitle from "./section-title";
import SectionDescription from "./section-description";
import ImageRow from "../image-row";
import { cn } from "src/utils";

export default async function Section({
  className,
  children,
  hasBackground = false,
}: {
  className?: string;
  children: readonly [
    React.ReactElement<typeof SectionTitle> & { type: typeof SectionTitle },
    React.ReactElement<typeof SectionDescription> & {
      type: typeof SectionDescription;
    },
    (React.ReactElement<typeof ImageRow> & { type: typeof ImageRow })?
  ];
  hasBackground?: boolean;
}) {
  return (
    <section
      className={`${hasBackground ? "bg-background-secondary w-full" : ""}`}
    >
      <div className={cn("container mx-auto py-20 px-4 md:px-0", className)}>
        {children}
      </div>
    </section>
  );
}
