import React from "react";

export default function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-3xl md:text-5xl font-semibold mb-8">{children}</h2>
  );
}
