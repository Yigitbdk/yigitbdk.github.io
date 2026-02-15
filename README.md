# YİĞİT BADİK - Portfolio

Modern, cyberpunk/brutalist temalı portfolio sitesi. Next.js 14, TypeScript, Tailwind CSS ve Framer Motion ile geliştirilmiştir.

## 🚀 Özellikler

- ✨ **Next.js 14** - App Router
- 💎 **TypeScript** - Type-safe kod
- 🎨 **Tailwind CSS** - Utility-first CSS
- 🎬 **Framer Motion** - Advanced animasyonlar
- 📱 **Responsive** - Mobil ve desktop uyumlu
- ⚡ **Performanslı** - Optimized images ve code splitting
- 🎯 **SEO-friendly** - Meta tags ve sitemap

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18.17 veya üzeri
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Development sunucusunu başlatın:**
```bash
npm run dev
```

3. **Tarayıcınızda açın:**
```
http://localhost:3000
```

## 📦 Komutlar

```bash
# Development sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Lint kontrolü
npm run lint
```

## 📁 Proje Yapısı

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Ana sayfa
│   └── globals.css         # Global stiller
├── components/
│   ├── ui/
│   │   └── timeline.tsx    # Timeline component
│   ├── Navbar.tsx          # Navigation bar
│   └── ContactModal.tsx    # İletişim modal
├── public/                 # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🎨 Özelleştirme

### Renkler
`tailwind.config.ts` dosyasından tema renklerini değiştirebilirsiniz:

```typescript
colors: {
  cyber: {
    bg: '#0a0e14',
    blue: '#4A7DD9',
    blueLight: '#5B8DEF',
    // ...
  }
}
```

### Timeline Verileri
`app/page.tsx` dosyasındaki `timelineData` array'ini düzenleyin:

```typescript
const timelineData: TimelineEntry[] = [
  {
    year: "2022",
    title: "Senior Developer",
    company: "TechCo",
    // ...
  }
];
```

### İletişim Bilgileri
- Email: `yigit@badik.com`
- GitHub: `https://github.com/yigitbadik`
- LinkedIn: `https://linkedin.com/in/yigitbadik`

## 🚢 Deployment

### Vercel (Önerilen)

1. GitHub'a push edin
2. [Vercel](https://vercel.com)'e gidin
3. Repository'yi import edin
4. Deploy edin!

### Diğer Platformlar

```bash
# Production build oluşturun
npm run build

# Build'i çalıştırın
npm start
```

## 📝 Lisans

MIT License - İstediğiniz gibi kullanabilirsiniz!

## 👤 İletişim

Sorularınız için: yigit@badik.com
