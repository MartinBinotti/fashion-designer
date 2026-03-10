import { useEffect, useState } from "react";
import modaVideo2 from "../assets/video/moda-video2.mp4";
import modaVideo3 from "../assets/video/moda.video3.mp4";
import modaVideo4 from "../assets/video/moda-video4.mp4?url";

const LAB_PROJECT_ID = "laboratorio-de-siluetas";

const projectNotes = [
  {
    id: "vestido-de-novias",
    title: "Vestido de novias",
    status: "Proceso activo",
    summary:
      "Diseno y confeccion de una nueva pieza para la coleccion de vestidos de novia del Bridal de Barcelona."
  },
  {
    id: "editorial-privada",
    title: "Editorial privada",
    status: "Pre-produccion",
    summary:
      "Planificacion de concepto visual, casting y estilismo para una nueva entrega."
  },
  {
    id: LAB_PROJECT_ID,
    title: "Laboratorio de siluetas",
    status: "Se vienen cositas",
    summary: "Pruebas de patronaje y volumen para una linea experimental en construccion."
  }
];

const labVideos = [
  {
    id: "video-02",
    title: "Registro 01",
    summary: "Exploracion de volumen y caida de tela en pruebas de silueta.",
    src: modaVideo2
  },
  {
    id: "video-03",
    title: "Registro 02",
    summary: "Ajustes de estructura y movimiento sobre nuevas proporciones.",
    src: modaVideo3
  },
  {
    id: "video-04",
    title: "Registro 03",
    summary: "Variaciones de patronaje y ritmo visual en la linea experimental.",
    src: modaVideo4
  }
];

const finishedProjects = [
  {
    id: "business-case",
    title: "Business Case Completo",
    status: "Finalizado",
    summary:
      "Documento final con desarrollo conceptual, estructura de propuesta y resultado consolidado.",
    pdfUrl: "/docs/busines-case-completo.pdf"
  },
  {
    id: "essex",
    title: "ESSEX",
    status: "Finalizado",
    summary:
      "Trabajo cerrado con narrativa visual, investigacion aplicada y presentacion final.",
    pdfUrl: "/docs/ESSEX-Ecompressed.pdf"
  }
];

export default function ProjectsPage() {
  const [isLabOpen, setIsLabOpen] = useState(false);
  const [activePdf, setActivePdf] = useState(null);

  const toggleLabVideos = () => {
    setIsLabOpen((currentState) => !currentState);
  };

  const handleLabCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleLabVideos();
    }
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActivePdf(null);
      }
    };

    if (!activePdf) {
      return undefined;
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePdf]);

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
          Espacio para mostrar en que se esta trabajando ahora mismo y los avances de
          cada etapa.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projectNotes.map((project) => {
          const isLabProject = project.id === LAB_PROJECT_ID;

          return (
            <article
              key={project.id}
              className={`rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-6 ${
                isLabProject
                  ? "cursor-pointer transition hover:border-[color:var(--as-border-strong)]"
                  : ""
              }`}
              onClick={isLabProject ? toggleLabVideos : undefined}
              onKeyDown={isLabProject ? handleLabCardKeyDown : undefined}
              role={isLabProject ? "button" : undefined}
              tabIndex={isLabProject ? 0 : undefined}
              aria-expanded={isLabProject ? isLabOpen : undefined}
              aria-controls={isLabProject ? "lab-videos-panel" : undefined}
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
              {isLabProject ? (
                <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                  {isLabOpen ? "Ocultar videos" : "Click para ver videos"}
                </p>
              ) : null}
            </article>
          );
        })}
      </section>

      {isLabOpen ? (
        <section
          id="lab-videos-panel"
          className="mt-6 rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-5 sm:p-6"
        >
          <header className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
              Laboratorio de siluetas
            </p>
            <h2 className="mt-2 font-['Cormorant_Garamond'] text-4xl leading-[0.95] text-[var(--as-text)] sm:text-5xl">
              Registro en video
            </h2>
          </header>

          <div className="grid gap-4 lg:grid-cols-2">
            {labVideos.map((video) => (
              <article
                key={video.id}
                className="rounded-[1.25rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-4"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                  {video.title}
                </p>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="mt-3 w-full rounded-[1rem] bg-black"
                >
                  <source src={video.src} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
                <p className="mt-3 text-xs leading-relaxed text-[var(--as-text-muted)]">
                  {video.summary}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-14">
        <div className="border-t border-[color:var(--as-border)]" />

        <header className="mb-8 mt-8">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
            Proyectos
          </p>
          <h2 className="mt-2 font-['Cormorant_Garamond'] text-5xl leading-[0.95] text-[var(--as-text)] sm:text-6xl">
            Finalizados
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {finishedProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                {project.status}
              </p>
              <h3 className="mt-3 font-['Cormorant_Garamond'] text-4xl leading-[0.95] text-[var(--as-text)]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--as-text-muted)]">
                {project.summary}
              </p>
              <button
                type="button"
                onClick={() => setActivePdf(project)}
                className="mt-6 rounded-full border border-[color:var(--as-border-strong)] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text)] transition hover:bg-[var(--as-inverse-bg)] hover:text-[var(--as-inverse-text)]"
              >
                Ver PDF
              </button>
            </article>
          ))}
        </div>
      </section>

      {activePdf ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActivePdf(null)}
        >
          <article
            className="w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)]"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between border-b border-[color:var(--as-border)] px-4 py-3 sm:px-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                  Finalizados
                </p>
                <h3 className="font-['Cormorant_Garamond'] text-3xl leading-[0.95] text-[var(--as-text)] sm:text-4xl">
                  {activePdf.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePdf(null)}
                className="rounded-full border border-[color:var(--as-border-strong)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text)]"
              >
                Cerrar
              </button>
            </header>

            <div className="h-[80vh] bg-[var(--as-panel)]">
              <iframe
                src={activePdf.pdfUrl}
                title={activePdf.title}
                className="h-full w-full"
              />
            </div>
          </article>
        </div>
      ) : null}
    </main>
  );
}
