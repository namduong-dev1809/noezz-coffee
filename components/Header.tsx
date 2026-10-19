import type { Dictionary } from "@/app/[lang]/dictionaries";
import LangSwitch from "./LangSwitch";

export const PHONE_HREF = "tel:+840000000000"; // demo placeholder, not a real line

export default function Header({ dict }: { dict: Dictionary }) {
  const links = [
    { href: "#menu", label: dict.nav.menu },
    { href: "#story", label: dict.nav.story },
    { href: "#space", label: dict.nav.space },
    { href: "#visit", label: dict.nav.visit },
  ];

  return (
    <>
      <p className="bg-caramel-dark px-4 py-2 text-center text-xs tracking-wide text-white">
        {dict.topbar} <span className="opacity-80">· {dict.demo}</span>
      </p>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-night/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
          <a href="#top" className="font-display text-xl tracking-[0.2em] text-white">
            NOEZZ<span className="text-caramel"> COFFEE</span>
          </a>
          <nav aria-label="Main" className="hidden gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-xs uppercase tracking-widest text-muted hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <LangSwitch label={dict.nav.switchTo} />
            <a href={PHONE_HREF} className="hidden bg-caramel px-4 py-2 text-xs font-medium uppercase tracking-widest text-ink hover:bg-cream sm:inline-block">
              {dict.nav.call}
            </a>
          </div>
        </div>
        <nav aria-label="Main mobile" className="flex gap-5 overflow-x-auto px-4 pb-3 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="shrink-0 text-xs uppercase tracking-widest text-muted">
              {l.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
