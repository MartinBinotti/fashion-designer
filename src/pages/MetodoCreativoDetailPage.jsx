import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ImageGalleryGrid from "../components/ImageGalleryGrid";
import { methodSections } from "../data/methodSections";
import { collectionImages, processCreativeImages, sketchImages } from "../data/media";

export default function MetodoCreativoDetailPage() {
  const { sectionId } = useParams();
  const section = methodSections.find((item) => item.id === sectionId);
  const isProcessCreative = sectionId === "procesos-creativos";
  const isCollections = sectionId === "colecciones";
  const isSketching = sectionId === "bocetaje";
  const galleryImages = isProcessCreative
    ? processCreativeImages
    : isCollections
      ? collectionImages
      : isSketching
        ? sketchImages
        : [];
  if (!section) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-28 sm:px-6">
        <h1 className="font-['Cormorant_Garamond'] text-5xl text-[var(--as-text)]">
          Seccion no encontrada
        </h1>
        <Link
          to="/metodo-creativo"
          className="mt-6 inline-block rounded-full border border-[color:var(--as-border-strong)] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text)]"
        >
          Volver a Metodo Creativo
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <BackButton fallbackTo="/metodo-creativo" />
        <Link
          to="/metodo-creativo"
          className="text-[11px] uppercase tracking-[0.2em] text-[var(--as-text-soft)]"
        >
          Metodo Creativo
        </Link>
      </div>

      <h1 className="mt-4 font-['Cormorant_Garamond'] text-6xl leading-[0.92] text-[var(--as-text)]">
        {section.title}
      </h1>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--as-text-muted)]">
        {section.brief}
      </p>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <article className="overflow-hidden rounded-[1.8rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)]">
          {isProcessCreative || isCollections || isSketching ? (
            <ImageGalleryGrid
              images={galleryImages}
              title={section.title}
              kicker="Metodo creativo"
              itemLabel={section.title}
              wrapperClassName="p-4"
              gridClassName="grid-cols-2 sm:grid-cols-3"
              imageClassName="h-40 sm:h-44 lg:h-48"
              emptyClassName="h-80 bg-gradient-to-br from-[#4d535f] to-[#22262e]"
            />
          ) : (
            <div className="h-80 bg-[var(--as-panel)]">
              {section.image ? (
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover object-center"
                  style={{ objectPosition: section.imagePosition ?? "center" }}
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-[#4d535f] to-[#22262e]" />
              )}
            </div>
          )}
        </article>

        <article className="rounded-[1.8rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] p-6">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
            Resumen
          </p>
          <ul className="mt-4 space-y-3">
            {section.highlights.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-[var(--as-text-muted)]">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

    </main>
  );
}
