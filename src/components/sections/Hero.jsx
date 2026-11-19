import { motion } from "framer-motion";
import { personalInfo } from "../../constants/data.js";
import useTypewriter from "../../hooks/useTypewriter.js";
import Button from "../ui/Button.jsx";
import ParticlesBg from "../ui/ParticlesBg.jsx";
import { scrollToSection } from "../../utils/scroll.js";

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.15 },
  }),
};

export default function Hero() {
  const typedRole = useTypewriter(personalInfo.typewriterRoles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-blue/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-accent-purple/10 blur-[120px]" />

      <ParticlesBg />

      <div className="section-container relative z-10 w-full !py-0 pt-16">
        <div className="max-w-3xl">
          <motion.div
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {personalInfo.statusBadge}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 font-heading text-5xl font-bold leading-[1.1] text-text-primary sm:text-6xl lg:text-[4.5rem]"
          >
            Hi, I&apos;m {personalInfo.name}
          </motion.h1>

          <motion.p
            custom={2}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 font-heading text-2xl font-medium text-accent-blue sm:text-3xl"
          >
            {typedRole}
            <span className="ml-0.5 inline-block h-7 w-0.5 animate-pulse bg-accent-blue align-middle" />
          </motion.p>

          <motion.p
            custom={3}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-lg text-text-muted"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            custom={4}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button onClick={() => scrollToSection("projects")}>
              View My Work
            </Button>
            <a href="/Amna_Hafeez_Resume.pdf" download="Amna_Hafeez_Resume.pdf">
  <Button variant="outline">
    Download CV
  </Button>
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
