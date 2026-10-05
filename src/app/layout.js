import { Caveat, Fredoka, Nunito } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisitNotifier from "@/components/VisitNotifier";
import { site } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

export const metadata = {
  title: {
    default: `${site.shortName} | Free dyslexia tutoring for children`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Free, one-to-one Orton-Gillingham tutoring for children with dyslexia in Moncton and Riverview, New Brunswick. A Scottish Rite Charitable Foundation of Canada Learning Centre.",
  keywords: [
    "dyslexia",
    "tutoring",
    "children",
    "Orton-Gillingham",
    "Moncton",
    "Riverview",
    "New Brunswick",
    "Scottish Rite",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fredoka.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VisitNotifier />
      </body>
    </html>
  );
}
