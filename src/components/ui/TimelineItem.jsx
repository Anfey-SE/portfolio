import { motion } from "framer-motion";
import Card from "./Card.jsx";

export default function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-12 flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      <div className="hidden w-1/2 md:block" />

      <div className="absolute left-4 z-10 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-blue bg-background md:left-1/2">
        <div className="absolute inset-0 animate-pulse-dot rounded-full bg-accent-blue/40" />
      </div>

      <div
        className={`ml-10 w-full md:ml-0 md:w-1/2 ${isEven ? "md:pr-10" : "md:pl-10"}`}
      >
        <Card hover={false} className="hover:border-accent-blue/20">
          <span className="font-mono text-xs text-accent-blue">{item.role}</span>
          <h3 className="mt-1 font-heading text-lg font-semibold text-text-primary">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-accent-purple">
            {item.organization} · {item.period} · {item.location}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {item.description}
          </p>
        </Card>
      </div>
    </motion.div>
  );
}
