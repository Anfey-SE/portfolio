import { motion } from "framer-motion";

export default function PageLoader({ isLoaded }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background ${isLoaded ? "pointer-events-none" : ""}`}
    >
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="font-heading text-xl font-semibold gradient-text"
      >
        AH
      </motion.div>
    </motion.div>
  );
}
