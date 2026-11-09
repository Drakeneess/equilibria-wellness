# Equilibria Wellness

Landing independiente de **Equilibria Beauty** para la línea Equilibria Wellness, enfocada en una experiencia visual orgánica y contemplativa alrededor del sonido, los cuencos y el bienestar holístico.

## Primera fase

- Identidad visual propia: paleta bronce/ámbar/crema con acentos de verde hoja y tipografía editorial.
- Inicio responsive con fotografía de referencia aportada por el equipo de Equilibria.
- Navegación adaptable a dispositivos móviles.
- Secciones de filosofía, pilares, universo sensorial, preguntas frecuentes y cierre.
- Enlaces únicamente a la web institucional de Equilibria.
- Texto introductorio sin precios, supuestos tratamientos confirmados ni afirmaciones clínicas.
- Proyecto independiente en Next.js (App Router + TypeScript).

## Iniciar

```bash
npm install
npm run dev
```

Visita `http://localhost:3000`.

## Producción

```bash
npm run typecheck
npm run build
```

Para Vercel: importa este repositorio y establece el framework en **Next.js**, root `/`, y rama de producción `main`. La página usa rutas estáticas y no necesita variables de entorno en esta fase.

> La configuración `robots: { index: false, follow: false }` está activada mientras el contenido sea una primera fase. Eliminarla tras aprobar la publicación.

## Personalizar

- `src/data/site.ts`: textos institucionales, pilares y preguntas frecuentes.
- `src/app/page.tsx`: estructura y contenido visual.
- `src/app/globals.css`: sistema de estilos, animaciones y responsive.
- `src/components/WellnessHeader.tsx`: navegación y menú móvil.
- `public/images/hero-wellness.webp`: referencia visual de Equilibria Wellness.
- `public/brand/equilibria-wellness.svg`: logotipo SVG adaptado de Equilibria Beauty con nombre Wellness y pétalos verde hoja.
- `public/brand/wellness-mark.svg`: isotipo SVG adaptado de la familia Equilibria.

## Estado del contenido

El catálogo de sesiones, agenda, canales de contacto específicos y descripciones definitivas deben validarse antes de publicarse. Los cuencos se presentan como parte de una experiencia sensorial y contemplativa, no como un tratamiento médico ni como sustituto de atención clínica.

## Separación de marcas

Este repositorio **no** consume código ni contenidos de `equilibria-beauty`. Puede desplegarse en un proyecto de alojamiento completamente distinto.
