"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.h2
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={"text-3xl md:text-5xl font-semibold mb-8"}
    >
      {children}
    </motion.h2>
  );
}
