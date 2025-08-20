# 🗄️ Data Model (Entity-Relationship Diagram)

This diagram shows how project-related data entities connect.

```mermaid
erDiagram
    PROJECT {
      string id
      string title
      string description
      string link
      string[] tags
    }
    TAG {
      string id
      string name
    }
    METADATA {
      string createdAt
      string updatedAt
      string featured
    }

    PROJECT ||--o{ TAG : has
    PROJECT ||--|| METADATA : includes
```

## 🔎 Explanation
- **Project** is the central entity, containing metadata and referencing tags.  
- **Tags** allow categorization and filtering.  
- **Metadata** holds creation/update timestamps and special flags (e.g., featured).  
