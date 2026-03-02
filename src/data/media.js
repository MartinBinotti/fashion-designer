const imageModules = import.meta.glob(
  "../assets/img/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

const normalizedEntries = Object.entries(imageModules).sort(([leftPath], [rightPath]) =>
  leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" })
);

export const portfolioImages = normalizedEntries.map(([, moduleValue]) => moduleValue);

export function getPortfolioImage(index) {
  return portfolioImages[index] ?? "";
}
