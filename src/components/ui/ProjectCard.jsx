import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-heading text-lg font-semibold text-text-primary/20">
              {project.title}
            </span>
          </div>
        )}
        <a
          href={project.liveUrl || project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span className="rounded-lg border border-accent-blue/50 bg-surface px-4 py-2 text-sm font-medium text-accent-blue">
            View Project
          </span>
        </a>
      </div>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-text-muted"
            >
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

        {project.highlights.length > 0 && (
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
        )}

        <div className="mt-5 flex items-center gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-blue"
          >
            <FaGithub />
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent-blue"
            >
              <FaExternalLinkAlt className="text-xs" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
