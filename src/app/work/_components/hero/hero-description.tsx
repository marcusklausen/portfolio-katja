import React from "react";

export default function HeroDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-3xl mb-9 max-w-[830px]">{children}</div>;
}
