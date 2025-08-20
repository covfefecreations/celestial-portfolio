# Celestial Portfolio – Project Blueprint

## 1. Project Overview
Celestial Portfolio is an interactive 3D portfolio built with **Next.js, React Three Fiber, and TailwindCSS**. 
It features a starfield background, interactive projects as celestial bodies, and smooth navigation transitions.

## 2. Objectives
- Deliver an immersive portfolio experience using **WebGL/Three.js**.
- Ensure **performance and responsiveness** across devices.
- Provide a **scalable code structure** for future content additions.

## 3. Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **3D Rendering:** Three.js + React Three Fiber
- **State Management:** Zustand
- **UI/Styling:** TailwindCSS + Framer Motion
- **Icons:** Lucide-react

## 4. Project Structure
- `src/app` – Next.js app router pages
- `src/components` – UI + 3D rendering components
- `src/data` – Project data models
- `src/stores` – Zustand global stores
- `src/hooks` – Custom React hooks
- `src/utils` – Helper functions
- `docs/` – Documentation and specs

## 5. Phases
### Phase 1 – Scaffold
- Set up Next.js, Tailwind, TypeScript, Zustand, Three.js
- Create base project structure

### Phase 2 – Core Features
- Implement starfield scene
- Add interactive celestial project nodes
- Build project detail pages

### Phase 3 – UI & Navigation
- Responsive layout
- Project panels, tooltips, loaders
- Smooth transitions with Framer Motion

### Phase 4 – QA & Optimization
- Cross-browser and device testing
- Optimize Three.js rendering
- Accessibility checks

## 6. Quality Assurance
- ✅ Unit testing for utils and hooks
- ✅ Component behavior checks
- ✅ Mobile + desktop manual testing
- ✅ Performance audits (Lighthouse)

## 7. Instructions
### Development
```bash
npm install
npm run dev
```
Access at: [http://localhost:3000](http://localhost:3000)

### Build & Production
```bash
npm run build
npm start
```

---
**Author:** Project generated with AI assistance  
