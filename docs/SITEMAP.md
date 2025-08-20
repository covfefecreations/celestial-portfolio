# 🗺️ Sitemap Diagram (Mermaid)

This diagram shows the hierarchy of pages and sections in the Celestial Portfolio.

```mermaid
graph TD
    Home[Home Page] --> Galaxy[Interactive Galaxy]
    Home --> Navbar[Navbar]
    Navbar --> Projects[Projects Section]
    Navbar --> About[About Section]
    Navbar --> Contact[Contact Section]
    Projects --> ProjectModal[Project Modal Details]
    Contact --> Email[Email Link]
    Contact --> Social[Social Media Links]
    Home --> Footer[Footer]
```

## 🔎 Explanation
- **Home Page** contains the galaxy visualization and global navigation.  
- **Navbar** links to **Projects**, **About**, and **Contact**.  
- **Projects** lead to **modals** with details.  
- **Contact** has **email** and **social links**.  
- **Footer** is always visible.  
