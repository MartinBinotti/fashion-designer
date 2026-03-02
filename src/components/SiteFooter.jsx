import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Inicio", to: "/" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Imagenes", to: "/imagenes" },
  { label: "Metodo Creativo", to: "/metodo-creativo" },
  { label: "Contacto", to: "/contact" }
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--as-border)] bg-[var(--as-glass-soft)]">
      <div className="w-full px-4 py-12 sm:px-6 lg:px-10 xl:px-14">
        <div className="grid gap-10 border-b border-[color:var(--as-border)] pb-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-2xl">
            <p className="font-['Cormorant_Garamond'] text-4xl tracking-[0.08em] text-[var(--as-text)] sm:text-5xl">
              Sebastian Elbers
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--as-text-muted)]">
              Portfolio de diseno de moda enfocado en editorial, streetwear y
              construccion de identidad visual para marcas emergentes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
            <nav className="w-full sm:max-w-[220px] lg:text-right">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--as-text-soft)]">
                Navegacion
              </p>
              <ul className="mt-4 space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm uppercase tracking-[0.12em] text-[var(--as-text-muted)] transition hover:text-[var(--as-text)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-full sm:max-w-[280px] lg:text-right">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--as-text-soft)]">
                Disponible Para
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--as-text-muted)]">
                Colaboraciones, direccion creativa, styling y desarrollo de capsulas.
              </p>
              <div className="mt-4 flex items-center gap-2 lg:justify-end">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--as-border)] text-[var(--as-text-soft)] transition hover:text-[var(--as-text)]"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5Zm-1.69-1.54A1.96 1.96 0 1 0 5.22 3a1.96 1.96 0 0 0 .03 3.92ZM20.44 20h-3.37v-5.6c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94V20H9.7V8.5h3.24v1.57h.05a3.55 3.55 0 0 1 3.2-1.76c3.42 0 4.05 2.25 4.05 5.18V20Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--as-border)] text-[var(--as-text-soft)] transition hover:text-[var(--as-text)]"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
                  </svg>
                </a>
              </div>
              <Link
                to="/contact"
                className="mt-4 inline-block rounded-full border border-[color:var(--as-border-strong)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text)] transition hover:bg-[var(--as-inverse-bg)] hover:text-[var(--as-inverse-text)]"
              >
                Enviar Mensaje
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-4 text-xs uppercase tracking-[0.16em] text-[var(--as-text-soft)]">
          Copyright 2026 Martín Augusto Binotti.
        </div>
      </div>
    </footer>
  );
}
