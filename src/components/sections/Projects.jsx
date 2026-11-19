import { motion } from "framer-motion";
import { projects } from "../../constants/data.js";
import ProjectCard from "../ui/ProjectCard.jsx";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {projects.title}
          </h2>
          <div className="mt-5 h-px w-16 bg-gradient-to-r from-accent-blue to-accent-purple" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={projects.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm text-accent-blue transition-colors hover:text-accent-cyan"
          >
            {projects.githubCta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
