# Research: Chapter Template System

## Decisions

### 1. MDX Comments for Placeholders
**Decision**: Use standard HTML comments `<!-- ... -->` for block-level placeholders and `{/* ... */}` for inline JSX comments.
**Rationale**: Docusaurus treats MDX files as Markdown first. HTML comments are widely understood by authors and don't render in the output.
**Alternatives**:
- `[//]: # (Comment)`: Harder to read.
- `{/* Comment */}`: specific to JSX, might confuse non-dev authors if used outside code blocks.

### 2. Frontmatter Schema
**Decision**: Enforce `id`, `title`, `sidebar_label`, `description`.
**Rationale**:
- `id`: Stable identifier for linking.
- `title`: H1 of the page.
- `sidebar_label`: Shorter name for navigation.
- `description`: SEO and social sharing.
**Alternatives**: Auto-generated sidebar labels (can be too long).

### 3. Docusaurus Components
**Decision**: Explicitly import `Tabs` and `Admonitions` examples.
**Rationale**: Tabs require imports (`import Tabs from '@theme/Tabs';`). Admonitions (`:::note`) are built-in syntax but authors need examples.

## Open Questions (Resolved)

- **Location**: `frontend/docs/templates/chapter.mdx` allows previewing.
