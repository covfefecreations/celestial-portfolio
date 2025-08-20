# 🚀 CI/CD Pipeline (Mermaid Diagram)

This diagram shows the continuous integration and deployment flow.

```mermaid
flowchart LR
    A[GitHub Push] --> B[GitHub Actions CI]
    B --> C[Install Dependencies]
    C --> D[Run Lint & Tests]
    D -->|Pass| E[Build Project]
    D -->|Fail| F[Report Failure]
    E --> G[Upload Build Artifact]
    G --> H[Vercel Deploy]
    H --> I[Live Production Site]
```

## 🔎 Explanation
- A push to **GitHub** triggers **GitHub Actions**.  
- Dependencies are installed, linting & tests run.  
- On success, the project is built and artifacts uploaded.  
- Vercel deploys the latest build to production automatically.  
