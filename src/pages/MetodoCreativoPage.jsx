import { Link } from "react-router-dom";
import { methodSections } from "../data/methodSections";

export default function MetodoCreativoPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
          Metodo Creativo
        </p>
        <h1 className="mt-3 font-['Cormorant_Garamond'] text-5xl leading-[0.95] text-[var(--as-text)] sm:text-6xl">
          Briefs y resumenes
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--as-text-muted)]">
          Cada área funciona como una sección independiente con material propio.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {methodSections.map((section) => (
          <article
            key={section.id}
            className="overflow-hidden rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)]"
          >
            <div className="h-52 overflow-hidden bg-[var(--as-panel)]">
              {section.image ? (
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover object-center"
                  style={{ objectPosition: section.imagePosition ?? "center" }}
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[#e7d8c5] to-[#a08067]" />
              )}
            </div>
            <div className="p-5">
              <h2 className="font-['Cormorant_Garamond'] text-4xl leading-[0.95] text-[var(--as-text)]">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--as-text-muted)]">
                {section.brief}
              </p>
              <Link
                to={`/metodo-creativo/${section.id}`}
                className="mt-5 inline-block rounded-full border border-[color:var(--as-border-strong)] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-[var(--as-text)] transition hover:bg-[var(--as-inverse-bg)] hover:text-[var(--as-inverse-text)]"
              >
                Ver Seccion
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
