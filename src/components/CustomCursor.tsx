import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CursorPos {
  x: number;
  y: number;
}

export function CustomCursor() {
  const [mousePos, setMousePos] = useState<CursorPos>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [smoothPos, setSmoothPos] = useState<CursorPos>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Smooth follow with easing
      setSmoothPos((prev) => ({
        x: prev.x + (e.clientX - prev.x) * 0.15,
        y: prev.y + (e.clientY - prev.y) * 0.15,
      }));

      // Detect hover over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer") ||
        target.closest("[role='button']");

      if (isInteractive) {
        setIsHovering(true);

        // Set contextual text based on element
        const button = target.closest("button") || target.closest("a");
        if (button) {
          const text = button.textContent?.toLowerCase() || "";
          if (text.includes("project") || text.includes("work")) {
            setCursorText("Dive in");
          } else if (text.includes("resume") || text.includes("download")) {
            setCursorText("Get it");
          } else if (text.includes("contact") || text.includes("talk")) {
            setCursorText("Let's go");
          } else if (text.includes("view") || text.includes("see")) {
            setCursorText("See more");
          } else {
            setCursorText("Tap");
          }
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50"
        animate={{
          x: smoothPos.x,
          y: smoothPos.y,
        }}
        transition={{
          type: "spring",
          damping: 25,
          mass: 0.5,
          stiffness: 100,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: isHovering ? 48 : 12,
            height: isHovering ? 48 : 12,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Outer ring - expands on hover */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-navy/60"
            animate={{
              scale: isHovering ? 1 : 0.8,
              opacity: isHovering ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Inner dot - always visible */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-navy rounded-full" />

          {/* Glow effect on hover */}
          {isHovering && (
            <motion.div
              className="absolute inset-0 rounded-full bg-navy/20 blur-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>

        {/* Contextual text - appears on hover */}
        {cursorText && (
          <motion.div
            className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-3 py-1.5 bg-navy text-white text-xs font-medium rounded-full shadow-lg">
              {cursorText}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
