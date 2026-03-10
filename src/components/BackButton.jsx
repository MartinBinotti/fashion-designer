import { useNavigate } from "react-router-dom";

export default function BackButton({ fallbackTo = "/" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(fallbackTo);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--as-border)] px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[var(--as-text-soft)] transition hover:border-[color:var(--as-border-strong)] hover:text-[var(--as-text)]"
      aria-label="Volver"
    >
      <span aria-hidden="true" className="text-base leading-none">
        ←
      </span>
      Volver
    </button>
  );
}
