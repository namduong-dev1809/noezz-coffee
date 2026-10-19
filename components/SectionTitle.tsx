export default function SectionTitle({ kicker, title, center = false }: { kicker: string; title: string; center?: boolean }) {
  return (
    <div className={`reveal ${center ? "text-center" : ""}`}>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
    </div>
  );
}
