export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="label mb-4 flex items-center gap-3">
      <span className="h-px w-6 bg-gold/50" aria-hidden />
      {children}
    </p>
  );
}
