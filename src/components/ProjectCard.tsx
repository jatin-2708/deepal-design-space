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
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`group relative rounded-2xl p-5 md:p-6 ${gradientClasses[gradient]} shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col h-full`}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/90 text-foreground border border-border/50"
          >
            {tag}
          </span>
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
      <h3 className="font-display text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Image Placeholder Area */}
      <div className="mt-auto rounded-xl overflow-hidden bg-white/60 border-2 border-dashed border-border/60 aspect-[16/10] flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-4">
            <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground/40" />
            <p className="text-muted-foreground/60 text-xs">Project images here</p>
          </div>
        )}
      </div>

      {!comingSoon && (
        <Link
          to={slug}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all mt-4"
        >
          View Case Study
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </motion.article>
  );
}
