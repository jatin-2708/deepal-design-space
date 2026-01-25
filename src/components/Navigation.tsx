import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "My Wall", path: "/wall" },
  { label: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-6"
    >
      <nav
        className={`mx-auto max-w-4xl flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-nav"
            : "bg-white/80 backdrop-blur-sm shadow-soft"
        }`}
      >
        <NavLink to="/" className="font-display text-lg sm:text-xl tracking-tight text-foreground">
          DEEPAL
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `px-3 lg:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-navy-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <Button variant="outline" size="sm" className="rounded-xl gap-2 border-primary/20 hover:bg-navy-light">
              <FileText className="h-4 w-4" />
              <span className="hidden lg:inline">Resume</span>
            </Button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-4xl p-4 bg-white/98 backdrop-blur-md rounded-2xl shadow-card"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "text-primary bg-navy-light"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-border">
                <Button variant="outline" size="sm" className="w-full rounded-xl gap-2 border-primary/20">
                  <FileText className="h-4 w-4" />
                  Resume
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
