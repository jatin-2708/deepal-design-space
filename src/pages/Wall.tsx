import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { WallItem } from "@/components/WallItem";
import { Trophy, Gamepad2, Flower2, BarChart3, PenTool, Star, Music } from "lucide-react";

const wallItems = [
  {
    title: "Sandbox Trophy",
    description: "1st Runner-Up — Sandbox Hackathon",
    icon: Trophy,
    color: "bg-gradient-coral",
    rotation: -3,
  },
  {
    title: "Game Design",
    description: "Ragpickers — Game Design Award",
    icon: Gamepad2,
    color: "bg-gradient-lavender",
    rotation: 4,
  },
  {
    title: "Flora Fusion",
    description: "Packaging Design Project",
    icon: Flower2,
    color: "bg-gradient-mint",
    rotation: -2,
  },
  {
    title: "Infographics",
    description: "Data Visualization & Visual Storytelling",
    icon: BarChart3,
    color: "bg-white shadow-card",
    rotation: 5,
  },
  {
    title: "Calligraphy",
    description: "Foundation Certification",
    icon: PenTool,
    color: "bg-gradient-coral",
    rotation: -4,
  },
  {
    title: "Excellence Awards",
    description: "Recognition for Outstanding Work",
    icon: Star,
    color: "bg-gradient-lavender",
    rotation: 3,
  },
];

export default function Wall() {
  return (
    <Layout>
      <section className="pt-32 pb-10 bg-gradient-hero">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block px-6 py-3 mb-6 rounded-2xl bg-accent text-accent-foreground font-display text-2xl"
              style={{ transform: "rotate(-2deg)" }}
            >
              This is my wall ✨
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl mb-4">
              Achievements, Interests & Extra Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of things I'm proud of, things I love, and creative explorations 
              beyond my main design work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wall Grid */}
      <section className="py-16 min-h-[60vh]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {wallItems.map((item, index) => (
              <WallItem
                key={item.title}
                rotation={item.rotation}
                delay={index * 0.1}
                className="h-full"
              >
                <div className={`p-6 md:p-8 rounded-2xl ${item.color} h-full flex flex-col items-center text-center transition-all hover:shadow-elevated`}>
                  <div className="w-16 h-16 mb-4 rounded-2xl bg-white/80 flex items-center justify-center shadow-soft">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </WallItem>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-peach relative"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-coral-light flex items-center justify-center">
              <Music className="h-4 w-4 text-primary" />
            </div>
            <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed italic">
              "My portfolio is still under construction, trying to curate my chaos into an order, 
              it takes time. Do check out my main work though :)"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Extra Achievements */}
      <section className="py-16 bg-cream">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl mb-8 text-center">More Achievements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "AIR 320", subtitle: "NID Prelims (25,000+ candidates)" },
              { title: "AIR 476", subtitle: "UCEED (15,000+ candidates)" },
              { title: "CGPA 9.17", subtitle: "B.Des at Chitkara University" },
              { title: "AI Innovation", subtitle: "NewGen Certification" },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-white shadow-soft flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
