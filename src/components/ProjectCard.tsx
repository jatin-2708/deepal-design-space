import { motion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { DoodleBracket } from "./Doodles";

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative rounded-2xl p-5 md:p-6 ${gradientClasses[gradient]} shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col h-full border-2 border-transparent hover:border-navy/20`}
    >
      {/* Doodle accent top-right */}
      <motion.div
        className="absolute -top-8 -right-8 text-navy/10 group-hover:text-navy/20 transition-colors"
        whileHover={{ rotate: 45 }}
        transition={{ duration: 0.4 }}
      >
        <DoodleBracket className="w-20 h-20" />
      </motion.div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {tags.map((tag, idx) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/90 text-foreground border border-border/50 hover:bg-navy/10 hover:border-navy/30 transition-colors"
          >
            {tag}
          </motion.span>
        ))}
        {award && (
          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-peach text-foreground border border-border/50">
            🏆 Award Winner
          </span>
        )}
        {comingSoon && (
          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            Coming Soon
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display text-xl md:text-2xl mb-3 text-foreground group-hover:text-navy transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Image Placeholder Area */}
      <motion.div
        className="mt-auto rounded-xl overflow-hidden bg-white/60 border-2 border-dashed border-border/60 aspect-[16/10] flex items-center justify-center group-hover:border-navy/40 group-hover:bg-navy/5 transition-all duration-300"
        whileHover={{ scale: 1.02 }}
      >
        {imageUrl ? (
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="text-center p-4">
            <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground/40 group-hover:text-navy/40 transition-colors" />
            <p className="text-muted-foreground/60 text-xs">Project images here</p>
          </div>
        )}
      </motion.div>

      {!comingSoon && (
        <Link
          to={slug}
          className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-navy/80 transition-all mt-4 group/link"
        >
          View Case Study
          <motion.span
            className="inline-block"
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="h-4 w-4 group-hover/link:text-navy transition-colors" />
          </motion.span>
        </Link>
      )}
    </motion.article>
  );
}
