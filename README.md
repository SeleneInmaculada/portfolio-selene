# Portfolio v2 — Selene García Chacón

[![Deploy](https://github.com/seleneinmaculada/portfolio-v2/actions/workflows/deploy.yml/badge.svg)](https://github.com/seleneinmaculada/portfolio-v2/actions/workflows/deploy.yml)

Portfolio personal bilingüe (ES/EN) construido con **Astro**, desplegado en **GitHub Pages**.

🌐 **Live**: [seleneinmaculada.github.io/portfolio-v2](https://seleneinmaculada.github.io/portfolio-v2)

---

## 🚀 Stack

- **[Astro](https://astro.build/)** — Static Site Generator, salida 100% estática
- **CSS vanilla** — Variables CSS, dark theme, responsive, animaciones `IntersectionObserver`
- **i18n casero** — Sistema de traducciones ES/EN con detección por URL
- **GitHub Actions** — Deploy automático a GitHub Pages

## ✨ Características

- 🌙 **Dark theme** con acentos púrpura/índigo
- 🌐 **Bilingüe** — Español / Inglés con toggle
- 📱 **Responsive** — Desktop y móvil con menú hamburguesa
- 🎯 **SEO** — Open Graph, Twitter Cards, sitemap, canonical, robots.txt
- 🎨 **Sin frameworks UI** — JavaScript nativo, sin React/Vue/Svelte
- 📄 **Páginas 404** personalizadas en ambos idiomas

## 📁 Estructura

```
src/
├── components/     # Hero, About, Skills, Projects, Education, Contact
├── i18n/           # es.json, en.json, utils.ts
├── layouts/        # BaseLayout.astro
├── pages/          # index.astro, /en/index.astro, 404.astro
└── styles/         # global.css
```

## 🛠 Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321/portfolio-v2/
npm run build     # genera /dist
npm run preview   # sirve /dist localmente
```

## 📦 Proyectos destacados

| Proyecto | Tecnologías |
|---|---|
| Maxmund — IA + RAG | Python, LangChain, Milvus, BERT |
| Deadly Harmony | Unity, C#, Game Development |
| Escuela Arte Toledo | WordPress, PHP, SEO |
| Heaven Travel | Localización, WordPress |
| Creation of Chatbot AI | Next.js, RAG, TypeScript |
| Dune 2D | Unity, C#, 2D Game |
| Graphic Design | Illustrator, Photoshop, Canva |

## 📬 Contacto

- **Email**: [selene.garcia@example.com](mailto:selene.garcia@example.com)
- **LinkedIn**: [linkedin.com/in/selene-garcia-chacon](https://linkedin.com/in/selene-garcia-chacon)
- **GitHub**: [github.com/seleneinmaculada](https://github.com/seleneinmaculada)

---

Hecho con 💜 por Selene García Chacón
