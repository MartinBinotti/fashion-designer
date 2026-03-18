import { useEffect, useState } from "react";

export default function ImageGalleryGrid({
  images = [],
  title = "Galeria",
  kicker = "",
  itemLabel = "",
  wrapperClassName = "",
  gridClassName = "",
  itemClassName = "",
  imageClassName = "",
  emptyClassName = ""
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const hasImages = images.length > 0;
  const activeImage = activeIndex !== null ? images[activeIndex] : null;
  const labelBase = itemLabel || title;

  const goNext = () => {
    if (!hasImages) {
      return;
    }
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  };

  const goPrev = () => {
    if (!hasImages) {
      return;
    }
    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }
      return (current - 1 + images.length) % images.length;
    });
  };

  useEffect(() => {
    if (activeIndex !== null && activeIndex >= images.length) {
      setActiveIndex(images.length ? 0 : null);
    }
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        goNext();
      }
      if (event.key === "ArrowLeft") {
        goPrev();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, hasImages]);

  return (
    <>
      <div className={wrapperClassName}>
        {hasImages ? (
          <div className={`grid gap-3 ${gridClassName || "grid-cols-2 sm:grid-cols-3"}`}>
            {images.map((imageSrc, index) => (
              <button
                key={imageSrc}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group overflow-hidden rounded-2xl border border-[color:var(--as-border)] bg-[var(--as-panel)] text-left ${itemClassName}`}
              >
                <img
                  src={imageSrc}
                  alt={`${labelBase} ${index + 1}`}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${imageClassName}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        ) : (
          <div
            className={
              emptyClassName ||
              "h-48 rounded-2xl border border-[color:var(--as-border)] bg-gradient-to-br from-[#4d535f] to-[#22262e]"
            }
          />
        )}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <article
            className="w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/20 bg-[var(--as-glass-soft)]"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="flex items-center justify-between border-b border-[color:var(--as-border)] px-4 py-3 sm:px-6">
              <div>
                {kicker ? (
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                    {kicker}
                  </p>
                ) : null}
                <h3 className="font-['Cormorant_Garamond'] text-3xl leading-[0.95] text-[var(--as-text)] sm:text-4xl">
                  {title}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
                  {activeIndex + 1} / {images.length}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="rounded-full border border-[color:var(--as-border-strong)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text)]"
                >
                  Cerrar
                </button>
              </div>
            </header>

            <div className="relative max-h-[80vh] bg-black/20 p-3 sm:p-4">
              <img
                src={activeImage}
                alt={`${labelBase} ${activeIndex + 1}`}
                className="max-h-[70vh] w-full object-contain"
              />
              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur"
                  >
                    →
                  </button>
                </>
              ) : null}
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
