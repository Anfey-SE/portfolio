import { motion, useSpring } from "framer-motion";
import { useEffect } from "react";
import useScrollProgress from "../../hooks/useScrollProgress.js";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    scaleX.set(progress);
  }, [progress, scaleX]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-accent-blue"
      style={{ scaleX }}
    />
  );
}
