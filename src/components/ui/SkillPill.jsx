import { motion } from "framer-motion";

export default function SkillPill({ skill, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 font-mono text-xs text-text-primary transition-all duration-300 hover:border-accent-blue/40 hover:shadow-glow"
    >
      {skill.icon && (
        <i className={`${skill.icon} text-sm`} aria-hidden="true" />
      )}
      {skill.name}
    </motion.span>
  );
}
