import Link from "next/link";
import Logo from "./Logo";
import { Container } from "./ui";
import { nav, site } from "@/lib/site";

const more = [
  { href: "/about#location", label: "Location" },
  { href: "/about#polar-bear", label: "The Polar Bear" },
  { href: "/dyslexia#approach", label: "The Approach" },
  { href: "/dyslexia#enrollment", label: "Enrollment" },
  { href: "/get-involved#volunteer", label: "Volunteer" },
  { href: "/get-involved#donate", label: "Donations" },
];

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-plum-100">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-plum-200">
            Free, one-to-one tutoring for children with dyslexia. A {site.org} Learning Centre.
          </p>
        </div>

        <FooterList title="Pages" items={nav} />
        <FooterList title="Learn more" items={more} />

        <div>
          <h2 className="font-display text-lg font-semibold text-white">Get in touch</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-plum-200">
            <p>
              <a href={`mailto:${site.email}`} className="font-semibold text-sun-400 hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              {site.contactAddress.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </address>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-plum-300 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.org} Learning Centre for Children, Moncton.
          </p>
          <p>A registered non-profit. Services are free of charge.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-plum-200 transition-colors hover:text-sun-400">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
