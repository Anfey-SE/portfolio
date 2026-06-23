import { motion } from "framer-motion";
import { skills } from "../../constants/data.js";
import SkillPill from "../ui/SkillPill.jsx";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-surface/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            Skills
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-purple" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="mb-5 font-heading text-lg font-semibold text-text-primary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, index) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    index={groupIndex * 6 + index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
