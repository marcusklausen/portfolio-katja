"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { PortfolioGridItem } from "src/types";
import { portfolioCardHeightMap } from "src/utils";
import { ArrowRightIcon } from "./icons";

type Props =
  | (Omit<Exclude<PortfolioGridItem, { isEmpty: true }>, "externalLink"> & {
      delay: number;
    })
  | {
      isEmpty: true;
    };

export default function PortfolioCard(props: Props) {
  if (props.isEmpty) return null;

  const newLocal = `relative  group ${props.imageSrc ? "overflow-hidden" : ""}`;
  return (
    <motion.div
      key={props.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.delay }}
      className={newLocal}
    >
      <div
        className={`group group/arrow transition-all relative ${props.className}`}
        style={{
          height: portfolioCardHeightMap[props.height],
          ...props.style,
        }}
      >
        <div
          className={`space-y-6 flex flex-col  justify-end h-full p-6 group/arrow ${
            props.imageSrc
              ? "translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300"
              : ""
          }`}
        >
          <div className="space-y-4 ">
            <h3 className=" text-xl">{props.title}</h3>
            {props.description && (
              <p className=" text-2xl font-semibold">{props.description}</p>
            )}
          </div>

          <ArrowRightIcon />
        </div>
        {props.imageSrc && (
          <div className="absolute inset-0 group-hover:opacity-0 transition-all duration-150">
            <Image
              src={props.imageSrc}
              alt={props.title}
              quality={80}
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
