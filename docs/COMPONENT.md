# ⚛️ React Component Diagram (Mermaid)

This diagram shows the main React components and their relationships.

```mermaid
flowchart TD
    App[App] --> Navbar[Navbar]
    App --> GalaxyCanvas[GalaxyCanvas]
    GalaxyCanvas --> StarNode[StarNode]
    StarNode --> Tooltip[Tooltip]
    StarNode --> Modal[Modal]
    App --> Footer[Footer]
```

## 🔎 Explanation
- **App** is the root component.  
- **Navbar** and **Footer** are always visible.  
- **GalaxyCanvas** renders the 3D space with interactive stars.  
- **StarNode** represents each project/star.  
- **Tooltip** shows hover previews, while **Modal** shows full project details.  
