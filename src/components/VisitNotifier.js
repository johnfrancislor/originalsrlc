"use client";

import { useEffect } from "react";

// Emails the project manager when someone opens the deployed demo, so we know
// when a pitch has been viewed (the same category as web analytics / email
// open-tracking). Static-host friendly: it runs entirely in the browser, looks
// up IP + coarse location with GeoJS, and sends through Web3Forms. The alert
// goes to whoever owns the Web3Forms access key, so no email address lives in
// this code.
//
//   - Fires at most once per browser session, so extra page views don't spam.
//   - Never fires on localhost or in `next dev`.
//   - Does nothing if the access key is missing.
//   - Open any page with ?notrack once to mute your own browser; ?track undoes it.
//
// NOTE: this collects personal data (IP + location). Keep it to private
// one-to-one demos, or add a visible privacy notice before any public launch.

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const SITE_NAME = "Learning Centre Moncton (demo)";

// localStorage/sessionStorage can throw (private mode, blocked cookies), so
// every access goes through here.
function storage(type) {
  try {
    return window[type];
  } catch {
    return null;
  }
}

function describeDevice(ua) {
  const os = /iPhone/.test(ua)
    ? "iPhone (iOS)"
    : /iPad/.test(ua)
      ? "iPad (iPadOS)"
      : /Android/.test(ua)
        ? "Android"
        : /Windows/.test(ua)
          ? "Windows"
          : /Mac OS X|Macintosh/.test(ua)
            ? "Mac (macOS)"
            : /CrOS/.test(ua)
              ? "ChromeOS"
              : /Linux/.test(ua)
                ? "Linux"
                : "Unknown OS";
  const type = /iPad|Tablet/.test(ua) ? "Tablet" : /Mobi|iPhone|Android/.test(ua) ? "Mobile" : "Desktop";
  return `${type} · ${os} · screen ${window.screen.width}×${window.screen.height}`;
}

function describeBrowser(ua) {
  const rules = [
    ["Edge", /Edg\/([\d.]+)/],
    ["Opera", /OPR\/([\d.]+)/],
    ["Samsung Internet", /SamsungBrowser\/([\d.]+)/],
    ["Firefox", /(?:Firefox|FxiOS)\/([\d.]+)/],
    ["Chrome", /(?:Chrome|CriOS)\/([\d.]+)/],
    ["Safari", /Version\/([\d.]+).*Safari/],
  ];
  for (const [name, re] of rules) {
    const m = ua.match(re);
    if (m) return `${name} ${m[1].split(".")[0]}`;
  }
  return "Unknown browser";
}

async function lookupIp() {
  try {
    const res = await fetch("https://get.geojs.io/v1/ip/geo.json", { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    const g = await res.json();
    return {
      ip: g.ip || "Unavailable",
      location: [g.city, g.region, g.country].filter(Boolean).join(", ") || "Unavailable",
      isp: g.organization_name || "Unavailable",
      maps: g.latitude ? `https://maps.google.com/?q=${g.latitude},${g.longitude}` : "Unavailable",
    };
  } catch {
    // Usually an ad / privacy blocker. Still send the rest of the details.
    return { ip: "Unavailable", location: "Unavailable", isp: "Unavailable", maps: "Unavailable" };
  }
}

export default function VisitNotifier() {
  useEffect(() => {
    const local = storage("localStorage");
    const session = storage("sessionStorage");
    const params = new URLSearchParams(window.location.search);

    // Per-browser opt-out toggles.
    try {
      if (params.has("notrack")) local?.setItem("visit-notify-off", "1");
      if (params.has("track")) local?.removeItem("visit-notify-off");
    } catch {}

    if (!ACCESS_KEY || process.env.NODE_ENV !== "production") return;
    if (["localhost", "127.0.0.1", "0.0.0.0"].includes(window.location.hostname)) return;

    try {
      if (local?.getItem("visit-notify-off") || session?.getItem("visit-notified")) return;
      session?.setItem("visit-notified", "1");
    } catch {
      // No session storage means we can't dedupe; skip rather than risk spamming.
      return;
    }

    (async () => {
      const ua = navigator.userAgent;
      const geo = await lookupIp();
      const now = new Date();
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const subjectLoc = geo.location === "Unavailable" ? "location unavailable" : geo.location;

      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: ACCESS_KEY,
            subject: `New visitor on ${SITE_NAME}: ${subjectLoc}`,
            from_name: `${SITE_NAME} visit alert`,
            "IP Address": geo.ip,
            Location: geo.location,
            "Network / ISP": geo.isp,
            "Map (approx.)": geo.maps,
            Device: describeDevice(ua),
            Browser: describeBrowser(ua),
            "Date / Time (visitor local)": `${now.toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "long",
            })} (${tz})`,
            "Date / Time (UTC)": now.toUTCString(),
            "Landing page": window.location.href,
            "Came from": document.referrer || "Direct (typed link / bookmark / chat app)",
            "User agent": ua,
          }),
          keepalive: true,
        });
      } catch {
        // Network failure / blocker: fail silently, it's only a notification.
      }
    })();
  }, []);

  return null;
}
