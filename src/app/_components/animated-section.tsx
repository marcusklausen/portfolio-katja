"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"section">;

export default function AnimatedSection({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
