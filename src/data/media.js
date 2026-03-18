const processCreativeModules = import.meta.glob(
  "../assets/img/proceso creativo/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

const processCreativeEntries = Object.entries(processCreativeModules).sort(([leftPath], [rightPath]) =>
  leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" })
);

export const processCreativeImages = processCreativeEntries.map(([, moduleValue]) => moduleValue);

const collectionModules = import.meta.glob(
  "../assets/img/colecciones/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

const collectionEntries = Object.entries(collectionModules).sort(([leftPath], [rightPath]) =>
  leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" })
);

export const collectionImages = collectionEntries.map(([, moduleValue]) => moduleValue);

const sketchModules = import.meta.glob(
  "../assets/img/bocetaje/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

const sketchEntries = Object.entries(sketchModules).sort(([leftPath], [rightPath]) =>
  leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" })
);

export const sketchImages = sketchEntries.map(([, moduleValue]) => moduleValue);

const bridalModules = import.meta.glob(
  "../assets/img/novia/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

const bridalEntries = Object.entries(bridalModules).sort(([leftPath], [rightPath]) =>
  leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" })
);

export const bridalImages = bridalEntries.map(([, moduleValue]) => moduleValue);

const editorialModules = import.meta.glob(
  "../assets/img/editorial/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" }
);

const editorialEntries = Object.entries(editorialModules).sort(([leftPath], [rightPath]) =>
  leftPath.localeCompare(rightPath, undefined, { numeric: true, sensitivity: "base" })
);

export const editorialImages = editorialEntries.map(([, moduleValue]) => moduleValue);
