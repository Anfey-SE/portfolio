import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SectionTitle({ title, subtitle, centered = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-text-muted">{subtitle}</p>
      )}
      <div
        className={`mt-5 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-purple ${centered ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
