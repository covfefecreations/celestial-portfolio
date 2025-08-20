# 🌐 Infrastructure Diagram (Mermaid)

This diagram shows the hosting and delivery infrastructure for Celestial Portfolio.

```mermaid
flowchart TD
    Dev[Developer Machine] -->|Push Code| GH[GitHub Repo]
    GH -->|Triggers Build| CI[GitHub Actions CI/CD]
    CI --> Vercel[Vercel Hosting]
    Vercel --> CDN[Global CDN Edge Network]
    CDN --> Browser[User's Browser]
    DNS[Domain & DNS] --> Vercel
```

## 🔎 Explanation
- **Developer Machine** pushes code to **GitHub**.  
- **GitHub Actions** runs CI/CD pipelines.  
- **Vercel** handles builds and deployments.  
- **DNS** routes traffic to Vercel.  
- **Vercel’s CDN** serves optimized assets globally to the **user’s browser**.  
