import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillTag } from "@/components/SkillTag";
import { 
  GraduationCap, 
  Award, 
  Briefcase,
  Figma,
  Palette,
  PenTool,
  Layers,
  FileVideo,
  Box,
  Code,
  FileSpreadsheet,
  Lightbulb
} from "lucide-react";

const skills = [
  "Design Thinking",
  "Human-Centered Design",
  "User Research & Personas",
  "Information Architecture",
  "Wireframing & Prototyping",
  "Visual & Interface Design",
  "Usability Testing",
  "Data Analysis & Visualization",
  "Surveys & Insight Synthesis",
  "Responsive Web Design",
  "Prompt Engineering"
];

const tools = [
  { name: "Figma", category: "UI/UX Design", image: "/images/tools/figma.svg" },
  { name: "Orange", category: "Data Visualisation", image: "/images/tools/orange.svg" },
  { name: "Miro", category: "Research & Ideation", image: "/images/tools/miro.svg" },
  { name: "Notion", category: "Research & Ideation", image: "/images/tools/notion.svg" },
  { name: "Adobe Photoshop", category: "Visual Design", image: "/images/tools/photoshop.svg" },
  { name: "Illustrator", category: "Visual Design", image: "/images/tools/illustrator.svg" },
  { name: "After Effects", category: "Motion & 3D", image: "/images/tools/aftereffects.svg" },
  { name: "Blender", category: "Motion & 3D", image: "/images/tools/blender.svg" },
  { name: "Canva", category: "Presentation", image: "/images/tools/canva.svg" },
];

const certifications = [
  "NewGen Certification in AI Innovation & Entrepreneurship",
  "NewGen Iconography Certification",
  "1st Runner-Up — Sandbox Hackathon (Parallel Beyond)",
  "1st Runner-Up — Game Design (Ragpickers)",
  "Calligraphy Foundation Certification",
  "AIR 320 — NID Prelims (25,000+ candidates)",
  "AIR 476 — UCEED (15,000+ candidates)",
];

export default function About() {
  return (
    <Layout>
      <section className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">About Me</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Deepal Gupta · UI/UX Designer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              Hi, I'm Deepal, a UI/UX designer, I have experience of working on projects across domains such as finance, wellness, logistics, B2B, and SaaS. These experiences have helped me understand how user needs shift across contexts and how thoughtful design adapts to those changes.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              My work is strongly grounded in user research, interaction design, information architecture, service design, and usability testing. I enjoy exploring market and product trends, analyzing data through surveys and research, and translating insights into clear, meaningful user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Skills – Contained Motion Marquee */}
<section className="py-12 md:py-16 bg-cream">
  <div className="container max-w-6xl mx-auto px-6">
    <SectionHeading className="mb-8">Core Skills</SectionHeading>

    {/* Mask */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 md:gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={`${skill}-${index}`}
            whileHover={{
              scale: 1.08,
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 py-2 rounded-full bg-white shadow-soft text-sm md:text-base whitespace-nowrap cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </div>

    
  </div>
</section>



      {/* Tools – Motion Marquee (Centered Icons, Bigger) */}
<section className="py-12 md:py-16">
  <div className="container max-w-6xl mx-auto px-6">
    <SectionHeading className="mb-8">Tools I Use</SectionHeading>

    {/* Mask */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...tools, ...tools].map((tool, index) => (
          <motion.div
            key={`${tool.name}-${index}`}
            whileHover={{
              scale: 1.05,
              backgroundColor: "var(--accent)",
            }}
            transition={{ type: "spring", stiffness: 280 }}
            className="min-w-[170px] h-[120px] p-3 rounded-xl bg-white shadow-soft transition-colors cursor-pointer group flex flex-col items-center justify-center text-center"
          >
            {/* Icon – centered */}
            <div className="w-12 h-12 mb-2 rounded-lg bg-navy-light flex items-center justify-center">
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-full p-1 object-contain"
              />
            </div>

            {/* Text */}
            <p className="font-medium text-xs md:text-sm group-hover:text-accent-foreground transition-colors truncate">
              {tool.name}
            </p>

            <p className="text-[11px] text-muted-foreground mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity truncate">
              {tool.category}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    
  </div>
</section>






      {/* Education Section */}
      <section className="py-12 md:py-16 bg-gradient-mint">
        <div className="container max-w-4xl mx-auto px-6">
          <SectionHeading icon={<GraduationCap className="h-6 w-6 md:h-8 md:w-8" />} className="mb-6 md:mb-8">
            Education
          </SectionHeading>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 md:p-6 rounded-2xl bg-white shadow-soft"
          >
            <h3 className="font-display text-lg md:text-xl mb-1">Bachelor of Design (B.Des) — UI/UX Design</h3>
            <p className="text-muted-foreground mb-2 text-sm md:text-base">Chitkara University, Chandigarh</p>
            <p className="text-xs md:text-sm text-muted-foreground">2023 – 2027 | CGPA: 9.2 / 10 </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <SectionHeading icon={<Award className="h-6 w-6 md:h-8 md:w-8" />} className="mb-6 md:mb-8">
            Certifications & Achievements
          </SectionHeading>
          <div className="space-y-2 md:space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-3 md:p-4 rounded-xl bg-white shadow-soft flex items-start gap-3"
              >
                <span className="text-primary text-sm md:text-base">✦</span>
                <p className="text-foreground text-sm md:text-base">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open To – Motion Marquee */}
<section className="py-12 md:py-16 bg-cream">
  <div className="container max-w-4xl mx-auto px-6">
    <SectionHeading
      icon={<Briefcase className="h-6 w-6 md:h-8 md:w-8" />}
      className="mb-8"
    >
      Currently Open To
    </SectionHeading>

    {/* Mask */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 md:gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[
          "UI/UX Designer roles",
          "Product Designer roles",
          "UX Research opportunities",
          "Freelance projects",
          "Internships",
          "Collaborations",
          // duplicate for seamless loop
          "UI/UX Designer roles",
          "Product Designer roles",
          "UX Research opportunities",
          "Freelance projects",
          "Internships",
          "Collaborations",
        ].map((item, index) => (
          <motion.div
            key={`${item}-${index}`}
            whileHover={{
              scale: 1.08,
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-4 py-2 rounded-full bg-white shadow-soft text-sm md:text-base whitespace-nowrap cursor-default"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</section>

    </Layout>
  );
}
