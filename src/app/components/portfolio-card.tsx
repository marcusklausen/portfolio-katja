"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { PortfolioGridItem } from "src/types";
import { portfolioCardHeightMap } from "src/utils";

type Props = (PortfolioGridItem & { delay: number }) | { isEmpty: true };

export default function PortfolioCard(props: Props) {
  if (props.isEmpty) return null;
  const newLocal = `relative  group bg-black ${
    props.imageSrc ? "overflow-hidden" : ""
  }`;
  return (
    <motion.div
      key={props.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: props.delay }}
      className={newLocal}
    >
      <div
        className={`group transition-all relative ${props.className} ${
          !props.imageSrc
            ? "group-hover:-translate-y-4 group-hover:translate-x-4"
            : ""
        }`}
        style={{
          height: portfolioCardHeightMap[props.height],
          ...props.style,
        }}
      >
        <div
          className={`space-y-6 flex flex-col justify-end h-full p-6 ${
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
          <svg
            className="w-10 h-2  transform group-hover:translate-x-1 transition-transform"
            viewBox="0 0 41 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355Z"
              fill="currentColor"
            />
            <path d="M0 4.5H40V3.5H0V4.5Z" fill="currentColor" />
          </svg>
        </div>
        {props.imageSrc && (
          <div className="absolute inset-0 group-hover:opacity-0 transition-all duration-150">
            <Image
              src={props.imageSrc}
              alt={props.title}
              quality={100}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
