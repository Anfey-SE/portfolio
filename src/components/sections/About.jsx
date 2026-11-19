import { motion } from "framer-motion";
import { about, personalInfo } from "../../constants/data.js";
import StatCard from "../ui/StatCard.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-background">
      <div className="section-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            About
          </h2>
          <div className="mt-5 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-purple" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="relative p-1">
              <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan opacity-60 blur-sm" />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="aspect-square w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.querySelector("[data-monogram-fallback]").style.display = "flex";
                  }}
                />
                <div
                  data-monogram-fallback
                  style={{ display: "none" }}
                  className="aspect-square w-full items-center justify-center bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan"
                >
                  <span className="font-heading text-6xl font-bold text-white">
                    {personalInfo.monogram}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-text-muted">
              {about.bio}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {about.stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 space-y-6">
              {about.education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm text-accent-blue">{edu.degree}</p>
                  <p className="mt-1 font-mono text-xs text-text-muted">
                    {edu.period} · {edu.location}
                  </p>
                  {edu.coursework.length > 0 && (
                    <p className="mt-3 text-sm text-text-muted">
                      <span className="text-text-primary">Relevant Coursework:</span>{" "}
                      {edu.coursework.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
