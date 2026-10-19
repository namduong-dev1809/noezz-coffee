import Image from "next/image";
import { getDictionary, getLocale } from "./dictionaries";
import { photos } from "@/lib/photos";
import Header, { PHONE_HREF } from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Menu from "@/components/Menu";
import SectionTitle from "@/components/SectionTitle";

const DIRECTIONS = "https://www.google.com/maps/search/?api=1&query=An+Thuong,+Ngu+Hanh+Son,+Da+Nang";
const HOMESTAY = "https://noezz-homestay.vercel.app";

export default async function Home() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <>
      <Header dict={dict} />
      <main>
        <HeroSlider
          slides={dict.slides}
          images={photos.slides}
          label={dict.slideLabel}
          ctaMenu={dict.ctaMenu}
          ctaDirections={dict.ctaDirections}
          directionsHref={DIRECTIONS}
        />

        <section id="story" className="bg-cream text-ink">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
            <div className="reveal relative aspect-[4/5] overflow-hidden">
              <Image src={photos.story} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="reveal">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel-dark">{dict.story.kicker}</p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{dict.story.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/80">{dict.story.text}</p>
              <ul className="mt-6 grid gap-2">
                {dict.story.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-6 bg-caramel-dark" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={`${HOMESTAY}/${locale}`} className="mt-8 inline-block border-b border-caramel-dark pb-1 text-sm font-medium uppercase tracking-widest text-caramel-dark hover:text-ink">
                {dict.story.sister}
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
          <SectionTitle kicker={dict.menu.kicker} title={dict.menu.title} center />
          <div className="reveal mt-12">
            <Menu dict={dict} locale={locale} />
          </div>
        </section>

        <section id="space" className="bg-panel py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle kicker={dict.space.kicker} title={dict.space.title} />
            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
              {photos.space.map((src, i) => (
                <div key={src} className={`reveal relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"} ${i === 3 ? "col-span-2 aspect-[2/1] md:aspect-auto" : ""}`}>
                  <Image src={src} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
          <div>
            <SectionTitle kicker={dict.visit.kicker} title={dict.visit.title} />
            <dl className="reveal mt-10 grid gap-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">{dict.visit.addressLabel}</dt>
                <dd className="mt-1 text-lg">{dict.visit.address}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">{dict.visit.hoursLabel}</dt>
                {dict.visit.hours.map((h) => (
                  <dd key={h.days} className="mt-1 flex max-w-sm justify-between text-lg">
                    <span>{h.days}</span>
                    <span className="text-caramel">{h.time}</span>
                  </dd>
                ))}
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">{dict.visit.phoneLabel}</dt>
                <dd className="mt-1 text-lg">{dict.visit.phone}</dd>
              </div>
            </dl>
            <div className="reveal mt-10 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="bg-caramel px-6 py-3 text-sm font-medium uppercase tracking-widest text-ink hover:bg-cream">
                {dict.nav.call}
              </a>
              <a href={DIRECTIONS} target="_blank" rel="noopener" className="border border-white/40 px-6 py-3 text-sm font-medium uppercase tracking-widest hover:border-caramel hover:text-caramel">
                {dict.ctaDirections}
              </a>
            </div>
          </div>
          <iframe
            title="Map: An Thuong, Da Nang"
            src="https://www.google.com/maps?q=An+Thuong,+Ngu+Hanh+Son,+Da+Nang&output=embed"
            className="reveal aspect-square w-full border-0 grayscale-[60%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-display text-lg tracking-[0.2em] text-white">NOEZZ COFFEE</p>
            <p>{dict.footer.tagline}</p>
          </div>
          <p>
            {dict.footer.madeBy}{" "}
            <a href="https://duongthanhnam.vercel.app" className="underline hover:text-white">
              Duong Thanh Nam
            </a>{" "}
            · Photos: Unsplash
          </p>
        </div>
      </footer>
    </>
  );
}
