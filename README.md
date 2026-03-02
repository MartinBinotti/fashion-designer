# Portfolio Fashion Designer

Sitio web de portafolio para una diseñadora de moda, construido con React + Vite.

## Tecnologías

- React 18
- React Router DOM 6
- Vite 5
- Tailwind CSS 3
- Framer Motion

## Requisitos

- Node.js 18+ (recomendado)
- npm 9+

## Instalación

```bash
npm install
```

## Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor local de Vite.

### Build de producción

```bash
npm run build
```

Genera los archivos de producción en `dist/`.

### Preview de producción

```bash
npm run preview
```

Sirve localmente el build generado para validarlo.

## Rutas principales

- `/` Inicio
- `/proyectos` Proyectos
- `/imagenes` Galería de imágenes
- `/metodo-creativo` Método creativo
- `/metodo-creativo/:sectionId` Detalle de sección
- `/contact` Contacto

## Estructura del proyecto

```text
src/
  assets/         # Imágenes y video
  components/     # Componentes reutilizables
  context/        # Contextos (tema)
  data/           # Datos estáticos
  hooks/          # Hooks personalizados
  pages/          # Páginas de la app
```

## Notas

- El directorio `dist/` se genera automáticamente con `npm run build`.
- Si `dist/` ya está versionado en Git, puedes dejar de trackearlo con:

```bash
git rm -r --cached dist
```
