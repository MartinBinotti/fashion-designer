export default function ContactPage() {
  return (
    <div className="pt-24">
      <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--as-text-soft)]">
              Contact
            </p>
            <h1 className="mt-2 font-['Cormorant_Garamond'] text-5xl leading-[0.95] text-[var(--as-text)] sm:text-6xl">
              Trabajemos Juntos
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--as-text-muted)]">
            Escribime para colaboraciones, desarrollo de colecciones, styling,
            direccion creativa y producciones editoriales.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="space-y-4 rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-6 backdrop-blur-md"
          >
            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
                Name
              </span>
              <input
                type="text"
                className="w-full rounded-xl border border-[color:var(--as-border)] bg-[var(--as-input-bg)] px-3 py-2 text-sm text-[var(--as-text)] placeholder:text-[var(--as-text-soft)] focus:border-[color:var(--as-border-strong)] focus:outline-none"
                placeholder="Your name"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
                Email
              </span>
              <input
                type="email"
                className="w-full rounded-xl border border-[color:var(--as-border)] bg-[var(--as-input-bg)] px-3 py-2 text-sm text-[var(--as-text)] placeholder:text-[var(--as-text-soft)] focus:border-[color:var(--as-border-strong)] focus:outline-none"
                placeholder="tu@email.com"
                required
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
                Message
              </span>
              <textarea
                rows={6}
                className="w-full resize-y rounded-xl border border-[color:var(--as-border)] bg-[var(--as-input-bg)] px-3 py-2 text-sm text-[var(--as-text)] placeholder:text-[var(--as-text-soft)] focus:border-[color:var(--as-border-strong)] focus:outline-none"
                placeholder="Contame tu proyecto y objetivos..."
                required
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full border border-[color:var(--as-border-strong)] bg-[var(--as-inverse-bg)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[var(--as-inverse-text)] transition hover:bg-transparent hover:text-[var(--as-text)]"
            >
              Enviar Mensaje
            </button>
          </form>

          <aside className="space-y-4">
            <article className="rounded-[1.25rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
                Email
              </p>
              <p className="mt-2 text-sm text-[var(--as-text-muted)]">
                sebas@fashionportfolio.com
              </p>
            </article>

            <article className="rounded-[1.25rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
                Instagram
              </p>
              <p className="mt-2 text-sm text-[var(--as-text-muted)]">
                @sebas.design
              </p>
            </article>

            <article className="rounded-[1.25rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
                Ubicacion
              </p>
              <p className="mt-2 text-sm text-[var(--as-text-muted)]">
                Madrid, Espana
              </p>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}
