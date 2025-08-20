# 🖱️ User Interaction Flow (Sequence Diagram)

This diagram shows what happens when a user interacts with the portfolio.

```mermaid
sequenceDiagram
    participant U as User
    participant SF as Starfield
    participant CN as CelestialNode
    participant ST as Store (Zustand)
    participant UI as UI/Tooltip
    participant D as Data

    U->>SF: Views animated background
    U->>CN: Clicks on a project node (star)
    CN->>ST: Update activeProject in global state
    ST->>UI: Trigger re-render with new project data
    UI->>D: Fetch project metadata
    D-->>UI: Return project details
    UI-->>U: Display tooltip / modal with info + link
    U->>UI: Clicks external link
    UI->>U: Redirects to project site/repo
```

## 🔎 Explanation
- User starts by interacting with a **CelestialNode** (project star).  
- The **Store** updates global state (`activeProject`).  
- UI components (like tooltips/modals) re-render and fetch the relevant **Data**.  
- Finally, the user can open external project links.  
