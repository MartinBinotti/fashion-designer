import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTheme } from "../hooks/useTheme";

function normalizeSources(videoSrc, videoSources) {
  if (videoSources.length > 0) {
    return videoSources.map((source) =>
      typeof source === "string" ? { src: source } : source
    );
  }

  if (!videoSrc) {
    return [];
  }

  return [{ src: videoSrc }];
}

export default function Hero({ videoSrc = "/media/hero-fashion.mp4", videoSources = [] }) {
  const [hasVideoError, setHasVideoError] = useState(false);
  const { isDarkTheme } = useTheme();
  const sources = useMemo(() => normalizeSources(videoSrc, videoSources), [videoSrc, videoSources]);
  const activeSource = sources[0];

  return (
    <section className="relative h-[82vh] min-h-[540px] w-full overflow-hidden">
      {activeSource && !hasVideoError ? (
        <motion.video
          key={activeSource.src}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onError={() => setHasVideoError(true)}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <source src={activeSource.src} type="video/mp4" />
        </motion.video>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_35%),linear-gradient(140deg,#d8c8b5_0%,#be9f82_48%,#8e6f56_100%)]" />
      )}

      <div
        className={`absolute inset-0 ${
          isDarkTheme
            ? "bg-gradient-to-b from-black/20 via-black/20 to-black/45"
            : "bg-gradient-to-b from-white/35 via-white/25 to-white/40"
        }`}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-end px-4 pb-12 sm:px-6 lg:px-8">
        <div>
          <p
            className={`text-[11px] uppercase tracking-[0.28em] ${
              isDarkTheme ? "text-white/75" : "text-black/75"
            }`}
          >
            Sebastian Elbers
          </p>
          <h1
            className={`mt-3 font-['Cormorant_Garamond'] text-5xl leading-[0.9] sm:text-6xl lg:text-7xl ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            Fashion Designer
          </h1>
        </div>
      </div>
    </section>
  );
}
