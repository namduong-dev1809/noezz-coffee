// Free photos from Unsplash (Unsplash License), loaded from their CDN.
const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`;

export const photos = {
  slides: [
    unsplash("1789993603890-da860709dc9d"), // phin dripping
    unsplash("1648387915505-de301c121a7a"), // rooftop terrace
    unsplash("1747459707229-7b1b7c8367e0"), // croissants
  ],
  story: unsplash("1619860703338-9c70a1af6a63"),
  space: [
    unsplash("1709548145082-04d0cde481d4"),
    unsplash("1751569543716-70c5fb9a8298"),
    unsplash("1461023058943-07fcbe16d735"),
    unsplash("1676300185983-d5f242babe34"),
  ],
};
