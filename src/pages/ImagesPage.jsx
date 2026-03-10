import { useEffect, useMemo, useState } from "react";
import PostCard from "../components/PostCard";
import { posts } from "../data/posts";

export default function ImagesPage() {
  const [activePost, setActivePost] = useState(null);
  const featuredPosts = useMemo(() => posts.slice(0, 3), []);
  const galleryPosts = useMemo(() => posts.slice(3), []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActivePost(null);
      }
    };

    if (!activePost) {
      return undefined;
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePost]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-2 font-['Cormorant_Garamond'] text-5xl leading-[0.95] text-[var(--as-text)] sm:text-6xl">
            ARTE
          </h1>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[var(--as-text-muted)]">
          Procesos creativos, colecciones y bocetaje como punto de partida del
          universo visual.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <section className="mt-14">
        <div className="border-t border-[color:var(--as-border)]" />

        <header className="mb-8 mt-8">
          <h2 className="font-['Cormorant_Garamond'] text-5xl leading-[0.95] text-[var(--as-text)] sm:text-6xl">
            IMAGENES
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--as-text-muted)]">
            Galeria general de diseno y creacion de vestidos.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryPosts.map((post) => (
            <button
              key={post.id}
              type="button"
              onClick={() => setActivePost(post)}
              className="group overflow-hidden rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)] text-left"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: post.imagePosition ?? "center" }}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                  {post.category}
                </p>
                <h3 className="mt-2 font-['Cormorant_Garamond'] text-3xl leading-[1] text-[var(--as-text)]">
                  {post.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {activePost ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActivePost(null)}
        >
          <div
            className="w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-white/20 bg-[var(--as-glass-soft)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[color:var(--as-border)] px-4 py-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                  {activePost.category}
                </p>
                <h3 className="font-['Cormorant_Garamond'] text-3xl text-[var(--as-text)]">
                  {activePost.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="rounded-full border border-[color:var(--as-border-strong)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text)]"
              >
                Cerrar
              </button>
            </div>
            <div className="max-h-[78vh] bg-black/20 p-3 sm:p-4">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="max-h-[70vh] w-full object-contain"
                style={{ objectPosition: activePost.imagePosition ?? "center" }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
