import Link from "next/link";

export function ArrowIcon({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10h11m-4-5 5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Hand-drawn underline that sits under a highlighted word.
export function Squiggle({ className = "" }) {
  return (
    <svg viewBox="0 0 200 18" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path
        d="M3 12c22-8 40-8 58-2s34 6 52-1 38-8 56-2 21 5 28 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// An accent word in handwriting with a squiggle under it, like
// "learn" / "play" in the reference design.
export function Accent({ children, color = "plum" }) {
  const tone = {
    plum: "text-plum-600 [&>svg]:text-plum-200",
    sun: "text-sun-500 [&>svg]:text-sun-200",
    olive: "text-olive-700 [&>svg]:text-olive-300",
    light: "text-sun-400 [&>svg]:text-plum-400",
  }[color];
  return (
    <span className={`relative inline-block font-hand font-bold whitespace-nowrap ${tone}`}>
      <span className="relative z-10">{children}</span>
      <Squiggle className="absolute -bottom-1 left-0 h-3 w-full" />
    </span>
  );
}

export function Button({ href, children, variant = "primary", className = "" }) {
  const styles = {
    primary: "bg-plum-600 text-white hover:bg-plum-700 shadow-lg shadow-plum-600/25",
    sun: "bg-sun-400 text-ink hover:bg-sun-500 shadow-lg shadow-sun-500/25",
    white: "bg-white text-plum-700 hover:bg-plum-50",
    outline: "border-2 border-plum-600 text-plum-700 hover:bg-plum-600 hover:text-white",
  }[variant];
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const Tag = external ? "a" : Link;
  return (
    <Tag
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pr-2 pl-6 font-bold transition ${styles} ${className}`}
    >
      {children}
      <span
        className={`grid size-9 place-items-center rounded-full transition-transform group-hover:translate-x-0.5 ${
          variant === "primary" ? "bg-white text-plum-700" : variant === "sun" ? "bg-ink text-sun-400" : "bg-plum-600 text-white"
        }`}
      >
        <ArrowIcon />
      </span>
    </Tag>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full bg-plum-100 px-4 py-1.5 text-sm font-bold text-plum-700 ${className}`}>
      <span className="size-2 rounded-full bg-sun-400" />
      {children}
    </p>
  );
}

export function Container({ children, className = "" }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

// Shared hero for inner pages.
export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -right-24 size-72 rounded-full bg-plum-100" aria-hidden="true" />
      <div className="absolute bottom-6 -left-10 size-32 rounded-full bg-sun-200" aria-hidden="true" />
      <div className="dots absolute top-20 right-[18%] h-24 w-32 text-plum-200" aria-hidden="true" />
      <Container className="relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.1] font-semibold text-balance sm:text-6xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-plum-600 px-6 py-14 text-center text-white sm:px-16">
          <div className="absolute -top-16 -left-16 size-48 rounded-full bg-plum-500" aria-hidden="true" />
          <div className="absolute -right-10 -bottom-20 size-56 rounded-full bg-sun-400/90" aria-hidden="true" />
          <div className="dots absolute top-8 right-10 h-20 w-28 text-plum-400" aria-hidden="true" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-semibold sm:text-5xl">
              You can change the <Accent color="light">life</Accent> of a child.
            </h2>
            <p className="mt-5 text-lg text-plum-100">
              Our tutors and staff are volunteers. Give your time or make a donation and help a child go from
              frustration to success.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/get-involved" variant="sun">
                Get involved
              </Button>
              <Button href="/contact" variant="white">
                Contact the Centre
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
