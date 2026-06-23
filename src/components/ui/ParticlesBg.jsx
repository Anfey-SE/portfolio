import { useMemo } from "react";
import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: { value: 40, density: { enable: true, area: 900 } },
        color: { value: ["#4f8ef7", "#9b6dff", "#00d4ff"] },
        shape: { type: "circle" },
        opacity: { value: { min: 0.08, max: 0.25 } },
        size: { value: { min: 1, max: 2 } },
        links: {
          enable: true,
          distance: 140,
          color: "#4f8ef7",
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: true,
          outModes: { default: "out" },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.15 } },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10 h-full w-full"
    />
  );
}
