export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`glass-card p-6 ${hover ? "transition-all duration-300 hover:border-accent-blue/30 hover:shadow-glow" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
