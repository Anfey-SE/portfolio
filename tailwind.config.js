/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#111118",
        border: "#1e1e2e",
        "accent-blue": "#4f8ef7",
        "accent-purple": "#9b6dff",
        "accent-cyan": "#00d4ff",
        "text-primary": "#f0f0ff",
        "text-muted": "#6b7280",
        "glow-blue": "rgba(79, 142, 247, 0.15)",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 142, 247, 0.15)",
        "glow-lg": "0 0 60px rgba(79, 142, 247, 0.25)",
        "glow-purple": "0 0 40px rgba(155, 109, 255, 0.15)",
      },
      animation: {
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
