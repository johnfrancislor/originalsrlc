import { Accent, Button, Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: "Contact the Scottish Rite Charitable Foundation Learning Centre for Children in Moncton, New Brunswick.",
};

const reasons = [
  { label: "Enrolling my child", subject: "Enrollment enquiry" },
  { label: "Getting my child tested", subject: "Dyslexia testing" },
  { label: "Volunteering", subject: "Volunteering" },
  { label: "Making a donation", subject: "Making a donation" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            We’d love to <Accent>hear</Accent> from you
          </>
        }
        intro="Whether you’re a parent with questions, a future volunteer or a donor, get in touch and we’ll get back to you."
      />

      <section className="pb-24">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Card title="Email" tone="bg-plum-600 text-white" icon={<path d="M3 6h18v12H3zM3 7l9 6 9-6" />}>
            <a href={`mailto:${site.email}`} className="text-lg font-bold break-all text-sun-400 hover:underline">
              {site.email}
            </a>
            <p className="mt-2 text-sm text-plum-100">The quickest way to reach us.</p>
          </Card>

          <Card title="Contact address" tone="bg-white" icon={<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />}>
            <address className="not-italic leading-relaxed text-ink/75">
              {site.org}
              <br />
              Learning Centre for Children
              {site.contactAddress.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </Card>

          <Card title="Tutoring centre" tone="bg-sun-200" icon={<path d="M4 20V9l8-5 8 5v11M9 20v-6h6v6" />}>
            <p className="leading-relaxed text-ink/75">
              {site.centre.name}
              {site.centre.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.centre.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-bold text-plum-700 hover:underline"
            >
              Get directions →
            </a>
          </Card>
        </Container>

        <Container className="mt-16">
          <div className="rounded-[2.5rem] bg-plum-50 p-8 sm:p-12">
            <h2 className="font-display text-3xl font-semibold">What can we help you with?</h2>
            <p className="mt-2 text-ink/65">Choose a topic and we’ll open an email for you with the subject filled in.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {reasons.map((r) => (
                <Button key={r.label} href={`mailto:${site.email}?subject=${encodeURIComponent(r.subject)}`} variant="white">
                  {r.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Card({ title, tone, icon, children }) {
  return (
    <div className={`rounded-[2rem] p-8 shadow-sm ring-1 ring-plum-100 ${tone}`}>
      <span className="grid size-12 place-items-center rounded-2xl bg-plum-100 text-plum-700">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icon}
        </svg>
      </span>
      <h2 className="mt-6 font-display text-xl font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
