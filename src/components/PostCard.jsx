import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const toneMap = {
  sand: "from-[#efe6d9] via-[#dccab6] to-[#b5967b]",
  ink: "from-[#363b47] via-[#20242f] to-[#111319]",
  plum: "from-[#654a63] via-[#473446] to-[#241c25]",
  olive: "from-[#9aa083] via-[#677056] to-[#2f3528]",
  clay: "from-[#b18975] via-[#8f6a59] to-[#4d3b32]",
  coal: "from-[#5f6268] via-[#3b3f46] to-[#1b1d21]"
};

export default function PostCard({ post }) {
  const [hasImageError, setHasImageError] = useState(false);
  const tone = useMemo(() => toneMap[post.tone] ?? toneMap.sand, [post.tone]);
  const showImage = Boolean(post.image) && !hasImageError;
  const detailPath = post.to || `/imagenes/${post.id}`;

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[color:var(--as-border)] bg-[var(--as-glass-soft)]">
      <div className="relative overflow-hidden">
        {showImage ? (
          <img
            src={post.image}
            alt={post.title}
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            style={{ objectPosition: post.imagePosition ?? "center" }}
            loading="lazy"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div
            className={`flex h-64 items-end bg-gradient-to-br p-5 transition duration-500 group-hover:scale-105 ${tone}`}
          >
            <p className="rounded-full border border-white/45 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/90">
              Reemplaza: {post.image}
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--as-text-soft)]">
              {post.category}
            </p>
            <h3 className="mt-1 font-['Cormorant_Garamond'] text-3xl leading-[1] text-[var(--as-text)]">
              {post.title}
            </h3>
          </div>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--as-text-soft)]">
            {post.season}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-[var(--as-text-muted)]">
          {post.excerpt}
        </p>

        <Link
          to={detailPath}
          className="inline-block rounded-full border border-[color:var(--as-border)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[var(--as-text-muted)] transition hover:border-[color:var(--as-border-strong)] hover:text-[var(--as-text)]"
        >
          Ver
        </Link>
      </div>
    </article>
  );
}
