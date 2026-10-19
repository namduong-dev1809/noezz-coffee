// The whole menu lives here: the shop owner only edits this list to change items or prices.
export type Category = "coffee" | "tea" | "blended" | "bakery";
export type Locale = "en" | "vi";

export type MenuItem = {
  id: string;
  category: Category;
  price: number; // VND
  tag?: "best" | "new";
  name: Record<Locale, string>;
  desc: Record<Locale, string>;
};

export const menu: MenuItem[] = [
  { id: "phin-den", category: "coffee", price: 29000,
    name: { vi: "Cà phê phin đen", en: "Black phin coffee" },
    desc: { vi: "Robusta Đắk Lắk rang mộc, pha phin chậm.", en: "Dak Lak robusta, slow-dripped through a phin filter." } },
  { id: "sua-da", category: "coffee", price: 32000, tag: "best",
    name: { vi: "Cà phê sữa đá", en: "Iced milk coffee" },
    desc: { vi: "Phin đậm với sữa đặc, đá viên.", en: "Strong phin coffee with condensed milk over ice." } },
  { id: "bac-xiu", category: "coffee", price: 35000,
    name: { vi: "Bạc xỉu", en: "Bac xiu" },
    desc: { vi: "Nhiều sữa, ít cà phê, ngọt dịu.", en: "Mostly milk, a little coffee, gently sweet." } },
  { id: "muoi", category: "coffee", price: 39000, tag: "best",
    name: { vi: "Cà phê muối", en: "Salted cream coffee" },
    desc: { vi: "Lớp kem muối béo mặn phủ trên cà phê sữa.", en: "Milk coffee topped with a salty, silky cream." } },
  { id: "trung", category: "coffee", price: 45000,
    name: { vi: "Cà phê trứng", en: "Egg coffee" },
    desc: { vi: "Kem trứng đánh bông kiểu Hà Nội, uống nóng.", en: "Hanoi-style whipped egg cream over hot coffee." } },
  { id: "cold-brew", category: "coffee", price: 45000, tag: "new",
    name: { vi: "Cold brew cam", en: "Orange cold brew" },
    desc: { vi: "Ủ lạnh 18 giờ, thêm lát cam tươi.", en: "Steeped for 18 hours, served with fresh orange." } },

  { id: "dao-cam-sa", category: "tea", price: 45000, tag: "best",
    name: { vi: "Trà đào cam sả", en: "Peach, orange & lemongrass tea" },
    desc: { vi: "Trà đen, đào miếng, cam và sả tươi.", en: "Black tea with peach slices, orange and lemongrass." } },
  { id: "vai", category: "tea", price: 42000,
    name: { vi: "Trà vải", en: "Lychee tea" },
    desc: { vi: "Trà lài và vải thiều ngâm.", en: "Jasmine tea with sweet lychees." } },
  { id: "sen", category: "tea", price: 39000,
    name: { vi: "Trà sen", en: "Lotus tea" },
    desc: { vi: "Trà ướp hương sen, uống nóng hoặc đá.", en: "Lotus-scented green tea, hot or iced." } },
  { id: "matcha", category: "tea", price: 49000, tag: "new",
    name: { vi: "Matcha latte", en: "Matcha latte" },
    desc: { vi: "Matcha Nhật với sữa tươi.", en: "Japanese matcha with fresh milk." } },

  { id: "cot-dua", category: "blended", price: 52000, tag: "best",
    name: { vi: "Cà phê cốt dừa", en: "Coconut coffee" },
    desc: { vi: "Cốt dừa xay đá, rưới cà phê phin.", en: "Blended coconut cream with phin coffee poured on top." } },
  { id: "frappe", category: "blended", price: 55000,
    name: { vi: "Cà phê đá xay", en: "Coffee frappé" },
    desc: { vi: "Cà phê, sữa và kem tươi xay đá.", en: "Coffee, milk and whipped cream, blended with ice." } },
  { id: "matcha-xay", category: "blended", price: 55000,
    name: { vi: "Matcha đá xay", en: "Matcha frappé" },
    desc: { vi: "Matcha xay với sữa và thạch.", en: "Matcha blended with milk and jelly." } },

  { id: "croissant", category: "bakery", price: 35000,
    name: { vi: "Croissant bơ", en: "Butter croissant" },
    desc: { vi: "Nướng mỗi sáng tại quán.", en: "Baked in-house every morning." } },
  { id: "banana", category: "bakery", price: 39000,
    name: { vi: "Bánh chuối nướng", en: "Banana bread" },
    desc: { vi: "Chuối chín, óc chó, ăn kèm bơ.", en: "Ripe banana and walnuts, served with butter." } },
  { id: "cheesecake", category: "bakery", price: 49000, tag: "new",
    name: { vi: "Cheesecake cà phê", en: "Coffee cheesecake" },
    desc: { vi: "Phô mai mịn, đế bánh quy cà phê.", en: "Smooth cheesecake on a coffee biscuit base." } },
  { id: "banh-mi", category: "bakery", price: 30000,
    name: { vi: "Bánh mì trứng ốp", en: "Fried egg bánh mì" },
    desc: { vi: "Bánh mì giòn, trứng ốp la, pate.", en: "Crispy baguette with fried egg and pâté." } },
];

export const categories: Category[] = ["coffee", "tea", "blended", "bakery"];

// shortcut: fixed rate for the € hint on the English menu, update it when prices change
const VND_PER_EUR = 30000;

export function formatPrice(vnd: number, locale: Locale): string {
  if (locale === "vi") return `${vnd.toLocaleString("de-DE")}đ`; // 29.000đ
  return `${vnd.toLocaleString("en-US")}₫ · ~€${(vnd / VND_PER_EUR).toFixed(1)}`;
}

export function itemsFor(category: Category | "all"): MenuItem[] {
  return category === "all" ? menu : menu.filter((m) => m.category === category);
}
