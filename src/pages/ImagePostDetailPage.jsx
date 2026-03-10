import { Link, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { posts } from "../data/posts";

export default function ImagePostDetailPage() {
  const { postId } = useParams();
  const post = posts.find((item) => item.id === postId);

  if (!post) {
    return (
      <main className="mx-auto w-full max-w-4xl px-4 pb-16 pt-28 sm:px-6">
        <h1 className="font-['Cormorant_Garamond'] text-5xl text-[var(--as-text)]">
          Imagen no encontrada
        </h1>
        <Link
          to="/imagenes"
          className="mt-6 inline-block rounded-full border border-[color:var(--as-border-strong)] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text)]"
        >
          Volver a Imagenes
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <BackButton fallbackTo="/imagenes" />
        <Link
          to="/imagenes"
          className="text-[11px] uppercase tracking-[0.2em] text-[var(--as-text-soft)]"
        >
          Imagenes
        </Link>
      </div>

      <h1 className="mt-4 font-['Cormorant_Garamond'] text-6xl leading-[0.92] text-[var(--as-text)]">
        {post.title}
      </h1>
      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--as-text-soft)]">
        {post.category} · {post.season}
      </p>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[var(--as-text-muted)]">
        {post.excerpt}
      </p>

      <section className="mt-10 overflow-hidden rounded-[1.8rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)]">
        <div className="max-h-[70vh] bg-[var(--as-panel)]">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-contain"
              style={{ objectPosition: post.imagePosition ?? "center" }}
              loading="lazy"
            />
          ) : (
            <div className="h-80 w-full bg-gradient-to-br from-[#4d535f] to-[#22262e]" />
          )}
        </div>
      </section>
    </main>
  );
}
