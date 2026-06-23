import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "../../constants/data.js";
import useActiveSection from "../../hooks/useActiveSection.js";
import ScrollProgressBar from "../ui/ScrollProgressBar.jsx";
import { scrollToSection } from "../../utils/scroll.js";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.href);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <ScrollProgressBar />
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple font-heading text-sm font-bold text-white"
            aria-label="Go to top"
          >
            {personalInfo.monogram}
          </button>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative text-sm transition-colors ${
                    activeSection === link.id
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent-blue"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl text-text-primary md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="border-b border-border bg-background/95 backdrop-blur-md md:hidden"
            >
              <ul className="flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className={`block w-full rounded-lg px-4 py-3 text-left text-sm ${
                        activeSection === link.id
                          ? "bg-glow-blue text-text-primary"
                          : "text-text-muted"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
