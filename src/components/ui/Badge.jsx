export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-body text-xs text-text-muted ${className}`}
    >
      {children}
    </span>
  );
}
