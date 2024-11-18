import type { Metadata } from "next";
import Breadcrumbs from "./_components/breadcrumbs";

export const metadata: Metadata = {
  title: "Portfolio - Katja Kurz Levring",
  description:
    "Se udvalgte projekter fra min tid som UX/UI designer, inklusiv arbejde for DCC Energi, CPH Business, Scleroseforeningen og andre spændende kunder.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
