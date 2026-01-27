import { motion } from "framer-motion";

// Footer component
export function Footer() {
  const socialLinks = [
    {
      href: "mailto:gdeepal190404@gmail.com",
      image: "/icons/gmail.png",
      alt: "Email",
    },
    {
      href: "https://linkedin.com/in/deepalgupta19",
      image: "/icons/linkedin.png",
      alt: "LinkedIn",
      target: "_blank",
    },
    {
      href: "https://behance.net/deepalgupta",
      image: "/icons/behance.png",
      alt: "Behance",
      target: "_blank",
    },
  ];

  return (
    <footer className="py-12 mt-20 border-t border-border bg-cream">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl mb-2">Deepal Gupta</h3>
            <p className="text-sm text-muted-foreground">
              UI/UX Designer · Designing with intent, structure, and clarity.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.alt}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-white border border-primary/10 shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-200 group cursor-pointer"
              >
                <img src={link.image} alt={link.alt} className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Deepal Gupta. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
