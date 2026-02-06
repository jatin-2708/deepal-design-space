import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Trophy,
  Gamepad2,
  Flower2,
  BarChart3,
  Music,
  ImageIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { WallItem } from "@/components/WallItem";

const wallItems = [
  {
    title: "Sandbox Trophy",
    description: "1st Runner-Up — Sandbox Hackathon",
    icon: Trophy,
    color: "bg-gradient-peach",
    rotation: -3,
    image: "/images/wall/sandbox.svg",
    slug: "https://drive.google.com/file/d/14tcgG8tyxvj2Ig7b7AcQ-eQpUVl4rI5n/view?usp=sharing",
  },
  {
    title: "Game Design",
    description: "1st Runner-Up — Ragpickers",
    icon: Gamepad2,
    color: "bg-gradient-cyan",
    rotation: 4,
    image: "/images/wall/gamedesign.svg",
    slug: "https://drive.google.com/file/d/1Ne8NutHiFgMD5PuPbpELvAMBKw5EPPFs/view?usp=sharing",
  },
  {
    title: "Flora Fusion",
    description: "Speculative Packaging Design",
    icon: Flower2,
    color: "bg-gradient-mint",
    rotation: -2,
    image: "/images/wall/florafusion.svg",
    slug: "https://www.behance.net/gallery/223392939/Flora-Fusion-Speculative-Design-Packaging",
  },
  {
    title: "Infographics",
    description: "Data Visualization & Visual Storytelling",
    icon: BarChart3,
    color: "bg-gradient-lavender",
    rotation: 5,
    image: "/images/wall/datavis.svg",
    slug: "https://www.behance.net/gallery/230286269/Infographic-Posters",
  },
];

export default function Wall() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 md:pt-32 pb-10">
        <div className="container max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-4 py-2 mb-6 rounded-xl bg-accent/20 font-display text-lg"
              style={{ transform: "rotate(-2deg)" }}
            >
              This is my wall ✨
            </motion.div>

            <h1 className="font-display text-3xl md:text-4xl mb-3">
              Achievements, Interests & Extra Work
            </h1>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of things I’m proud of, things I love, and explorations
              beyond my main design work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wall Grid */}
      <section className="py-12 md:py-14">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {wallItems.map((item, index) => (
              <WallItem
                key={item.title}
                rotation={item.rotation}
                delay={index * 0.08}
                className="h-full"
              >
                <div
                  className={`p-3 md:p-4 rounded-xl ${item.color} h-full flex flex-col items-center text-center`}
                >
                  {/* Icon */}
                  <div className="w-9 h-9 mb-2 rounded-lg bg-white/70 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-sm mb-1">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-muted-foreground mb-2 leading-snug">
                    {item.description}
                  </p>

                  {/* Image (UNCROPPED) */}
                  <Link to={item.slug} className="mt-auto w-full aspect-square rounded-lg bg-white/60 border border-border/30 overflow-hidden mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-full h-full">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center">
                          <ImageIcon className="h-4 w-4 mb-1 text-muted-foreground/40" />
                          <p className="text-xs text-muted-foreground/50">
                            Add image
                          </p>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Link */}
                  <Link
                    to={item.slug}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:gap-2 transition-all"
                  >
                    View Project
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </WallItem>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-12">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-7 rounded-2xl bg-peach relative"
          >
            <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-accent/30 flex items-center justify-center">
              <Music className="h-4 w-4 text-primary" />
            </div>

            <p className="font-display text-lg md:text-xl italic leading-relaxed">
              “I’m still building, learning, and experimenting — more achievements and fun work are on the way. :)”
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
