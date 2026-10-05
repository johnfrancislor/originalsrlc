import Image from "next/image";
import { Accent, Button, Container, CtaBanner, Eyebrow } from "@/components/ui";
import { Emblem } from "@/components/Logo";
import tutorPhoto from "../../public/images/photo-tutor.png";
import readingPhoto from "../../public/images/photo-reading.png";
import smilePhoto from "../../public/images/photo-smile.png";
import polarBear from "../../public/images/polar-bear.png";

const stats = [
  { value: "15%", label: "of people have some degree of dyslexia" },
  { value: "1:1", label: "every child works with their own tutor" },
  { value: "2×", label: "one-hour sessions each week" },
  { value: "$0", label: "tutoring is always free for families" },
];

const features = [
  {
    title: "One-to-one",
    accent: "tutoring",
    text: "Each child works with their own trained, certified tutor in sessions outside normal school hours.",
    card: "bg-plum-100 text-ink",
    chip: "bg-white text-plum-600",
    icon: <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.2-5 5-5s5 2 5 5m-1.4-3.5C12.5 15.6 14 15 16 15c2.8 0 5 2 5 5" />,
  },
  {
    title: "Multi-sensory",
    accent: "lessons",
    text: "Seeing, hearing and doing reinforce each other, so every lesson builds skill and confidence.",
    card: "bg-plum-600 text-white md:-translate-y-6",
    chip: "bg-plum-500 text-sun-400",
    icon: <path d="M12 3v2m6.4.6-1.4 1.4M21 12h-2M5 12H3m3.9-5L5.6 5.6M9 18h6m-5 3h4m-2-15a5 5 0 0 0-3 9c.6.5 1 1.2 1 2h4c0-.8.4-1.5 1-2a5 5 0 0 0-3-9Z" />,
  },
  {
    title: "Free for",
    accent: "every family",
    text: "We are a non-profit. Families never pay for tutoring, thanks to volunteers and donors.",
    card: "bg-sun-400 text-ink",
    chip: "bg-white text-sun-500",
    icon: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  },
];

const steps = [
  { title: "Assessment", text: "We assess each child’s individual needs and abilities." },
  { title: "A plan of their own", text: "The tutoring program is planned around that child." },
  { title: "Tutoring twice a week", text: "One-hour, one-to-one sessions outside school time." },
  { title: "Parents in the loop", text: "Reports and meetings keep families up to date on progress." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-10 -left-24 size-72 rounded-full bg-plum-100/70" aria-hidden="true" />
        <div className="dots absolute right-6 bottom-10 h-28 w-36 text-sun-400/70" aria-hidden="true" />
        <Container className="relative grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>Free dyslexia tutoring in Moncton – Riverview</Eyebrow>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold text-balance sm:text-7xl">
              Every child can <Accent>learn</Accent> to read and <Accent color="sun">shine</Accent>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
              We give children with dyslexia free, one-to-one tutoring using the proven Orton-Gillingham approach.
              They gain the skills and the confidence to go from learning to read to reading to learn.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/dyslexia#enrollment">Enroll your child</Button>
              <Button href="/get-involved" variant="outline">
                Become a volunteer
              </Button>
            </div>
          </div>

          <HeroCollage />
        </Container>
      </section>

      {/* Stats */}
      <section aria-label="At a glance">
        <Container>
          <dl className="grid grid-cols-2 gap-4 rounded-[2rem] border border-plum-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.value} className="rounded-2xl p-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-plum-600 sm:text-5xl">{s.value}</dd>
                <dd className="mt-1 text-sm leading-snug text-ink/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Features */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-4xl leading-tight font-semibold sm:text-5xl">
              How we <Accent>help</Accent>
              <br />
              children learn
            </h2>
            <p className="max-w-md text-ink/70">
              Dyslexia changes the way the brain processes language. It isn’t curable, but with the right teaching
              it can be overcome.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className={`relative overflow-hidden rounded-[2rem] p-8 ${f.card}`}>
                <div className="absolute -top-8 -right-8 size-28 rounded-full border-[14px] border-current opacity-10" aria-hidden="true" />
                <span className={`grid size-14 place-items-center rounded-2xl ${f.chip}`}>
                  <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-14 font-display text-3xl leading-tight font-semibold">
                  {f.title}
                  <span className="block font-hand text-4xl">{f.accent}</span>
                </h3>
                <p className="mt-3 leading-relaxed opacity-80">{f.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="pb-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="blob absolute inset-4 -rotate-6 bg-sun-400" aria-hidden="true" />
            <div className="blob relative overflow-hidden border-8 border-white shadow-xl">
              <Image src={tutorPhoto} alt="A tutor reading with a young boy" className="aspect-[5/4] w-full object-cover" placeholder="blur" />
            </div>
            <div className="float absolute -bottom-6 -left-2 rounded-2xl bg-white px-5 py-4 shadow-lg sm:-left-8">
              <p className="font-display text-2xl font-semibold text-plum-600">Learn to read</p>
              <p className="text-sm text-ink/60">so they can read to learn</p>
            </div>
          </div>

          <div>
            <Eyebrow>About the Learning Centre</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Children should have the world <Accent>by the tail</Accent>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
              <p>
                Every day some children try to listen, try to understand and try to learn, but they just can’t. These
                children often have dyslexia, which changes the way the brain processes information.
              </p>
              <p>
                Left unrecognized, the frustration, pain and loss of self-confidence grow every week. We help children
                with reading, writing and related school skills, giving them quality, up-to-date tutoring.
              </p>
            </div>
            <Button href="/about" className="mt-8">
              Learn more about us
            </Button>
          </div>
        </Container>
      </section>

      {/* Mission band */}
      <section className="relative overflow-hidden bg-plum-600 py-24 text-white">
        <div className="absolute top-16 left-[6%] size-20 rounded-full bg-sun-400" aria-hidden="true" />
        <div className="absolute -right-20 -bottom-24 size-80 rounded-full bg-plum-500" aria-hidden="true" />
        <div className="dots absolute top-10 right-[10%] h-24 w-32 text-plum-400" aria-hidden="true" />
        <Container className="relative">
          <h2 className="mx-auto max-w-4xl text-center font-display text-3xl leading-snug font-medium text-balance sm:text-5xl">
            We aim to help children with dyslexia <Accent color="light">overcome</Accent> it and find joy in
            learning.
          </h2>

          <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-[1.75rem] bg-white/10 p-7 ring-1 ring-white/15 backdrop-blur-sm">
                <span className="grid size-11 place-items-center rounded-full bg-sun-400 font-display text-lg font-semibold text-ink">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-100">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Button href="/dyslexia#approach" variant="sun">
              Discover our approach
            </Button>
          </div>
        </Container>
      </section>

      {/* Polar bear */}
      <section className="py-24">
        <Container>
          <div className="grid items-center gap-10 rounded-[2.5rem] bg-olive-100 p-8 sm:p-14 md:grid-cols-[auto_1fr]">
            <div className="relative mx-auto">
              <div className="absolute inset-0 scale-110 rounded-full bg-white" aria-hidden="true" />
              <Image src={polarBear} alt="The Learning Centre polar bear mascot" className="float-slow relative w-44 sm:w-52" />
            </div>
            <div>
              <p className="font-hand text-3xl font-bold text-olive-700">Say hello to our mascot</p>
              <h2 className="mt-1 font-display text-4xl font-semibold">The Polar Bear</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">
                In the United States, Scottish Rite Learning Centres use a teddy bear. When the first Canadian centre
                opened in London, Ontario, a polar bear was chosen for our home in the north. Between its paws it holds
                the symbol of the Scottish Rite Charitable Foundation of Canada.
              </p>
              <Button href="/about#polar-bear" variant="outline" className="mt-7">
                Read the story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-[12%] rounded-full bg-plum-600" aria-hidden="true" />
      <div className="absolute inset-[6%] rounded-full border-2 border-dashed border-plum-200" aria-hidden="true" />

      <div className="blob absolute top-[16%] left-[14%] w-[62%] overflow-hidden border-[6px] border-white shadow-2xl">
        <Image src={smilePhoto} alt="A smiling boy with an open book" className="aspect-square w-full object-cover" priority placeholder="blur" />
      </div>
      <div className="float absolute right-[2%] bottom-[8%] w-[40%] overflow-hidden rounded-full border-[6px] border-white bg-white shadow-xl">
        <Image src={readingPhoto} alt="A girl reading a book" className="aspect-square w-full object-cover" placeholder="blur" />
      </div>

      <div className="float-slow absolute top-[4%] right-[6%] grid size-24 place-items-center rounded-full bg-sun-400 shadow-lg sm:size-28">
        <RoundBadge />
      </div>

      <div className="absolute bottom-[14%] left-[2%] flex items-center gap-3 rounded-2xl bg-white py-3 pr-5 pl-3 shadow-lg">
        <span className="grid size-10 place-items-center rounded-xl bg-olive-500 text-white">
          <Emblem className="size-6" />
        </span>
        <span className="text-sm leading-tight">
          <span className="block font-bold">Orton-Gillingham</span>
          <span className="text-ink/60">tried, tested and true</span>
        </span>
      </div>
    </div>
  );
}

function RoundBadge() {
  return (
    <svg viewBox="0 0 100 100" className="size-full p-1" aria-label="Free tutoring for children">
      <defs>
        <path id="badge-circle" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" />
      </defs>
      <text className="fill-ink font-sans text-[10.5px] font-extrabold tracking-[0.2em] uppercase">
        <textPath href="#badge-circle">Free tutoring · For children ·</textPath>
      </text>
      <Emblem x="33" y="34" width="34" height="31" className="text-plum-700" />
    </svg>
  );
}
