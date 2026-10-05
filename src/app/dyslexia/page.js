import Image from "next/image";
import { Accent, Button, Container, CtaBanner, Eyebrow, PageHero } from "@/components/ui";
import readingPhoto from "../../../public/images/photo-reading.png";

export const metadata = {
  title: "Treating Dyslexia",
  description:
    "What dyslexia is, how the Orton-Gillingham approach helps, and how to enroll your child at the Learning Centre for Children in Moncton.",
};

const facts = [
  { big: "15%", text: "of our population has some degree of dyslexia." },
  { big: "IQ", text: "Dyslexia isn’t about intelligence or motivation. Many people with dyslexia have above-average intelligence." },
  { big: "ABC", text: "It can affect reading, writing, math, speaking and comprehension." },
  { big: "♥", text: "Children with dyslexia are often frustrated, act out and lose self-esteem." },
];

const lesson = [
  "Lessons are hands-on, with listening, seeing and movement reinforcing each other for the best learning.",
  "In every lesson, the child has a lot of success and gains confidence as well as skill.",
  "Children keep reviewing old material while learning new material, until it becomes automatic.",
  "They start by reading and writing single sounds, then blend them into syllables and words.",
  "Spelling is learned at the same time as reading.",
  "Vocabulary, sentence structure, writing and reading comprehension are taught in the same structured, step-by-step way, each step building on the last.",
  "Children learn the rules of English and how to use them to read and write well.",
  "The tutor stays flexible, learns how each child learns best and adjusts to suit them.",
];

export default function DyslexiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Treating dyslexia"
        title={
          <>
            Dyslexia isn’t curable, but it can be <Accent>overcome</Accent>
          </>
        }
        intro="A typical child with dyslexia has an average or above-average IQ. They find decoding, spelling and writing hard, and often process language more slowly. We use the proven Orton-Gillingham approach to help them succeed."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#enrollment">Enrollment</Button>
          <Button href="#approach" variant="outline">
            Our approach
          </Button>
        </div>
      </PageHero>

      {/* About dyslexia */}
      <section id="about-dyslexia" className="scroll-mt-24 pb-24">
        <Container>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            About <Accent color="sun">dyslexia</Accent>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">Dyslexia is a common learning difference that can be overcome.</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f, i) => (
              <div
                key={f.big}
                className={`rounded-[1.75rem] p-7 ${
                  ["bg-plum-100", "bg-sun-200", "bg-olive-100", "bg-plum-600 text-white"][i]
                }`}
              >
                <p className="font-display text-4xl font-semibold">{f.big}</p>
                <p className="mt-4 leading-relaxed opacity-80">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section id="approach" className="scroll-mt-24 bg-white py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>The approach</Eyebrow>
              <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">
                The <Accent>Orton-Gillingham</Accent> approach
              </h2>
              <p className="mt-6 leading-relaxed text-ink/70">
                Tried, tested and true. First we assess each child’s needs and abilities, then we plan their tutoring
                program.
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[
                  ["1:1", "tutoring"],
                  ["~1 hr", "per session"],
                  ["2×", "a week"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-plum-50 p-4">
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-display text-2xl font-semibold text-plum-600">{v}</dd>
                    <dd className="text-xs font-semibold text-ink/60">{l}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 leading-relaxed text-ink/70">
                Sessions happen outside school hours. Our carefully chosen tutors are trained and certified, and reports
                and meetings keep parents up to date on their child’s progress.
              </p>
              <Image src={readingPhoto} alt="A girl absorbed in a book" className="blob mt-10 hidden aspect-[4/3] w-full max-w-sm object-cover lg:block" placeholder="blur" />
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold">Inside a tutoring session</h3>
              <ol className="mt-6 space-y-4">
                {lesson.map((item, i) => (
                  <li key={i} className="flex gap-5 rounded-3xl border border-plum-100 bg-cream p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-plum-600 font-display font-semibold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1.5 leading-relaxed text-ink/80">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* History */}
      <section id="history" className="scroll-mt-24 py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>History & research</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
              Re-wiring the brain to <Accent color="olive">read</Accent>
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-ink/75">
              <p>
                In the mid-1920s, Dr. Samuel Torrey Orton and his colleagues began using multi-sensory techniques at the
                mobile mental health clinic he directed in Iowa. He was influenced by the methods of Grace Fernald and
                Helen Keller, which used movement and touch. He suggested that touch and movement, added to seeing and
                hearing, could stop children reversing letters or mixing up their order when reading and writing.
                Students who reverse <em>b</em> and <em>d</em>, for example, are taught to form each letter with
                different, consistent strokes.
              </p>
              <blockquote className="rounded-[2rem] bg-plum-600 p-8 font-display text-2xl leading-snug text-white">
                “In the 1940s, Anna Gillingham said her system of multi-sensory, one-to-one tutoring was re-wiring the
                brain. Today, research is proving her right.”
              </blockquote>
              <p>
                In <em>Overcoming Dyslexia</em>, Dr. Sally Shaywitz of Harvard used MRI scans to show that a dyslexic
                brain has few or no neural paths to the lower left areas that act as our “dictionary and library.” Each
                time a child with dyslexia sees a word, it’s as if it were the first time, and they have to work it out
                again.
              </p>
              <p>
                Children with dyslexia need either much more time or a multi-sensory program that re-wires the brain. Then
                they can begin to <strong>learn to read</strong>, so they too can begin to <strong>read to learn</strong>.
              </p>
              <p className="text-sm text-ink/50">Adapted from the London Learning Centre website.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Enrollment */}
      <section id="enrollment" className="scroll-mt-24 pb-4">
        <Container>
          <div className="grid gap-8 rounded-[2.5rem] bg-sun-400 p-8 sm:p-14 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <p className="font-hand text-3xl font-bold text-plum-700">Enrollment</p>
              <h2 className="mt-1 font-display text-4xl leading-tight font-semibold">
                Children diagnosed with dyslexia are eligible to apply
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-ink/75">
                Not sure yet? Contact the Centre and we’ll explain how to get your child tested for dyslexia.
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button href="/contact">Contact the Centre</Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
