# Pizza Pasta Caffè – Interaktivní menu a objednávkový systém

Moderní, responzivní webová aplikace pro restauraci **Pizza Pasta Caffè** (Nerudova 238/37, Praha 1 – Malá Strana) s interaktivním jídelním lístkem, nákupním košíkem / wishlistem, automatickým přepočtem měn (CZK / EUR) a kompletní lokalizací do **13 světových jazyků**.

---

## 🚀 Jak aplikaci nasadit na GitHub Pages (zdarma jako plnohodnotný web)

Tento projekt je připraven tak, že po nahrání na GitHub se může **automaticky zkompilovat a publikovat na bezplatný hosting GitHub Pages**.

### Krok 1: Nahrání kódu na GitHub
Pokud vytváříte nový repozitář na GitHubu, spusťte ve složce projektu v terminálu:
```bash
git init
git add .
git commit -m "Initial commit - Pizza Pasta Caffè"
git branch -M main
git remote add origin https://github.com/VASE_UZIVATELSKE_JMENO/NAZEV_REPOSITARE.git
git push -u origin main
```

### Krok 2: Aktivace GitHub Pages v nastavení repozitáře
1. Otevřete svůj repozitář na GitHubu ve webovém prohlížeči.
2. Klikněte na záložku **Settings** (Nastavení) nahoře.
3. V levém menu klikněte na **Pages**.
4. V sekci **Build and deployment** u položky **Source** změňte volbu na:  
   👉 **GitHub Actions**
5. Hotovo! Do minuty se spustí připravený workflow (`.github/workflows/deploy.yml`), který projekt zkompiluje a vypublikuje na adresu:  
   `https://VASE_UZIVATELSKE_JMENO.github.io/NAZEV_REPOSITARE/`

---

## 💻 Spuštění na vlastním počítači (lokální vývoj)

### Požadavky
- [Node.js](https://nodejs.org/) (verze 18 nebo novější)
- npm (součást Node.js)

### Instalace a start
1. Otevřete terminál ve složce projektu a nainstalujte závislosti:
   ```bash
   npm install
   ```

2. Spusťte vývojový server:
   ```bash
   npm run dev
   ```
   Aplikace se spustí na adrese `http://localhost:3000` s okamžitou odezvou na změny kódu.

### Vytvoření produkčního buildu
Pro vygenerování optimalizovaných statických souborů (HTML, CSS, JS) do složky `dist/`:
```bash
npm run build
```
Pro lokální vyzkoušení vygenerovaného produkčního buildu:
```bash
npm run preview
```

---

## 🌐 Alternativní nasazení na Vercel / Netlify / Cloudflare Pages

Aplikace je čistě statický React SPA (Single Page Application) s relativními cestami (`base: './'`). Můžete ji okamžitě nasadit také na:
- **Vercel**: Připojte GitHub repozitář na [vercel.com](https://vercel.com) a klikněte na *Deploy*.
- **Netlify**: Připojte repozitář na [netlify.com](https://netlify.com) s build příkazem `npm run build` a složkou `dist`.
- **Cloudflare Pages**: Připojte repozitář s framework presetem *Vite*.

---

## 🛠 Použité technologie
- **React 19** & **TypeScript**
- **Vite 8** (extrémně rychlý bundler a dev server)
- **Tailwind CSS v4** (moderní utility styling)
- **Lucide React** (vektorové ikony)
- **Lokalizace do 13 jazyků**: Čeština, Angličtina, Němčina, Italština, Francouzština, Španělština, Polština, Korejština, Čínština, Japonština, Ukrajinština, Maďarština, Portugalština.
