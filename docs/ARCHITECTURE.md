# 🏛️ Project Architecture

This document explains how the different layers of the Celestial Portfolio interact.

```mermaid
flowchart TD
    A[User] -->|interacts with| B[UI Components]
    B --> C[3D Scene (React Three Fiber)]
    B --> D[State Management (Zustand)]
    D --> E[Hooks & Utils]
    C --> F[Project Data]
    D --> F
    F --> B
```

## 🔍 Explanation
1. **User → UI Components** – Users interact with buttons, menus, and 3D objects.
2. **UI → 3D Scene** – Components render celestial objects using React Three Fiber.
3. **UI → State (Zustand)** – Global state handles active selections, animations, and UI context.
4. **State → Hooks & Utils** – Logic and helper functions process state and provide computed values.
5. **3D Scene & State → Data** – Both layers fetch structured data (`src/data/projects.js`) to render dynamic content.
6. **Data → UI** – Updated project data flows back into the UI for display.

---
This modular flow ensures scalability and easy extension for new features.
