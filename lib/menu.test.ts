// Run with: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { categories, formatPrice, itemsFor, menu } from "./menu.ts";

test("prices are formatted per language", () => {
  assert.equal(formatPrice(29000, "vi"), "29.000đ");
  assert.equal(formatPrice(45000, "en"), "45,000₫ · ~€1.5");
});

test("tabs split the menu without losing items", () => {
  assert.equal(itemsFor("all").length, menu.length);
  const total = categories.reduce((n, c) => n + itemsFor(c).length, 0);
  assert.equal(total, menu.length);
  assert.ok(itemsFor("tea").every((m) => m.category === "tea"));
});

test("every item has both languages and a unique id", () => {
  assert.equal(new Set(menu.map((m) => m.id)).size, menu.length);
  for (const m of menu) assert.ok(m.name.vi && m.name.en && m.desc.vi && m.desc.en, m.id);
});
