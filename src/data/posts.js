import moda1Small from "../assets/img/moda1-s.webp";
import moda2Small from "../assets/img/moda2-s.webp";
import moda3Small from "../assets/img/moda3-s.webp";
import moda4Small from "../assets/img/moda4-s.webp";
import moda5Small from "../assets/img/moda5-s.webp";
import moda6Small from "../assets/img/moda6-s.webp";
import moda7Small from "../assets/img/moda7-s.webp";
import moda9Image from "../assets/img/moda9.webp";
import procesoCreativo5 from "../assets/img/proceso creativo/proceso-creativo5.webp";
import bocetajeCover from "../assets/img/bocetaje/moda9.webp";

export const posts = [
  {
    id: "procesos-creativos",
    title: "Procesos creativos",
    category: "Brief",
    season: "2026",
    image: procesoCreativo5,
    imagePosition: "center 60%",
    tone: "sand",
    to: "/metodo-creativo/procesos-creativos",
    excerpt:
      "Exploraciones de materiales, referencias visuales y decisiones de direccion para cada pieza."
  },
  {
    id: "colecciones",
    title: "Colecciones",
    category: "Serie",
    season: "2026",
    image: moda2Small,
    imagePosition: "center 18%",
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
    image: bocetajeCover,
    imagePosition: "center 60%",
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
    image: moda4Small,
    tone: "olive",
    excerpt:
      "Paletas calibradas para campanas de temporada con foco en piel, volumen y contraste fotografico."
  },
  {
    id: "accessory-study",
    title: "Estudio de Accesorios",
    category: "Accesorios",
    season: "Otono 2026",
    image: moda5Small,
    tone: "clay",
    excerpt:
      "Serie de prototipos en cuero y tejido tecnico para completar siluetas editoriales."
  },
  {
    id: "campaign-frames",
    title: "Frames de Campana",
    category: "Campana",
    season: "2026",
    image: moda6Small,
    tone: "coal",
    excerpt:
      "Direccion de arte para contenido de marca con ritmo visual limpio y foco en actitud."
  },
  {
    id: "atelier-notes",
    title: "Atelier Notes",
    category: "Proceso",
    season: "2026",
    image: moda7Small,
    tone: "ink",
    excerpt:
      "Registro de fitting, ajustes y acabados finales antes de salida editorial."
  },
  {
    id: "lookbook-snapshot",
    title: "Lookbook Snapshot",
    category: "Lookbook",
    season: "2026",
    image: moda9Image,
    tone: "sand",
    excerpt:
      "Imagen de referencia para continuidad de estilo, textura y direccion de pose."
  }
];
