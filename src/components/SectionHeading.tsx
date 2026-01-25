import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function SectionHeading({ children, icon, className = "" }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`font-display text-3xl md:text-4xl text-foreground flex items-center gap-3 ${className}`}
    >
      {icon && <span className="text-primary">{icon}</span>}
      {children}
    </motion.h2>
  );
}
