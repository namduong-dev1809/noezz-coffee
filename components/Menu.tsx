"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";
import { categories, formatPrice, itemsFor, type Category } from "@/lib/menu";

export default function Menu({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.menu;
  const [active, setActive] = useState<Category | "all">("all");
  const tabs: { id: Category | "all"; label: string }[] = [
    { id: "all", label: t.all },
    ...categories.map((c) => ({ id: c, label: t.categories[c] })),
  ];

  return (
    <div>
      <div role="tablist" aria-label={t.title} className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-b border-white/10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-1 text-sm uppercase tracking-widest transition-colors ${
              active === tab.id ? "border-b-2 border-caramel text-white" : "text-muted hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <ul role="tabpanel" className="mt-10 grid gap-x-14 gap-y-8 md:grid-cols-2">
        {itemsFor(active).map((item) => (
          <li key={item.id} className="motion-safe:animate-[fadeUp_0.5s_ease-out_both]">
            <div className="flex items-baseline gap-3">
              <h3 className="min-w-0 font-display text-xl tracking-wide text-white">{item.name[locale]}</h3>
              {item.tag && (
                <span className="shrink-0 whitespace-nowrap bg-caramel/15 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-widest text-caramel">
                  {t.tags[item.tag]}
                </span>
              )}
              <span aria-hidden="true" className="flex-1 border-b border-dotted border-white/20" />
              <span className="shrink-0 font-display text-lg text-caramel">{formatPrice(item.price, locale)}</span>
            </div>
            <p className="mt-1 text-sm text-muted">{item.desc[locale]}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center text-xs text-muted">{t.note}</p>
    </div>
  );
}
