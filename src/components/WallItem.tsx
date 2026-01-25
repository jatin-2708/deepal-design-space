import { motion } from "framer-motion";
import { ReactNode } from "react";

interface WallItemProps {
  children: ReactNode;
  rotation?: number;
  className?: string;
  delay?: number;
}

export function WallItem({ children, rotation = 0, className = "", delay = 0 }: WallItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      className={`transition-all duration-300 ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </motion.div>
  );
}
