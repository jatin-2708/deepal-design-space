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

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container max-w-4xl mx-auto px-6">
          <SectionHeading className="mb-6 md:mb-8">Core Skills</SectionHeading>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <SkillTag>{skill}</SkillTag>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <SectionHeading className="mb-6 md:mb-8">Tools</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-white shadow-soft hover:shadow-card transition-all flex items-center gap-3"
              >
                <div className="w-14 h-14 rounded-lg bg-navy-light flex items-center justify-center flex-shrink-0">
  <img
    src={tool.image}
    alt={tool.name}
    className="w-full h-full p-2 object-contain"
  />
</div>

                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm md:text-base truncate">{tool.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{tool.category}</p>
                </div>
              </motion.div>
            ))}
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
            <p className="text-xs md:text-sm text-muted-foreground">2023 – 2027 | CGPA: 9.17 / 10</p>
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

      {/* Open To Section */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container max-w-4xl mx-auto px-6">
          <SectionHeading icon={<Briefcase className="h-6 w-6 md:h-8 md:w-8" />} className="mb-6 md:mb-8">
            Currently Open To
          </SectionHeading>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              "UI/UX Designer roles",
              "Product Designer roles",
              "UX Research opportunities",
              "Freelance projects",
              "Internships",
              "Collaborations",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <SkillTag>{item}</SkillTag>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
