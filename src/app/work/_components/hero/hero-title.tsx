import React from "react";

export default function HeroTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-6xl font-semibold mb-4">{children}</h1>;
}
