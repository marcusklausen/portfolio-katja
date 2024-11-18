"use client";

import { motion } from "framer-motion";

export default function SectionDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg md:text-2xl max-w-[980px] flex flex-col gap-4"
    >
      {children}
    </motion.div>
  );
}
