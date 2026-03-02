import { getPortfolioImage } from "./media";

export const methodSections = [
  {
    id: "procesos-creativos",
    title: "Procesos creativos",
    brief:
      "Resumen de investigacion, referencias y decisiones visuales que estructuran cada propuesta.",
    image: getPortfolioImage(0),
    highlights: [
      "Mapa de referencias y universo estético",
      "Exploración de texturas, paleta y materiales",
      "Definición de intención narrativa"
    ]
  },
  {
    id: "colecciones",
    title: "Colecciones",
    brief:
      "Sintesis de conceptos en capsulas y series, cada una con lenguaje y objetivos propios.",
    image: getPortfolioImage(1),
    highlights: [
      "Construcción de siluetas y familia de prendas",
      "Eje cromático y desarrollo por temporada",
      "Coherencia visual entre piezas"
    ]
  },
  {
    id: "bocetaje",
    title: "Bocetaje",
    brief:
      "Proceso de ideación y prueba técnica donde se definen proporciones, cortes y ritmo visual.",
    image: getPortfolioImage(2),
    highlights: [
      "Exploraciones iniciales de forma",
      "Ajustes de estructura y detalle",
      "Refinamiento previo al desarrollo final"
    ]
  }
];
