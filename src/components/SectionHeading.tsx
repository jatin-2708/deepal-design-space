import { motion } from "framer-motion";
import { ReactNode } from "react";
import { DoodleUnderline } from "./Doodles";

interface SectionHeadingProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  withDoodle?: boolean;
  doodleColor?: string;
}

export function SectionHeading({
  children,
  icon,
  className = "",
  withDoodle = false,
  doodleColor = "text-navy",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <h2 className={`font-display text-3xl md:text-4xl text-foreground flex items-center gap-3`}>
        {icon && <span className="text-navy">{icon}</span>}
        {children}
      </h2>
      {withDoodle && (
        <motion.div
          className={`mt-2 ${doodleColor} w-fit`}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "left" }}
        >
          <DoodleUnderline className="h-4" />
        </motion.div>
      )}
    </motion.div>
  );
}
