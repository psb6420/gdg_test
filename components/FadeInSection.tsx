"use client";

import { motion } from "framer-motion";

type FadeInSectionProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}>;

export default function FadeInSection({ children, className, delay = 0 }: FadeInSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
