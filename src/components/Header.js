"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { ArrowIcon } from "./ui";
import { nav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  // Remember which page the mobile menu was opened on, so it closes by itself
  // after navigating.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const setOpen = (fn) => setOpenOn(fn(open) ? pathname : null);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-plum-100/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-plum-100 bg-white p-1.5 shadow-sm">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    isActive(item.href)
                      ? "bg-plum-600 text-white"
                      : "text-ink/70 hover:bg-plum-50 hover:text-plum-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full border-2 border-plum-600 py-1.5 pr-1.5 pl-5 text-sm font-bold text-plum-700 transition hover:bg-plum-600 hover:text-white lg:inline-flex"
        >
          Contact us
          <span className="grid size-8 place-items-center rounded-full bg-plum-600 text-white">
            <ArrowIcon />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="grid size-11 place-items-center rounded-2xl bg-plum-50 text-plum-700 lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-plum-100 bg-cream px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3 font-display text-lg ${
                    isActive(item.href) ? "bg-plum-600 text-white" : "text-ink hover:bg-plum-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
