# yergas.io — Setup

## Primeros pasos

Abre una terminal en esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

El sitio estará en `http://localhost:4321`.

## Estructura del proyecto

```
src/
├── components/
│   ├── layout/       → Header, Footer (comunes a todas las páginas)
│   ├── sections/     → Hero, Projects, Skills, About, Contact
│   └── ui/           → Button, Tag, ProjectCard, LanguageSwitcher
├── content/
│   └── projects/     → Un .md por proyecto
├── i18n/
│   ├── en.json       → Textos en inglés
│   ├── es.json       → Textos en español
│   └── utils.ts      → Helper t() y getLang()
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro          → Versión EN (/)
│   ├── es/index.astro       → Versión ES (/es)
│   └── projects/[slug].astro → Páginas de proyecto
└── styles/
    └── global.css
```

## Añadir un proyecto nuevo

1. Crea `src/content/projects/nombre-del-proyecto.md`
2. Rellena el frontmatter:

```yaml
---
title: "Nombre del Proyecto"
titleEs: "Nombre en Español"   # opcional
category: jam                  # jam | personal | academic | professional
status: released               # released | wip
cover: /projects/mi-juego/cover.jpg  # imagen en /public/projects/
year: 2025
engine: "Unreal Engine"
role: ["Game Designer", "Level Designer"]
tags: ["Systems Design", "UE5"]
itchUrl: https://tu-usuario.itch.io/juego   # opcional
featured: false
---
```

3. Añade el contenido en Markdown debajo del frontmatter.
4. Pon la imagen de cover en `public/projects/nombre-del-proyecto/cover.jpg`.

## Personalización visual

Todos los colores y fuentes están en `tailwind.config.mjs` bajo `theme.extend`.
El color de acento principal es `primary` (#E8FF47 por defecto — cámbialo a tu gusto).

## Despliegue

Recomendado: [Vercel](https://vercel.com) o [Netlify](https://netlify.com).
Ambos detectan Astro automáticamente. Solo conecta el repositorio y listo.
