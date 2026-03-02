import { getPortfolioImage } from "./media";

export const posts = [
  {
    id: "procesos-creativos",
    title: "Procesos creativos",
    category: "Brief",
    season: "Primavera 2026",
    image: getPortfolioImage(0),
    tone: "sand",
    to: "/metodo-creativo/procesos-creativos",
    excerpt:
      "Exploraciones de materiales, referencias visuales y decisiones de direccion para cada pieza."
  },
  {
    id: "colecciones",
    title: "Colecciones",
    category: "Serie",
    season: "Invierno 2026",
    image: getPortfolioImage(1),
    tone: "ink",
    to: "/metodo-creativo/colecciones",
    excerpt:
      "Capsulas en desarrollo con identidad propia, paleta definida y narrativa de temporada."
  },
  {
    id: "tailoring-notes",
    title: "Bocetaje",
    category: "Sketchbook",
    season: "2026",
    image: getPortfolioImage(2),
    tone: "plum",
    to: "/metodo-creativo/bocetaje",
    excerpt:
      "Secuencia de ideas, trazos y pruebas tecnicas que dan origen a nuevas siluetas."
  },
  {
    id: "color-test",
    title: "Sistemas de Color SS26",
    category: "Direccion Creativa",
    season: "Verano 2026",
    image: getPortfolioImage(3),
    tone: "olive",
    excerpt:
      "Paletas calibradas para campanas de temporada con foco en piel, volumen y contraste fotografico."
  },
  {
    id: "accessory-study",
    title: "Estudio de Accesorios",
    category: "Accesorios",
    season: "Otono 2026",
    image: getPortfolioImage(4),
    tone: "clay",
    excerpt:
      "Serie de prototipos en cuero y tejido tecnico para completar siluetas editoriales."
  },
  {
    id: "campaign-frames",
    title: "Frames de Campana",
    category: "Campana",
    season: "2026",
    image: getPortfolioImage(5),
    tone: "coal",
    excerpt:
      "Direccion de arte para contenido de marca con ritmo visual limpio y foco en actitud."
  }
];
