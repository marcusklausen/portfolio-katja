import React from "react";

export default function SectionDescription({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <div className="text-lg md:text-2xl max-w-[980px] flex flex-col gap-4">
      {children}
    </div>
  );
}
