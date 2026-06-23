import { motion } from "framer-motion";
import { experience } from "../../constants/data.js";
import Timeline from "../ui/Timeline.jsx";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-surface/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {experience.title}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-purple" />
        </motion.div>

        <Timeline items={experience.items} />
      </div>
    </section>
  );
}
