import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const projects = [
  {
    title: "PrintFast",
    description: "Improved a campus printing workflow. Balanced student and vendor requirements. Enhanced usability, clarity, and operational efficiency.",
    tags: ["Interaction Design", "In-campus Printing process"],
    gradient: "cyan" as const,
    imageUrl: "/images/projects/printfast.svg",
  },
  {
    title: "COOUP",
    description: "Conceptualized a multi-stakeholder wellness ecosystem. Developed service blueprints and experience flows beyond screens.",
    tags: ["Service Design", "Wellness and Community"],
    gradient: "peach" as const,
    imageUrl: "/images/projects/cooup.svg",
  },
  {
    title: "DYME",
    description: "Worked in rapid sprint cycles under tight deadlines. Balanced feasibility, prioritization, and user needs. Delivered a structured end-to-end user experience.",
    tags: ["design Project", "Focus and Productivity"],
    gradient: "lavender" as const,
    imageUrl: "/images/projects/dyme.svg",
  },
  {
    title: "SAKHA",
    description: "Created a multi-touchpoint banking system integrating physical and digital channels. Addressed diverse user groups, accessibility needs, and operational constraints.",
    tags: ["Omnichannel", "Cash Transaction"],
    gradient: "mint" as const,
    imageUrl: "/images/projects/sakha.svg",
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
      {/* Hero Section - New style matching reference */}
      <section className="min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
                Hi, I am
                <br />
                <span className="text-foreground">Deepal Gupta</span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block px-5 py-2.5 rounded-full bg-accent/20 text-accent-foreground mb-6"
              >
                <span className="text-sm font-medium text-foreground">UI/UX Designer</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg"
              >
                I think deeply, work intentionally, and translate complexity into meaningful user experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8"
              >
                <Link to="/projects">
                  <Button size="lg" className="rounded-xl gap-2 shadow-soft hover:shadow-card bg-primary hover:bg-primary/90">
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <img 
                src={heroIllustration} 
                alt="Deepal Gupta - UI/UX Designer" 
                className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] lg:w-[420px] lg:h-[520px] rounded-3xl object-cover shadow-card"
              />
            </motion.div>
          </div>
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

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {designValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 md:p-6 rounded-2xl bg-white shadow-soft hover:shadow-card transition-all"
              >
                <h3 className="font-display text-lg md:text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <SectionHeading icon={<Sparkles className="h-6 w-6 md:h-8 md:w-8" />}>
              Selected Projects
            </SectionHeading>
            <Link
              to="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-peach">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4">Currently Open To</h2>
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">
              UI/UX Designer roles • Product Designer roles • UX Research opportunities
              <br className="hidden sm:block" />
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
