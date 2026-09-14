export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-gold">
      <span className="h-px w-6 bg-gold/50" aria-hidden />
      {children}
    </p>
  );
}
