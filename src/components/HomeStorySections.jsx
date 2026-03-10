import { Link } from "react-router-dom";
import moda7Small from "../assets/img/moda7-s.webp";
import moda6Small from "../assets/img/moda6-s.webp";

const storyBlocks = [
  {
    id: "identity",
    title: "Metodo Creativo",
    copy: "Cada proyecto parte de investigacion visual, pruebas de silueta y seleccion de materiales para lograr una identidad coherente.",
    visualLabel: "Moodboard 01",
    image: moda7Small,
    ctaLabel: "Ver Briefs",
    ctaTo: "/metodo-creativo",
    gradient: "from-[#f0e8dc] via-[#deccb9] to-[#b89f8a]",
    reverse: false
  },
  {
    id: "direction",
    title: "Editoriales",
    copy: "Desarrollo y ejecucion de trabajos editoriales: concepto visual, seleccion de looks, direccion de estilismo y narrativa fotografica para revistas y plataformas digitales.",
    visualLabel: "Moodboard 02",
    image: moda6Small,
    ctaLabel: "Ver Imagenes",
    ctaTo: "/imagenes",
    gradient: "from-[#42454f] via-[#2a2d35] to-[#16181d]",
    reverse: true
  }
];

export default function HomeStorySections() {
  return (
    <section className="w-full border-y border-[color:var(--as-border)] bg-[var(--as-glass-soft)]">
      {storyBlocks.map((block, index) => (
        <article
          key={block.id}
          className={`group/story grid gap-5 rounded-[2rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-5 lg:grid-cols-2 lg:items-stretch ${index > 0 ? "mt-5" : ""}`}
        >
          <div className={`${block.reverse ? "order-2 lg:order-2" : "order-1 lg:order-1"}`}>
            <div className="flex h-full min-h-[12rem] items-end overflow-hidden rounded-[1.5rem]">
              {block.image ? (
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={block.image}
                    alt={block.visualLabel}
                    className="h-full min-h-[12rem] w-full bg-black/5 object-contain transition duration-700 ease-out group-hover/story:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                    {block.visualLabel}
                  </div>
                </div>
              ) : (
                <div
                  className={`relative h-full w-full bg-gradient-to-br transition duration-700 ease-out group-hover/story:scale-105 ${block.gradient}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(255,255,255,0.25),transparent_30%)]" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/50 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                    {block.visualLabel}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={`flex items-center ${block.reverse ? "order-1 lg:order-1" : "order-2 lg:order-2"}`}
          >
            <div className="w-full px-2 py-4 sm:px-4 lg:px-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                Sebastian Elbers
              </p>
              <h2 className="mt-2 font-['Cormorant_Garamond'] text-4xl leading-[0.9] text-[var(--as-text)] sm:text-5xl">
                {block.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--as-text-muted)]">
                {block.copy}
              </p>
              <div className="mt-5">
                <Link
                  to={block.ctaTo}
                  className="inline-block rounded-full border border-[color:var(--as-border-strong)] px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-[var(--as-text)] transition hover:bg-[var(--as-inverse-bg)] hover:text-[var(--as-inverse-text)]"
                >
                  {block.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
