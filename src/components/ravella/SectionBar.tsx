export function SectionBar({
  children,
  tone = "cream",
}: {
  children: string;
  tone?: "cream" | "mint";
}) {
  return (
    <h2
      className={`rounded-md border px-6 py-4 text-center font-display text-2xl font-extrabold sm:text-3xl ${
        tone === "cream"
          ? "border-gold/50 bg-cream text-primary"
          : "border-border bg-mint text-primary"
      }`}
    >
      {children}
    </h2>
  );
}
