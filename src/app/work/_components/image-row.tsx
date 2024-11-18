import Image from "next/image";
import React from "react";

export default function ImageRow({
  sources,
  className,
}: {
  sources: { src: string; alt: string }[];
  className?: string;
}) {
  return (
    <div className={`flex flex-row w-full  ${className}`}>
      {sources.map((source) => (
        <Image
          quality={100}
          src={source.src}
          alt={source.alt}
          key={source.src}
          width={1200}
          height={500}
        />
      ))}
    </div>
  );
}
