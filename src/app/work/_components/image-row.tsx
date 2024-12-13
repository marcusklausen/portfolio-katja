"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";
import { cn } from "src/utils";
import { motion } from "framer-motion";

export default function ImageRow({
  sources,
  className,
  imageClassName,
  quality
}: // priority = false,
{
  sources: { src: StaticImageData; alt: string }[];
  className?: string;
  imageClassName?: string;
  quality?: number;
  // priority?: boolean;
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "flex flex-col md:flex-row w-full",
        className,
        "group-has-[[data-hero]]:gap-4 group-has-[[data-hero]]:lg:px-0"
      )}
    >
      {sources.map((source) => (
        <Image
          // priority={priority}
          loading="eager"
          src={source.src}
          alt={source.alt}
          key={source.src.src}
          width={1200}
          height={500}
          quality={quality||80}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={imageClassName}
        />
      ))}
    </motion.div>
  );
}
