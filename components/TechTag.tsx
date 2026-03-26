export default function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-block px-2.5 py-1 text-xs font-mono rounded-full border border-border text-text-secondary bg-surface hover:bg-surface-hover transition-colors">
      {label}
    </span>
  );
}
