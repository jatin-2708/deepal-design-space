import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Sparkles } from "lucide-react";

const projects = [
  {
    title: "Sakha Banking — Omnichannel Experience",
    description: "Designed a multi-touchpoint banking system integrating physical and digital channels, addressing accessibility, diverse user groups, and system-level consistency.",
    tags: ["Interaction/UX design", "Banking", "September 2025"],
    gradient: "coral" as const,
  },
  {
    title: "Cooup — Service Experience Design",
    description: "Conceptualized a multi-stakeholder wellness ecosystem using service blueprints and end-to-end experience flows beyond screens.",
    tags: ["Product Design", "Service Design", "April 2025"],
    gradient: "mint" as const,
  },
  {
    title: "PrintFast — Interaction Design",
    description: "Redesigned a campus printing workflow by balancing student and vendor needs, improving usability, efficiency, and task completion.",
    tags: ["Interaction Design", "UX Research", "February 2025"],
    gradient: "lavender" as const,
  },
  {
    title: "DYME — Design Sprint Project",
    description: "Worked in rapid sprint cycles under tight deadlines, delivering structured user flows and interaction-focused solutions through collaborative decision-making.",
    tags: ["Product Design", "Design Sprint"],
    gradient: "coral" as const,
    award: true,
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl mb-4">My Work</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Each project is presented as a problem-solving journey—from understanding 
              users and contexts, to defining structure, making informed decisions, 
              and validating outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-6">
          <SectionHeading icon={<Sparkles className="h-8 w-8" />} className="mb-12">
            Selected Projects
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* What Portfolio Represents */}
      <section className="py-16 bg-cream">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl mb-6">The Goal is Clarity</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-xl bg-white shadow-soft">
                <p className="text-muted-foreground text-sm">Clarity of process</p>
              </div>
              <div className="px-6 py-3 rounded-xl bg-white shadow-soft">
                <p className="text-muted-foreground text-sm">Clarity of intent</p>
              </div>
              <div className="px-6 py-3 rounded-xl bg-white shadow-soft">
                <p className="text-muted-foreground text-sm">Clarity of impact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Questions */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl mb-8 text-center">
              This portfolio aims to clearly answer:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "How do I approach complex problems?",
                "How does research translate into design decisions?",
                "How does structure create better user experiences?",
              ].map((question, index) => (
                <motion.div
                  key={question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-coral text-center"
                >
                  <p className="text-foreground font-medium italic">"{question}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
