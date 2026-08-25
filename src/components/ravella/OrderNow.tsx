import { FORM } from "@/data/ravella-content";

export function OrderNow({ className = "" }: { className?: string }) {
  return (
    <a
      href={FORM}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition hover:brightness-125 ${className}`}
    >
      <span aria-hidden>🛒</span> Order Now
    </a>
  );
}
