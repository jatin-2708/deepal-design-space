import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  gradient?: "coral" | "mint" | "lavender" | "default";
  imageUrl?: string;
  slug?: string;
  comingSoon?: boolean;
  award?: boolean;
}

const gradientClasses = {
  coral: "bg-gradient-coral",
  mint: "bg-gradient-mint",
  lavender: "bg-gradient-lavender",
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
      className={`group relative rounded-2xl p-6 ${gradientClasses[gradient]} shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden`}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {award && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-peach text-primary">
            🏆 Award Winner
          </span>
        )}
        {comingSoon && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="font-display text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {description}
      </p>

      {imageUrl && (
        <div className="mt-4 rounded-xl overflow-hidden bg-white/50 aspect-[16/10]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

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
