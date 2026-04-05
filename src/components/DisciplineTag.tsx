interface DisciplineTagProps {
  label: string;
}

export default function DisciplineTag({ label }: DisciplineTagProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium font-[family-name:var(--font-jetbrains-var)] rounded-full border border-border text-text-secondary">
      {label}
    </span>
  );
}
