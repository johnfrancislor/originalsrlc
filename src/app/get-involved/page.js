import Image from "next/image";
import { Accent, Button, Container, Eyebrow, PageHero } from "@/components/ui";
import { site } from "@/lib/site";
import smilePhoto from "../../../public/images/photo-smile.png";

export const metadata = {
  title: "Get Involved",
  description:
    "Volunteer as a tutor or in the office, or donate to the Learning Centre for Children in Moncton. Tutor training is free, and donations get a tax receipt.",
};

const roles = [
  { title: "Administrative", text: "Help keep the Centre organized and running smoothly." },
  { title: "Front office", text: "Be a friendly first face for children and their families." },
  { title: "Special projects", text: "Lend your skills to events, outreach and other projects." },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="You can help"
        title={
          <>
            Everyone has a gift to give, and we need <Accent color="sun">yours</Accent>
          </>
        }
        intro="Volunteer staff and volunteer tutors run the Learning Centre and work with the children. All you need is a kind heart, time to commit and a wish to help a child."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#volunteer">Volunteer</Button>
          <Button href="#donate" variant="outline">
            Donate
          </Button>
        </div>
      </PageHero>

      {/* Tutors */}
      <section id="volunteer" className="scroll-mt-24 pb-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <div className="blob absolute -inset-3 -rotate-3 bg-sun-400" aria-hidden="true" />
            <Image src={smilePhoto} alt="A happy student" className="blob relative aspect-[4/3] w-full border-8 border-white object-cover shadow-xl" placeholder="blur" />
            <div className="float absolute -right-2 -bottom-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="font-display text-3xl font-semibold text-plum-600">45 hrs</p>
              <p className="text-sm text-ink/60">of free tutor training</p>
            </div>
          </div>
          <div>
            <Eyebrow>Become a tutor</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              Be the person who helps a child <Accent>read</Accent>
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
              <p>
                Imagine working one-to-one with a child who needs your help. You could be the special person who guides
                them through learning to read, from frustration to success.
              </p>
              <p>
                It takes a lot of your time, but the reward is a happy child’s smile and a thankful family.
              </p>
            </div>
            <div className="mt-8 rounded-3xl bg-plum-50 p-6">
              <h3 className="font-display text-xl font-semibold">Training, at no cost to you</h3>
              <p className="mt-2 leading-relaxed text-ink/70">
                Learning Centre tutors are trained in the Orton-Gillingham approach. Training is 45 hours of classroom
                teaching, plus observation and feedback over the next 12 months.
              </p>
            </div>
            <Button href={`mailto:${site.email}?subject=Volunteering%20as%20a%20tutor`} className="mt-8">
              I’d like to tutor
            </Button>
          </div>
        </Container>
      </section>

      {/* Other roles */}
      <section className="bg-white py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              Not a tutor? <Accent color="olive">No problem.</Accent>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              There are many other ways to get involved. Here are some of the positions we need to fill.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {roles.map((r, i) => (
              <article key={r.title} className={`rounded-[2rem] p-8 ${["bg-plum-100", "bg-sun-200", "bg-olive-100"][i]}`}>
                <span className="font-hand text-5xl font-bold text-plum-600">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/70">{r.text}</p>
              </article>
            ))}
          </div>
          <Button href={`mailto:${site.email}?subject=Volunteering`} variant="outline" className="mt-10">
            Contact us about volunteering
          </Button>
        </Container>
      </section>

      {/* Donate */}
      <section id="donate" className="scroll-mt-24 py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-plum-600 p-8 text-white sm:p-16">
            <div className="absolute -top-20 -right-16 size-64 rounded-full bg-sun-400" aria-hidden="true" />
            <div className="dots absolute bottom-10 left-1/2 h-20 w-32 text-plum-400" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <p className="font-hand text-3xl font-bold text-sun-400">Donations</p>
              <h2 className="mt-1 font-display text-4xl leading-tight font-semibold sm:text-5xl">
                Can’t give your time? Your gift still changes lives.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-plum-100">
                The {site.org} Learning Centres for Children are a non-profit and provide their services to children free
                of charge. We issue tax receipts for income tax purposes.
              </p>
              <p className="mt-4 text-plum-100">If you would like to make a donation, contact us for details.</p>
              <Button href={`mailto:${site.email}?subject=Making%20a%20donation`} variant="sun" className="mt-8">
                Ask about donating
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
