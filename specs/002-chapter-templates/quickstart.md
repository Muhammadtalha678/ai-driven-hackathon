# Quickstart: Creating a New Chapter

This guide explains how to use the Chapter Template system to create consistent textbook chapters.

## Prerequisites

- Local development environment set up (`npm install`, `npm start`).
- Access to the `frontend/docs` directory.

## Steps

1.  **Locate the Template**:
    The master template is located at `frontend/docs/templates/chapter.mdx`.

2.  **Copy the File**:
    Duplicate the template to your target directory.
    ```bash
    cp frontend/docs/templates/chapter.mdx frontend/docs/02-ros2/my-new-chapter.mdx
    ```

3.  **Update Frontmatter**:
    Open the new file and edit the top section:
    - `id`: unique-slug-for-url
    - `title`: Full Title of the Chapter
    - `sidebar_label`: Short Title
    - `description`: Summary

4.  **Add Content**:
    - Fill in "Learning Objectives".
    - Write your content using Markdown and Docusaurus components (Admonitions, Tabs).
    - Leave comments for future interactive parts.

5.  **Verify**:
    - Run the dev server: `npm start` (in `frontend/` directory).
    - Navigate to your new chapter to check rendering.
