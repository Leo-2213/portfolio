# Redis Guide - Complete Setup Guide

This guide walks you through setting up the Redis Guide application from scratch.

---

## 📋 Prerequisites

- **Node.js:** v16.0.0 or higher
- **npm:** v8.0.0 or higher (or yarn)
- **Git:** for version control (optional)
- **Text Editor:** VS Code recommended
- **Terminal/Command Prompt**

Check your versions:
```bash
node --version  # Should be v16+
npm --version   # Should be v8+
```

---

## 🚀 Method 1: Using Vite (Recommended)

### Step 1: Create Project

```bash
npm create vite@latest redis-guide -- --template react
cd redis-guide
```

### Step 2: Install Dependencies

```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This creates:
- `node_modules/` - Dependencies
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

### Step 3: Copy Configuration Files

Copy these files to your project root:

**tailwind.config.js** - Already created by init, or copy our version
**postcss.config.js** - Already created by init, or copy our version
**vite.config.js** - Copy our enhanced version
**package.json** - Update with our dependencies (or merge)

### Step 4: Setup Source Files

Create the following structure:

```
src/
├── App.jsx         (copy from redis-guide.jsx)
├── index.css       (copy from src-index.css)
└── main.jsx        (copy from src-main.jsx)
```

**Copy files:**
1. `redis-guide.jsx` → `src/App.jsx`
2. `src-index.css` → `src/index.css`
3. `src-main.jsx` → `src/main.jsx`

### Step 5: Copy Root Files

Copy to project root:
- `index.html`

### Step 6: Update package.json

Make sure these dependencies are installed:

```bash
npm install framer-motion
npm install -D tailwindcss postcss autoprefixer
```

Verify `package.json` has:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.4.0"
  }
}
```

### Step 7: Run Development Server

```bash
npm run dev
```

Output:
```
  VITE v4.4.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Open your browser to `http://localhost:5173/` 🎉

---

## 🚀 Method 2: Using Next.js

### Step 1: Create Next.js Project

```bash
npx create-next-app@latest redis-guide --typescript=false --eslint=false
cd redis-guide
```

### Step 2: Install Framer Motion

```bash
npm install framer-motion
```

### Step 3: Create App Component

Create `app/page.jsx`:

```jsx
import RedisGuide from '@/components/RedisGuide'

export const metadata = {
  title: 'Redis Guide - Master the In-Memory Database',
  description: 'Comprehensive interactive guide to Redis',
}

export default function Home() {
  return <RedisGuide />
}
```

Create `components/RedisGuide.jsx`:
- Copy content from `redis-guide.jsx`

### Step 4: Update Tailwind Config

Update `tailwind.config.js` with our configuration.

### Step 5: Update Global Styles

Copy `src-index.css` content to `app/globals.css`

### Step 6: Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000/` 🎉

---

## 🚀 Method 3: Add to Existing React Project

### Step 1: Install Dependencies

```bash
npm install framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 2: Update Tailwind Config

Replace `tailwind.config.js` with our version.

### Step 3: Update CSS

Add to your global CSS:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles from src-index.css */
```

### Step 4: Import Component

In your main app component:

```jsx
import RedisGuide from './components/RedisGuide'

function App() {
  return <RedisGuide />
}

export default App
```

### Step 5: Copy Component

Copy `redis-guide.jsx` to `src/components/RedisGuide.jsx`

### Step 6: Run Your App

```bash
npm run dev
```

---

## 📁 Complete Directory Structure

```
redis-guide/
├── src/
│   ├── components/
│   │   └── RedisGuide.jsx       (copy from redis-guide.jsx)
│   ├── App.jsx
│   ├── index.css                 (copy from src-index.css)
│   └── main.jsx                  (copy from src-main.jsx)
├── public/
│   └── vite.svg                  (auto-generated)
├── index.html                    (copy our version)
├── package.json                  (copy our version)
├── vite.config.js               (copy our version)
├── tailwind.config.js           (copy our version)
├── postcss.config.js            (copy our version)
├── .gitignore
└── README.md
```

---

## ✅ Verification Checklist

- [ ] Node.js v16+ installed
- [ ] npm v8+ installed
- [ ] Project directory created
- [ ] Dependencies installed (`npm install`)
- [ ] Tailwind CSS configured
- [ ] All files copied correctly
- [ ] Development server running (`npm run dev`)
- [ ] Browser opens to localhost
- [ ] Redis Guide page displays
- [ ] Animations are smooth
- [ ] Colors are correct

---

## 🐛 Troubleshooting

### Port Already in Use

If port 3000/5173 is busy:

**Vite:**
```bash
npm run dev -- --port 3001
```

**Next.js:**
```bash
npm run dev -- -p 3001
```

### Tailwind Styles Not Applied

1. Check `tailwind.config.js` has correct `content` paths
2. Verify `@tailwind` directives in CSS
3. Restart dev server: `npm run dev`

### Framer Motion Not Working

1. Verify installation: `npm list framer-motion`
2. Check import: `import { motion } from 'framer-motion'`
3. Reinstall: `npm install framer-motion@latest`

### Module Not Found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Memory Issues During Build

```bash
npm run build -- --max-workers 1
```

---

## 🚀 Building for Production

### Vite

```bash
npm run build
npm run preview  # Preview production build locally
```

Output in `dist/` directory

### Next.js

```bash
npm run build
npm start  # Serve production build
```

Deploy the `.next/` directory

---

## 📊 Performance Tips

1. **Code Splitting:** Automatically handled by Vite/Next.js
2. **Image Optimization:** SVG diagrams are vector-based
3. **Animation Performance:** Framer Motion uses GPU acceleration
4. **Bundle Size:** Minimal dependencies for fast loading

Check bundle size:
```bash
npm run build

# View the dist directory size
du -sh dist/
```

---

## 🔧 Customization Tips

### Change Redis Red Color

Find in `redis-guide.jsx`:
```javascript
const colors = {
  primary: '#DC382D',  // Change this
  // ...
}
```

### Disable Animations

Wrap motion components conditionally:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Use conditional logic
```

### Add New Sections

1. Create new component function
2. Follow existing patterns
3. Add to main component's return
4. Verify responsive design

### Update Content

All text is in the component. Use find & replace:
1. `Ctrl+F` or `Cmd+F` in your editor
2. Find text to replace
3. Update all occurrences

---

## 🌐 Deployment Options

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify (Vite)
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

### Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

Build and run:
```bash
docker build -t redis-guide .
docker run -p 3000:3000 redis-guide
```

---

## 📚 File Descriptions

| File | Purpose |
|------|---------|
| `redis-guide.jsx` | Main React component with all content |
| `src-index.css` | Global styles and Tailwind imports |
| `src-main.jsx` | React app entry point |
| `index.html` | HTML entry point |
| `vite.config.js` | Vite build configuration |
| `tailwind.config.js` | Tailwind CSS theme |
| `postcss.config.js` | PostCSS plugins |
| `package.json` | Dependencies and scripts |
| `REDIS_GUIDE_README.md` | Feature documentation |
| `SETUP_GUIDE.md` | This file - setup instructions |

---

## 🆘 Getting Help

1. **Check Docs:**
   - Vite: https://vitejs.dev/
   - Next.js: https://nextjs.org/docs
   - Framer Motion: https://www.framer.com/motion/
   - Tailwind: https://tailwindcss.com/docs

2. **Common Issues:**
   - Clear cache: `npm cache clean --force`
   - Reinstall: `rm -rf node_modules && npm install`
   - Restart server: Stop and `npm run dev` again

3. **Debug Mode:**
   - Browser DevTools: F12
   - Check console for errors
   - Network tab for failed requests

---

## 🎓 Next Steps

1. ✅ Complete setup with one of the 3 methods
2. ✅ Customize colors to match your brand
3. ✅ Add your own content/use cases
4. ✅ Test on mobile devices
5. ✅ Deploy to production
6. ✅ Share with your team!

---

## 🎉 Success!

You now have a beautiful, interactive Redis guide running! 

```bash
npm run dev   # Start development
npm run build # Build for production
```

**Happy coding! 🚀**
