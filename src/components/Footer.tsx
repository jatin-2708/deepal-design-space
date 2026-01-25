import { Mail, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
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
            <a
              href="mailto:hello@deepalgupta.com"
              className="p-3 rounded-xl bg-white shadow-soft hover:shadow-card transition-all duration-200 text-muted-foreground hover:text-primary"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white shadow-soft hover:shadow-card transition-all duration-200 text-muted-foreground hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white shadow-soft hover:shadow-card transition-all duration-200 text-muted-foreground hover:text-primary"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Deepal Gupta. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
