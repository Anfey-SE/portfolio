import useCountUp from "../../hooks/useCountUp.js";

export default function StatCard({ label, value }) {
  const { ref, count } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-surface p-6 text-center transition-all hover:border-accent-blue/30"
    >
      <p className="font-heading text-3xl font-bold gradient-text">{count}</p>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </div>
  );
}
