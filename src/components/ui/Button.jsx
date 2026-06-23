const variants = {
  primary:
    "bg-accent-blue text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.03]",
  outline:
    "border border-border bg-transparent text-text-primary hover:border-accent-blue/50 hover:bg-glow-blue",
  ghost: "text-text-muted hover:text-text-primary",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
