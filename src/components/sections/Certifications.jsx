import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { certifications } from "../../constants/data.js";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-border bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {certifications.title}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-purple" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {certifications.items.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card p-6 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                <HiOutlineAcademicCap className="text-xl" />
              </div>
              <h3 className="font-heading text-base font-semibold leading-snug text-text-primary">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm text-accent-purple">{cert.issuer}</p>
              <p className="mt-3 font-mono text-xs text-text-muted">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
