# 🧑‍💻 Yiğit Badik — Personal Portfolio

> A modern, cyberpunk/brutalist personal portfolio website.  
> 🌐 **Live Site:** [yigitbdk.github.io](https://yigitbdk.github.io)

---

## 📖 About

This is the personal portfolio of **Yiğit Badik**, built on top of Next.js 14's App Router architecture. The site embraces a dark, cyberpunk-inspired brutalist aesthetic, combined with smooth Framer Motion animations, the type-safety of TypeScript, and the flexibility of Tailwind CSS — delivering a fast, professional, and visually striking user experience.

---

## ✨ Features

| Feature | Details |
|---|---|
| ⚡ **Next.js 14** | Modern page management with App Router architecture |
| 🔷 **TypeScript** | Type-safe, maintainable codebase |
| 🎨 **Tailwind CSS** | Rapid and consistent styling with utility-first approach |
| 🎬 **Framer Motion** | Page transitions and element animations |
| 📱 **Responsive Design** | Fully compatible with mobile, tablet, and desktop |
| 🚀 **Performance** | Optimized images and code splitting |
| 🔍 **SEO Friendly** | Meta tags and sitemap support |
| 🌑 **Cyberpunk / Brutalist Theme** | Unique dark color palette and sharp typography |

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Linting:** ESLint
- **Deployment:** GitHub Pages / Vercel
- **CI/CD:** GitHub Actions

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** >= 18.17
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Yigitbdk/yigitbdk.github.io.git
cd yigitbdk.github.io

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in your browser
# http://localhost:3000
```

---

## 🔧 Customization

### Updating Career / Experience Data

Edit the `timelineData` array in `app/page.tsx`:

```ts
const timelineData: TimelineEntry[] = [
  {
    year: "2023",
    title: "Full Stack Developer",
    company: "Company Name",
    description: "Brief description of your role...",
  },
  // ...
];
```

### Updating Contact Information

Update the following fields in `components/ContactModal.tsx` or `app/page.tsx`:

```ts
email: "yigit@badik.com"
github: "https://github.com/yigitbadik"
linkedin: "https://linkedin.com/in/yigitbadik"
```

---

## 🚢 Deployment

### GitHub Pages (Current)

Since the repository is named `yigitbdk.github.io`, GitHub Pages automatically deploys on every push to the `main` branch, managed by the GitHub Actions pipeline.

### Vercel (Recommended Alternative)

```
1. Sign in to Vercel with your GitHub account → vercel.com
2. Click "Add New Project" and select this repository
3. Leave the settings as-is (Next.js is auto-detected)
4. Click "Deploy"
```

### Manual Build

```bash
npm run build   # Generates the .next/ output folder
npm start       # Starts the production server
```

---

## 📊 Language Breakdown

```
TypeScript   88.4%
CSS          11.1%
JavaScript    0.5%
```

---

## 📬 Contact

For questions, suggestions, or collaborations:

- 📧 **Email:** [yigit@badik.com](mailto:yigitbadik@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/yigitbadik](https://linkedin.com/in/yigitbadik)
- 🐙 **GitHub:** [github.com/yigitbadik](https://github.com/yigitbadik)
- 🌐 **Portfolio:** [yigitbdk.github.io](https://yigitbdk.github.io)

---

## 📝 License

This project is published under the **MIT License**. Feel free to use, modify, and distribute the code.

---

<div align="center">
  <sub>⚡ Built with Next.js 14 · TypeScript · Tailwind CSS · Framer Motion</sub>
</div>
