import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent-blue/40 hover:shadow-glow"
    >
      <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-lg font-semibold text-text-primary/20">
            {project.title}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
>
  <span className="rounded-lg border border-accent-blue/50 bg-surface px-4 py-2 text-sm font-medium text-accent-blue">
    View Project
  </span>
</a>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.stack.map((tag, i) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-text-muted"
            >
              {project.stackIcons[i] && (
                <i className={`${project.stackIcons[i]} text-xs`} aria-hidden="true" />
              )}
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-heading text-xl font-semibold text-text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-xs text-text-muted"
            >
              <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
              {point}
            </li>
          ))}
        </ul>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="mt-5 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-blue"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </motion.article>
  );
}
