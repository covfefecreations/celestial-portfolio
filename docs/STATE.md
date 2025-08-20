# 🔄 Application State Flow (State Diagram)

This diagram shows how the Celestial Portfolio transitions between states.

```mermaid
stateDiagram-v2
    [*] --> Idle

    Idle --> ProjectSelected : User clicks a star
    ProjectSelected --> TooltipOpen : Hover on node
    ProjectSelected --> ModalOpen : Click node for details
    TooltipOpen --> ProjectSelected : Mouse leaves
    ModalOpen --> ProjectSelected : Close modal

    ProjectSelected --> Idle : User clicks empty space
```

## 🔎 Explanation
- **Idle**: No active selection.  
- **ProjectSelected**: A celestial node is active in the global state.  
- **TooltipOpen**: Hover state for preview info.  
- **ModalOpen**: Full detail view of the project.  
- State resets to **Idle** if the user clicks outside.  
