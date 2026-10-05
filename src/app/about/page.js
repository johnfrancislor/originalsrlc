import Image from "next/image";
import { Accent, Button, Container, CtaBanner, Eyebrow, PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import tutorPhoto from "../../../public/images/photo-tutor.png";
import polarBear from "../../../public/images/polar-bear.png";

export const metadata = {
  title: "About the Learning Centre",
  description:
    "The Learning Centre for Children in Moncton – Riverview gives children with dyslexia free, high-quality tutoring in reading, writing and related school skills.",
};

const facility = [
  "Private tutoring rooms",
  "Large reception area for waiting families",
  "Staff offices",
  "Group meeting room and boardroom",
  "Staff lounge",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Learning Centre"
        title={
          <>
            Helping children who <Accent>learn differently</Accent>
          </>
        }
        intro="The Scottish Rite Charitable Foundation Learning Centres for Children improve the lives of children diagnosed with dyslexia. We give them high-quality, up-to-date tutoring in reading, writing and related school skills."
      />

      <section className="pb-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="blob absolute -inset-3 rotate-3 bg-plum-200" aria-hidden="true" />
            <Image src={tutorPhoto} alt="A tutor working one-to-one with a student" className="blob relative aspect-[4/3] w-full border-8 border-white object-cover shadow-xl" placeholder="blur" />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              Children should have the world by the tail. Their “job” is to respect their parents, get along with their
              peers, go to school and get good grades. But what if they simply can’t?
            </p>
            <p>
              Every day they try to listen, try to understand and try to learn, but they just can’t. No one can get
              through to them.
            </p>
            <p className="rounded-3xl border-l-4 border-sun-400 bg-white p-6 text-ink shadow-sm">
              These children often have <strong className="text-plum-700">dyslexia</strong>, which changes the way the
              brain processes information. Left unrecognized and untreated, the frustration, pain and loss of
              self-confidence grow every week.
            </p>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section id="location" className="scroll-mt-24 bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Location & facility</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
              A welcoming place to <Accent>grow</Accent>
            </h2>
            <p className="mt-6 leading-relaxed text-ink/70">
              The Learning Centre is located at the {site.centre.name}, {site.centre.lines.join(", ")}.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {facility.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-2xl bg-plum-50 px-4 py-3 font-semibold">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-plum-600 text-white">
                    <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="m5 10 3.5 3.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-3xl bg-olive-100 p-6 leading-relaxed text-ink/80">
              <strong>Always improving:</strong> every tutoring session is recorded on video and audio. A tutor trainer
              reviews the recordings and gives our tutors feedback and suggestions.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border-8 border-plum-50 shadow-lg">
            <iframe
              title={`Map of ${site.centre.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.centre.mapQuery)}&output=embed`}
              className="h-full min-h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      {/* Polar bear */}
      <section id="polar-bear" className="scroll-mt-24 py-24">
        <Container className="grid items-center gap-12 md:grid-cols-[auto_1fr]">
          <div className="relative mx-auto">
            <div className="absolute inset-0 scale-110 rounded-full bg-sun-200" aria-hidden="true" />
            <div className="dots absolute -right-10 -bottom-6 h-24 w-28 text-plum-300" aria-hidden="true" />
            <Image src={polarBear} alt="The polar bear logo, wearing a plum scarf and holding the foundation symbol" className="float-slow relative w-56 sm:w-64" />
          </div>
          <div>
            <Eyebrow>Our logo</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
              Why a <Accent color="olive">polar bear?</Accent>
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-ink/70">
              <p>
                In the United States, where Scottish Rite Masonic bodies have run Learning Centres for years, the symbol
                is a teddy bear.
              </p>
              <p>
                Canada is home of the north, so a polar bear was chosen when the first Canadian Learning Centre opened
                in London, Ontario. Between its paws it holds the symbol of the Scottish Rite Charitable Foundation of
                Canada, which started and supports Learning Centres across the country.
              </p>
            </div>
            <Button href="/dyslexia" className="mt-8">
              How we treat dyslexia
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
