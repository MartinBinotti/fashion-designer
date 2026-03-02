const projectNotes = [
  {
    title: "Vestido de novias",
    status: "Proceso activo",
    summary:
      "Diseño y confección de una nueva pieza para la colección de vestidos de novia del Briadal de Barcelona."
  },
  {
    title: "Editorial privada",
    status: "Pre-produccion",
    summary:
      "Planificación de concepto visual, casting y estilismo para una nueva entrega."
  },
  {
    title: "Laboratorio de siluetas",
    status: "Se vienen cositas",
    summary:
      "Pruebas de patronaje y volumen para una línea experimental en construcción."
  }
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
          Proyectos
        </p>
        <h1 className="mt-3 font-['Cormorant_Garamond'] text-5xl leading-[0.95] text-[var(--as-text)] sm:text-6xl">
          Proximamente
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--as-text-muted)]">
          Espacio para mostrar en qué se está trabajando ahora mismo y los avances
          de cada etapa.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projectNotes.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-6"
          >
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
              {project.status}
            </p>
            <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl leading-[0.95] text-[var(--as-text)]">
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--as-text-muted)]">
              {project.summary}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
