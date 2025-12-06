# Data Model: Chapter Template

## Frontmatter Schema

Every chapter file MUST start with this YAML frontmatter:

```yaml
---
id: [unique-chapter-id]
title: [Full Chapter Title]
sidebar_label: [Short Nav Label]
description: [Brief summary for SEO and previews]
---
```

### Field Definitions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | String | Yes | Unique identifier for the document. Used in URL and linking. |
| `title` | String | Yes | The main heading (H1) of the page. |
| `sidebar_label` | String | Yes | Text shown in the left navigation sidebar. Keep short. |
| `description` | String | Yes | 1-2 sentences summarizing content. Used in meta tags. |

## Content Structure

The body of the document follows this structure:

1.  **Imports**: (Optional) React components like Tabs.
2.  **Learning Objectives**: Bullet points of what the reader will learn.
3.  **Introduction**: Brief context.
4.  **Content Sections**: H2 (`##`) and H3 (`###`) headers.
    *   *Interactive Placeholders*: Comments indicating where quizzes/code will go.
5.  **Summary**: Key takeaways.
