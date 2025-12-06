# Implementation Plan: Book Master Plan

**Branch**: `1-book-master-plan` | **Date**: 2025-12-06 | **Spec**: `specs/001-book-master-plan/spec.md`
**Input**: Feature specification from `/specs/001-book-master-plan/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Initialize a Docusaurus v3 project for the "Physical AI Humanoid Robotics" textbook. Establish the folder structure for the 13-week curriculum (Foundations, ROS 2, Digital Twin, Isaac, VLA) and configure deployment to GitHub Pages via GitHub Actions.

## Technical Context

**Language/Version**: Node.js (LTS v18+), TypeScript/JavaScript (React 18)
**Primary Dependencies**: `@docusaurus/core` (v3), `@docusaurus/preset-classic`
**Storage**: File-based (Markdown/MDX)
**Testing**: `npm run build` (validates links/structure), optional `jest` for custom logic
**Target Platform**: GitHub Pages (Static Web Hosting)
**Project Type**: Web application (Static Site Generator)
**Performance Goals**: Lighthouse Score >90, Fast First Contentful Paint (FCP)
**Constraints**: Must work on GitHub Pages (no server-side dynamic rendering), Free Tier limitations
**Scale/Scope**: ~50-100 pages of content, standard Docusaurus scale

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Spec-Driven Development**: Spec exists at `specs/001-book-master-plan/spec.md`.
- [x] **Infrastructure as Code**: Site config and deployment workflow will be committed.
- [x] **AI-Augmented Workflow**: Plan generated via Agent.
- [x] **Quality & Accessibility**: Docusaurus provides accessible defaults; MDX allows rich content.
- [x] **Continuous Delivery**: GitHub Actions workflow will be set up for CD.
- [x] **Technical Constraints**: Docusaurus v3, GitHub Pages, MDX identified.

## Project Structure

### Documentation (this feature)

```text
specs/001-book-master-plan/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
frontend/
├── blog/                   # Blog posts (optional, may disable)
├── docs/                   # Main documentation (Textbook Content)
│   ├── 01-foundations/     # Weeks 1-2
│   ├── 02-ros2/            # Weeks 3-5
│   ├── 03-digital-twin/    # Weeks 6-7
│   ├── 04-isaac-sim/       # Weeks 8-10
│   └── 05-vla-humanoids/   # Weeks 11-13
├── src/
│   ├── components/         # Custom React components
│   ├── css/                # Custom styles
│   └── pages/              # Standalone pages (Home, Setup)
├── static/                 # Images, assets
├── docusaurus.config.js    # Main configuration
├── sidebars.js             # Sidebar navigation structure
├── package.json
└── .github/workflows/      # CI/CD pipeline
```

**Structure Decision**: Standard Docusaurus monorepo structure, nested under `frontend/`.

```text
(root)
├── frontend/
│   ├── docs/
│   ├── src/
│   ├── static/
│   ├── docusaurus.config.ts
│   └── sidebars.ts
```

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |
