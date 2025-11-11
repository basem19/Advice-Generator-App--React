# 🎯 Advice Generator App — React + TypeScript + Vite

A clean and responsive **Advice Generator** application built using **React**, **TypeScript**, and **CSS Modules**.  
The app fetches random advice from the official *Advice Slip API* and displays it with smooth UI interactions.

Inspired by the original challenge on **Frontend Mentor**.

---

## 🚀 Features

✅ Fetches random advice using **Advice Slip API**  
✅ Fully responsive (mobile + desktop)  
✅ Clean UI with modern look  
✅ Smooth button glow animation  
✅ Fast and lightweight (no Tailwind, no axios)  
✅ Uses **React Query** for stable data fetching  
✅ CSS Modules for isolated component styling  

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **Vite**
- **React Query**
- **CSS Modules**
- **Advice Slip API** → https://api.adviceslip.com/advice

---

## 📁 Project Structure

```

src/
│── assets/
│   ├── icon-dice.svg
│   ├── pattern-divider-desktop.svg
│   └── pattern-divider-mobile.svg
│
│── components/
│   └── advice/
│       ├── AdviceCard.tsx
│       ├── AdviceCard.module.css
│       ├── Divider.tsx
│
│── hooks/
│   └── useAdvice.ts
│
│── services/
│   └── adviceApi.ts
│
│── types/
│   └── adviceTypes.ts
│
│── App.tsx
│── main.tsx
│── index.css
│
└── README.md

````

---

## ⚙️ Installation & Setup

1️⃣ Clone the repository  
```sh
git clone https://github.com/yourname/Advice-Generator-App-React.git
````

2️⃣ Install dependencies

```sh
npm install
```

3️⃣ Run development server

```sh
npm run dev
```

4️⃣ Build for production

```sh
npm run build
```

---

## 🌐 API Details

All advice is fetched from:

```
https://api.adviceslip.com/advice
```

Because this API **does not support CORS**, a Vite proxy is used to bypass the CORS restriction:

**vite.config.ts**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.adviceslip.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        configure: (proxy, options) => {
          proxy.on("proxyReq", (proxyReq, req, res) => {
            proxyReq.setHeader("Connection", "keep-alive");
          });
        },
      },
    },
  },
});

```

---

## ✅ Live Demo

🔗 **Add your deployed link here**
https://advice-generator-app-orpin-five.vercel.app/

---
## 👨‍💻 Author
Basem Saeed
Frontend Developer

LinkedIn: [https://www.linkedin.com/in/your-profile](https://www.linkedin.com/in/your-profile)

# Advice-Generator-App--React
