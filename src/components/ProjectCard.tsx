import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  gradient?: "coral" | "mint" | "lavender" | "cyan" | "peach" | "default";
  imageUrl?: string;
  slug?: string;
  comingSoon?: boolean;
  award?: boolean;
}

const gradientClasses = {
  coral: "bg-gradient-coral",
  mint: "bg-gradient-mint",
  lavender: "bg-gradient-lavender",
  cyan: "bg-gradient-cyan",
  peach: "bg-gradient-peach",
  default: "bg-card",
};

export function ProjectCard({
  title,
  description,
  tags,
  gradient = "default",
  imageUrl,
  slug = "#",
  comingSoon = false,
  award = false,
}: ProjectCardProps) {
  const cardContent = (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className={`group relative rounded-2xl p-5 md:p-6 ${gradientClasses[gradient]} shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col h-full border-2 border-primary/10 hover:border-primary/30 cursor-pointer`}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {/* Tags on top */}
      <div className="flex flex-wrap gap-1 mb-3 cursor-pointer relative z-10">
        {tags.map((tag, idx) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{
              scale: 1.08,
            }}
            className="px-2 py-1 text-xs font-medium rounded-full bg-white/80 text-foreground border border-primary/20 transition-all duration-200"
          >
            {tag}
          </motion.span>
        ))}
        {award && (
          <motion.span
            whileHover={{
              scale: 1.08,
            }}
            className="px-2 py-1 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/30 transition-all duration-200"
          >
            🏆 Award Winner
          </motion.span>
        )}
        {comingSoon && (
          <motion.span
            whileHover={{
              scale: 1.08,
            }}
            className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground transition-all duration-200"
          >
            Coming Soon
          </motion.span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300 mb-3 relative z-10">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow group-hover:text-foreground transition-colors duration-200 relative z-10">
        {description}
      </p>

      {/* Image Placeholder Area */}
      <motion.div
        className="mt-auto rounded-xl overflow-hidden bg-white/60 border border-primary/15 aspect-[16/10] flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 relative z-10"
        whileHover={{ scale: 1.03 }}
      >
        {imageUrl ? (
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="text-center p-4">
            <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-200" />
            <p className="text-muted-foreground/60 text-xs group-hover:text-primary/60 transition-colors">Project images here</p>
          </div>
        )}
      </motion.div>

      {!comingSoon && (
        <motion.div
          className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:text-primary/80 transition-all mt-4 relative z-10"
          whileHover={{ x: 2 }}
        >
          View Case Study
          <motion.span
            className="inline-block"
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.span>
        </motion.div>
      )}
    </motion.article>
  );

  // Make entire card clickable if not coming soon
  if (comingSoon) {
    return cardContent;
  }

  return (
    <a
      href={slug}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {cardContent}
    </a>
  );
}
