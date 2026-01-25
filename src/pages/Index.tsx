import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sakha Banking — Omnichannel Experience",
    description: "Designed a multi-touchpoint banking system integrating physical and digital channels, addressing accessibility, diverse user groups, and system-level consistency.",
    tags: ["Interaction/UX design", "Banking"],
    gradient: "coral" as const,
  },
  {
    title: "Cooup — Service Experience Design",
    description: "Conceptualized a multi-stakeholder wellness ecosystem using service blueprints and end-to-end experience flows beyond screens.",
    tags: ["Product Design", "Service Design"],
    gradient: "mint" as const,
  },
  {
    title: "PrintFast — Interaction Design",
    description: "Redesigned a campus printing workflow by balancing student and vendor needs, improving usability, efficiency, and task completion.",
    tags: ["Interaction Design", "UX"],
    gradient: "lavender" as const,
  },
  {
    title: "DYME — Design Sprint Project",
    description: "Worked in rapid sprint cycles under tight deadlines, delivering structured user flows and interaction-focused solutions through collaborative decision-making.",
    tags: ["Product Design", "Sprint"],
    gradient: "coral" as const,
    award: true,
  },
];

const designValues = [
  { title: "Research-Led Thinking", description: "Strong design begins with understanding user behavior, mental models, and context." },
  { title: "Clarity Over Decoration", description: "Structure, hierarchy, and readability guide every design decision." },
  { title: "System-Level Thinking", description: "Thinking in systems, flows, dependencies, and scalability." },
  { title: "Attention to Detail", description: "Caring deeply about interaction flows and information hierarchy." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-hero">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-balance">
              I see, I think, I design
              <br />
              <span className="italic">then I overthink.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Designing with intent, structure, and clarity.
            <br />A thoughtful UI/UX designer and researcher.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="px-4 py-2 rounded-xl bg-coral-light text-primary font-medium text-sm">
              3+ years of experience
            </span>
            <span className="px-4 py-2 rounded-xl bg-white shadow-soft text-foreground font-medium text-sm">
              UI/UX Designer
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <Link to="/projects">
              <Button size="lg" className="rounded-xl gap-2 shadow-soft hover:shadow-card">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Design Values Section */}
      <section className="py-20 bg-cream">
        <div className="container max-w-5xl mx-auto px-6">
          <SectionHeading className="mb-12">What This Portfolio Represents</SectionHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mb-12"
          >
            This portfolio is not just a collection of projects—it is a designed system. 
            A system that reflects how I think, how I work, and how I translate complexity 
            into meaningful user experiences.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {designValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-soft hover:shadow-card transition-all"
              >
                <h3 className="font-display text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <SectionHeading icon={<Sparkles className="h-8 w-8" />}>
              Selected Projects
            </SectionHeading>
            <Link
              to="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-coral">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">Currently Open To</h2>
            <p className="text-muted-foreground mb-8">
              UI/UX Designer roles • Product Designer roles • UX Research opportunities
              <br />
              Freelance, internships, collaborations, and hands-on projects
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-xl gap-2 shadow-soft hover:shadow-card">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
