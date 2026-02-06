import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDivider } from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";
import { DoodleCircle, DoodleArrow, DoodleUnderline } from "@/components/Doodles";
import heroIllustration from "@/assets/hero-illustration.png";

const projects = [
  {
    title: "PrintFast",
    description: "Improved a campus printing workflow. Balanced student and vendor requirements. Enhanced usability, clarity, and operational efficiency.",
    tags: ["Interaction Design", "In-campus Printing process"],
    gradient: "cyan" as const,
    imageUrl: "/images/projects/printfast.svg",
    slug: "https://www.behance.net/gallery/243673033/Printfast-Campus-Printing-Platform",
  },
  {
    title: "COOUP",
    description: "Conceptualized a multi-stakeholder wellness ecosystem. Developed service blueprints and experience flows beyond screens.",
    tags: ["Service Design", "Wellness and Community"],
    gradient: "peach" as const,
    imageUrl: "/images/projects/cooup.svg",
    slug: "https://www.behance.net/gallery/243673893/Cooup-Wellness-Service-Platform",
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
    slug: "https://www.behance.net/gallery/243435877/Sakha-banking-omnichannel-banking-experience",
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
      {/* ===== HERO SECTION: Introduction ===== */}
      <section className="min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 bg-white relative overflow-hidden">
        {/* Subtle background element */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display text-xl sm:text-1xl md:text-2xl lg:text-2xl text-primary/60 mb-2">
                  Hey there, I'm
                </h3>
              </motion.div>
              <br />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-4 text-primary relative inline-block">
                  Deepal Gupta
                  {/* Decorative underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 text-primary/30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  >
                    <DoodleUnderline className="w-48 h-6" />
                  </motion.div>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 mt-8"
              >
                <span className="text-sm font-medium text-primary">UI/UX Designer </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                I craft meaningful digital experiences through research-driven thinking, 
                <span className="text-primary font-medium"> thoughtful design</span>, and 
                <span className="text-primary font-medium"> systems thinking</span>. Every interaction tells a story.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link to="/projects">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      size="lg" 
                      className="rounded-xl gap-2 shadow-soft hover:shadow-card bg-primary hover:bg-primary/90 text-white"
                    >
                      Explore Case Studies
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Illustration with animation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end group cursor-pointer relative"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl blur-2xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.95, 1.05, 0.95]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden border-2 border-primary/30 shadow-soft"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Default Image */}
                <img 
                  src="/images/hero/default.jpeg" 
                  alt="Deepal Gupta - UI/UX Designer" 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 z-10 rounded-3xl"
                />
                {/* Hover Image */}
                <img 
                  src="/images/hero/hover.jpeg" 
                  alt="Deepal Gupta - UI/UX Designer Hover" 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20 rounded-3xl"
                />

                {/* Decorative circle */}
                <motion.div
                  className="absolute -top-8 -left-8 text-primary/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <DoodleCircle className="w-24 h-24" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider accentColor="primary" />

      {/* ===== MINDSET SECTION: How I Think ===== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container max-w-5xl mx-auto px-6">
          <SectionHeading className="mb-4" withDoodle doodleColor="text-primary">
            How I Think
          </SectionHeading>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed"
          >
            Design is not just about aesthetics, it's about{" "}
            <span className="text-primary font-medium">understanding behavior</span>, 
            <span className="text-primary font-medium"> questioning assumptions</span>, and 
            <span className="text-primary font-medium"> solving real problems</span>. 
            Every pixel, every interaction, every system should have a purpose.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {designValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-5 md:p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 hover:shadow-card transition-all duration-200 group cursor-pointer"
              >
                {/* Border glow accent on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-300"
                  animate={{}}
                />

                <h3 className="font-display text-lg md:text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-200">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider accentColor="primary" />

      {/* ===== WORK SECTION: Selected Projects ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <SectionHeading withDoodle doodleColor="text-primary">
              Selected Work
            </SectionHeading>
            <Link
              to="/projects"
              className="text-sm font-medium text-primary hover:text-primary/70 transition-colors flex items-center gap-1 group"
            >
              View all projects
              <motion.span
                className="inline-block"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider accentColor="primary" />

      {/* ===== REFLECTION SECTION: CTA & Closing ===== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl -z-10"
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading className="mb-6 justify-center" withDoodle doodleColor="text-primary">
              Let's Create Something Meaningful
            </SectionHeading>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to chat about design and research—
              <span className="text-primary font-medium"> I'd love to hear from you.</span>
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="rounded-xl gap-2 shadow-soft hover:shadow-card bg-primary hover:bg-primary/90 text-white"
                  >
                    Get in Touch
                    <motion.span
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>

              <a href="https://drive.google.com/file/d/16Jas58zYzuyluYckUd_Dl2Y_vmJco6l5/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="rounded-xl border-primary/30 text-primary hover:bg-primary/5"
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-sm text-muted-foreground"
            >
              💭 <em>"Design thinking is a mindset. It's about asking better questions."</em>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
