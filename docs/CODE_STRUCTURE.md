# 🧩 Code Structure (Class Diagram)

This diagram shows the relationships between key modules in the Celestial Portfolio.

```mermaid
classDiagram
    class App {
      +Layout
      +Routing
    }
    class Starfield {
      +Render Stars
      +Animate Background
    }
    class CelestialNode {
      +Project Metadata
      +OnClick -> Open Details
    }
    class Tooltip {
      +Hover Info
    }
    class Store {
      +Zustand State
      +ActiveProject
      +Theme
    }
    class Hooks {
      +useWindowSize()
      +useProjectData()
    }
    class Utils {
      +mathHelpers()
      +formatters()
    }
    class Data {
      +projects.js
    }

    App --> Starfield
    App --> CelestialNode
    CelestialNode --> Tooltip
    App --> Store
    Store --> Hooks
    Store --> Utils
    Hooks --> Data
    CelestialNode --> Data
```

## 🔎 Explanation
- **App** is the root, connecting layout, starfield, and celestial nodes.  
- **Starfield** handles background rendering.  
- **CelestialNode** maps to project data and user interactions.  
- **Store** manages global state with Zustand.  
- **Hooks** connect state + utilities to components.  
- **Data** feeds content into nodes and UI.  
