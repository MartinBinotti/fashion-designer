import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
        Error 404
      </p>
      <h1 className="mt-4 font-['Cormorant_Garamond'] text-6xl text-[var(--as-text)]">
        Ruta no encontrada
      </h1>
      <p className="mt-4 max-w-lg text-sm text-[var(--as-text-muted)]">
        Esta ruta no existe en Sebastian Elbers. Volve al inicio para seguir
        explorando el trabajo.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full border border-[color:var(--as-border-strong)] px-6 py-3 text-xs uppercase tracking-[0.18em] text-[var(--as-text)] transition hover:bg-[var(--as-inverse-bg)] hover:text-[var(--as-inverse-text)]"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
