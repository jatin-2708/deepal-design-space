import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillTagProps {
  children: ReactNode;
  variant?: "default" | "tool" | "highlight";
}

const variantClasses = {
  default: "bg-white text-foreground shadow-soft border border-border/50",
  tool: "bg-muted text-muted-foreground",
  highlight: "bg-navy-light text-primary border border-primary/20",
};

export function SkillTag({ children, variant = "default" }: SkillTagProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium ${variantClasses[variant]} transition-all`}
    >
      {children}
    </motion.span>
  );
}
