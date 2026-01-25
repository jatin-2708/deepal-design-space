import { motion } from "framer-motion";
import { Mail, Linkedin, ExternalLink, Send } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const contactLinks = [
  {
    title: "Email",
    value: "hello@deepalgupta.com",
    href: "mailto:hello@deepalgupta.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/deepalgupta",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    title: "Behance",
    value: "behance.net/deepalgupta",
    href: "https://behance.net",
    icon: ExternalLink,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-hero min-h-screen">
        <div className="container max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-soft hover:shadow-card transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-coral-light flex items-center justify-center group-hover:bg-primary transition-colors">
                      <link.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.title}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-coral"
              >
                <h3 className="font-display text-lg mb-2">Currently Open To</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• UI/UX Designer roles</li>
                  <li>• Product Designer roles</li>
                  <li>• UX Research opportunities</li>
                  <li>• Freelance & collaborations</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="rounded-xl bg-white shadow-soft border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="rounded-xl bg-white shadow-soft border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="rounded-xl bg-white shadow-soft border-0 resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-xl gap-2 shadow-soft hover:shadow-card">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
