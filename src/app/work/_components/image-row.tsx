import Image from "next/image";
import React from "react";
import { cn } from "src/utils";

export default function ImageRow({
  sources,
  className,
  imageClassName,
}: {
  sources: { src: string; alt: string }[];
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row w-full",
        className,
        "group-has-[[data-hero]]:gap-4 group-has-[[data-hero]]:lg:px-0"
      )}
    >
      {sources.map((source) => (
        <Image
          quality={100}
          src={source.src}
          alt={source.alt}
          key={source.src}
          width={1200}
          height={500}
          className={imageClassName}
        />
      ))}
    </div>
  );
}
