import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineExternalLink } from "react-icons/hi";
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="glass-card flex flex-col justify-between p-6 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow"
            >
              <div>
                {cert.image ? (
                  <div className="mb-4 aspect-video w-full overflow-hidden rounded-xl border border-border bg-surface">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue">
                    <HiOutlineAcademicCap className="text-xl" />
                  </div>
                )}
                <h3 className="font-heading text-base font-semibold leading-snug text-text-primary">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-accent-purple">{cert.issuer}</p>
                <p className="mt-3 font-mono text-xs text-text-muted">{cert.date}</p>
              </div>

              {(cert.image || cert.credentialUrl) && (
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border/50 pt-4">
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-blue transition-colors hover:text-accent-cyan"
                    >
                      <HiOutlineExternalLink className="text-sm" />
                      View Certificate
                    </a>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-blue transition-colors hover:text-accent-cyan"
                    >
                      <HiOutlineExternalLink className="text-sm" />
                      Verify
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
