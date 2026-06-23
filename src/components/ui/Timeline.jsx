import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem.jsx";

export default function Timeline({ items }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent-blue/50 via-accent-purple/30 to-transparent md:left-1/2 md:block md:-translate-x-px" />

      {items.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
