# 🛠️ Developer Workflow (Flowchart)

This diagram shows the development & deployment pipeline.

```mermaid
flowchart TD
    A[Edit Code Locally] --> B[Commit Changes]
    B --> C[Push to GitHub]
    C --> D[CI Pipeline Runs]
    D --> E[Build & Test]
    E -->|Pass| F[Vercel Deploy]
    E -->|Fail| G[Fix Code & Retry]
    F --> H[Live Website Updated]
```

## 🔎 Explanation
- Developers edit code locally and commit.  
- Code is pushed to **GitHub**, triggering CI checks.  
- If tests/builds pass, **Vercel** auto-deploys.  
- Failures loop back into fixing and retrying.  
