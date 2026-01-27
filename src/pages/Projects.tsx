import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Sparkles } from "lucide-react";

const projects = [
  {
    title: "PrintFast",
    description: "Improved a campus printing workflow. Balanced student and vendor requirements. Enhanced usability, clarity, and operational efficiency.",
    tags: ["Interaction Design", "In-campus Printing process"],
    gradient: "cyan" as const,
    imageUrl: "/images/projects/printfast.svg",
    slug: "/images/case_studies/pfast.svg",
  },
  {
    title: "COOUP",
    description: "Conceptualized a multi-stakeholder wellness ecosystem. Developed service blueprints and experience flows beyond screens.",
    tags: ["Service Design", "Wellness and Community"],
    gradient: "peach" as const,
    imageUrl: "/images/projects/cooup.svg",
    slug: "https://drive.google.com/file/d/16oX0ezLTgCoCLtnoCoXMvUZOJ4aFctzM/view?usp=sharing",
  },
  {
    title: "DYME",
    description: "Worked in rapid sprint cycles under tight deadlines. Balanced feasibility, prioritization, and user needs. Delivered a structured end-to-end user experience.",
    tags: ["Design Project", "Focus and Productivity"],
    gradient: "lavender" as const,
    imageUrl: "/images/projects/dyme.svg",
    slug: "https://drive.google.com/file/d/17CZ4L0qTASLpWalyEg6Z-ZPYHDkLlC3c/view?usp=sharing",
  },
  {
    title: "SAKHA",
    description: "Created a multi-touchpoint banking system integrating physical and digital channels. Addressed diverse user groups, accessibility needs, and operational constraints.",
    tags: ["Omnichannel", "Cash Transaction"],
    gradient: "mint" as const,
    imageUrl: "/images/projects/sakha.svg",
    slug: "https://drive.google.com/file/d/17sockccBBNFOkkff897N6cgS0HJPBmMz/view?usp=sharing",
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">My Work</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Each project is presented as a problem-solving journey—from understanding 
              users and contexts, to defining structure, making informed decisions, 
              and validating outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-6">
          <SectionHeading className="mb-8 md:mb-12">
            Selected Projects
          </SectionHeading>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* What Portfolio Represents */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6">The Goal is Clarity</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-white shadow-soft">
                <p className="text-muted-foreground text-sm">Clarity of process</p>
              </div>
              <div className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-white shadow-soft">
                <p className="text-muted-foreground text-sm">Clarity of intent</p>
              </div>
              <div className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl bg-white shadow-soft">
                <p className="text-muted-foreground text-sm">Clarity of impact</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Questions */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl md:text-2xl mb-6 md:mb-8 text-center">
              This portfolio aims to clearly answer:
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
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
                  className="p-5 md:p-6 rounded-2xl bg-gradient-peach text-center"
                >
                  <p className="text-foreground font-medium italic text-sm md:text-base">"{question}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
