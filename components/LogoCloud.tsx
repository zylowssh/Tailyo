const LOGOS: { name: string; mark?: React.ReactNode; cls?: string }[] = [
  {
    name: "alan",
    mark: (
      <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
        <path d="M10 2a8 8 0 1 0 8 8h-4a4 4 0 1 1-4-4V2Z" />
      </svg>
    ),
  },
  {
    name: "swan",
    mark: (
      <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
        <circle cx="10" cy="10" r="8" /><path d="M5 11c2-3 4 2 6-1 1.4-2 3 0 4 0" />
      </svg>
    ),
  },
  { name: "cabaïa", cls: "font-extrabold tracking-tight" },
  {
    name: "Spendesk",
    mark: (
      <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
        <path d="M3 4l7 6-7 6V4ZM10 4l7 6-7 6V4Z" />
      </svg>
    ),
  },
  {
    name: "Combo",
    mark: (
      <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path d="M4 7l6-4 6 4v6l-6 4-6-4V7Z" />
      </svg>
    ),
  },
  { name: "Soko", cls: "font-bold" },
];

function Wordmark({ l }: { l: (typeof LOGOS)[number] }) {
  return (
    <span className={`flex items-center gap-2 text-lg text-ink/55 transition duration-300 hover:text-ink ${l.cls ?? "font-semibold"}`}>
      {l.mark}
      {l.name}
    </span>
  );
}

export function LogoCloud() {
  return (
    <section className="border-y border-ink/5 bg-cream pb-14 pt-10">
      <p className="text-center text-xs font-medium text-ink-soft">Ils nous font confiance</p>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <Wordmark key={`${l.name}-${i}`} l={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
