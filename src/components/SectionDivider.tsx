import { motion } from "framer-motion";
import { DoodleAccent } from "./Doodles";

interface SectionDividerProps {
  className?: string;
  accentColor?: "coral" | "navy" | "lavender" | "mint" | string;
}

export function SectionDivider({ className = "", accentColor = "navy" }: SectionDividerProps) {
  const colorMap = {
    coral: "text-coral",
    navy: "text-navy",
    lavender: "text-lavender",
    mint: "text-mint",
  };

  const colorClass = (colorMap as Record<string, string>)[accentColor] || accentColor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center justify-center gap-4 py-12 md:py-16 ${className}`}
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <motion.div
        whileInView={{ rotate: 360 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "linear" }}
        className={colorClass}
      >
        <DoodleAccent className="w-20 h-8" />
      </motion.div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.div>
  );
}
