import Link from "next/link";

// Redrawn from the triangle emblem in the original header banner, so it
// stays sharp at any size.
export function Emblem({ className = "size-6", ...props }) {
  return (
    <svg viewBox="0 0 48 44" fill="none" className={className} aria-hidden="true" {...props}>
      <g stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M24 3 45 41H3Z" />
        <path d="M24 11 38 36H10Z" />
        <path d="M24 19 31 31H17Z" />
        <path d="M24 26v5" />
      </g>
      <circle cx="24" cy="23" r="1.8" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ inverted = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Learning Centre for Children Moncton, home">
      <span
        className={`grid size-11 place-items-center rounded-2xl transition-transform group-hover:-rotate-6 ${
          inverted ? "bg-white text-plum-700" : "bg-plum-600 text-white"
        }`}
      >
        <Emblem className="size-7" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${inverted ? "text-white" : "text-ink"}`}>
          Learning Centre
        </span>
        <span className={`block text-xs font-semibold tracking-wide ${inverted ? "text-plum-200" : "text-plum-600"}`}>
          FOR CHILDREN · MONCTON
        </span>
      </span>
    </Link>
  );
}
