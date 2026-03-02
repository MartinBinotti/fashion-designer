import PostCard from "./PostCard";

export default function PostsGridSection({
  posts,
  title = "",
  kicker = "",
  description = "",
  fullWidth = false
}) {
  const wrapperClass = fullWidth
    ? "w-full py-20"
    : "mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8";

  const innerClass = fullWidth ? "px-4 sm:px-6 lg:px-8" : "";
  const hasHeader = Boolean(kicker || title || description);

  return (
    <main className={wrapperClass}>
      {hasHeader ? (
        <header
          className={`mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${innerClass}`}
        >
          <div>
            {kicker ? (
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--as-text-soft)]">
                {kicker}
              </p>
            ) : null}
            {title ? (
              <h1 className="mt-2 font-['Cormorant_Garamond'] text-5xl leading-[0.95] text-[var(--as-text)] sm:text-6xl">
                {title}
              </h1>
            ) : null}
          </div>
          {description ? (
            <p className="max-w-xl text-sm leading-relaxed text-[var(--as-text-muted)]">
              {description}
            </p>
          ) : null}
        </header>
      ) : null}

      <section className={`grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ${innerClass}`}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
