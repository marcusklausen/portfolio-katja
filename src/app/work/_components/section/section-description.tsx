import React from "react";

export default function SectionDescription({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return <div className="text-2xl max-w-[980px]">{children}</div>;
}
