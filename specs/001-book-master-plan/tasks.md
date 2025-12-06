---
description: "Task list template for feature implementation"
---

# Tasks: Book Master Plan

**Input**: Design documents from `/specs/001-book-master-plan/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/docusaurus-config.js

**Tests**: Tests are OPTIONAL as they were not explicitly requested. Validation is done via build and manual inspection.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: [US1], [US2], [US3] maps to user stories
- All tasks include exact file paths

## Path Conventions

- **Project Root**: `(root)`
- **Docusaurus Root**: `frontend/`
- **Docs**: `frontend/docs/`
- **Source**: `frontend/src/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Docusaurus v3 project (classic preset) in `frontend/` directory
- [x] T002 [P] Configure `frontend/docusaurus.config.ts` with metadata from contracts/docusaurus-config.js
- [x] T003 [P] Install and configure GitHub Actions workflow for pages in `.github/workflows/deploy.yml`
- [x] T004 [P] Update `frontend/package.json` with project details and build scripts
- [x] T005 [P] Configure custom branding colors in `frontend/src/css/custom.css` (Research Dec 4)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T006 Create empty directories for all 5 curriculum modules in `frontend/docs/` (01-foundations, 02-ros2, 03-digital-twin, 04-isaac-sim, 05-vla-humanoids)
- [x] T007 [P] Create `frontend/docs/setup/` directory for platform guides
- [x] T008 Configure `frontend/sidebars.ts` to export explicit structure for the 5 modules (Research Dec 2)
- [x] T009 [P] Create `frontend/src/pages/index.tsx` with "Physical AI Humanoid Robotics" branding and audience info (FR-006)

**Checkpoint**: Foundation ready - Docusaurus builds, homepage loads, directory structure exists.

---

## Phase 3: User Story 1 - Project Initialization & Infrastructure (Priority: P1) 🎯 MVP

**Goal**: A configured Docusaurus repository deployed to GitHub Pages so that I can start publishing content immediately.

**Independent Test**: Run `npm start` to see local site, push to main to see GitHub Pages deployment.

### Implementation for User Story 1

- [x] T010 [US1] Update `frontend/docusaurus.config.ts` to ensure `deploymentBranch` is set to 'gh-pages'
- [x] T011 [US1] Verify `.github/workflows/deploy.yml` correctly builds and deploys to `gh-pages` branch
- [x] T012 [US1] Add `frontend/README.md` with "Project Initialization" instructions from `specs/001-book-master-plan/quickstart.md`
- [x] T013 [US1] Run initial build and deployment test (manual trigger)

**Checkpoint**: Site is live on GitHub Pages.

---

## Phase 4: User Story 2 - Curriculum Navigation Structure (Priority: P1)

**Goal**: Navigate through the 13-week curriculum chronologically or by topic.

**Independent Test**: Verify Sidebar contains all high-level sections and they are expandable.

### Implementation for User Story 2

- [x] T014 [P] [US2] Create `frontend/docs/01-foundations/_category_.json` and placeholders for Week 1-2
- [x] T015 [P] [US2] Create `frontend/docs/02-ros2/_category_.json` and placeholders for Week 3-5
- [x] T016 [P] [US2] Create `frontend/docs/03-digital-twin/_category_.json` and placeholders for Week 6-7
- [x] T017 [P] [US2] Create `frontend/docs/04-isaac-sim/_category_.json` and placeholders for Week 8-10
- [x] T018 [P] [US2] Create `frontend/docs/05-vla-humanoids/_category_.json` and placeholders for Week 11-13
- [x] T019 [US2] Validate `frontend/sidebars.ts` correctly links all new category JSONs

**Checkpoint**: Sidebar navigation is complete and functional.

---

## Phase 5: User Story 3 - Platform Setup Guides (Priority: P2)

**Goal**: Choose and configure hardware platform (Digital Twin, Edge Kit, or Cloud).

**Independent Test**: Verify existence of 3 distinct setup guides accessible from "Getting Started".

### Implementation for User Story 3

- [x] T020 [P] [US3] Create `frontend/docs/setup/digital-twin.md` with Digital Twin setup content
- [x] T021 [P] [US3] Create `frontend/docs/setup/edge-kit.md` with Edge Kit setup content
- [x] T022 [P] [US3] Create `frontend/docs/setup/cloud-native.md` with Cloud setup content
- [x] T023 [US3] Add "Setup" section to `frontend/sidebars.ts` or Navbar to make these guides accessible

**Checkpoint**: Setup guides are accessible and render correctly.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T024 Check all links and navigation (Next/Previous) (FR-007)
- [x] T025 Validate Mobile View of sidebar (Edge Case)
- [x] T026 Run `npm run build` to ensure no broken links before final handoff
- [x] T027 Clean up any default Docusaurus "tutorial" files (e.g., `intro.md`, `tutorial-extras`)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Starts immediately.
- **Foundational (Phase 2)**: Depends on Setup.
- **User Stories**:
    - **US1 (Infra)**: Can start after Setup, but logically flows after Foundation to verify deployment of *structure*.
    - **US2 (Curriculum)**: Depends on Foundation (directories must exist).
    - **US3 (Setup)**: Depends on Foundation (docs folder must exist).
- **Polish**: Depends on all stories.

### Parallel Opportunities

- Tasks T014-T018 (Creating module placeholders) can be done in parallel.
- Tasks T020-T022 (Creating setup guides) can be done in parallel.
- US2 and US3 could theoretically proceed in parallel after Phase 2.

---

## Implementation Strategy

### MVP First (User Story 1 & 2)

1.  Complete Phase 1 (Setup) & Phase 2 (Foundation).
2.  Complete Phase 4 (Curriculum Structure) - ensures the "Book" exists.
3.  Complete Phase 3 (Deployment) - publishes the book.
4.  Add Phase 5 (Setup Guides) as specific content increment.

### Parallel Team Strategy

1.  **Lead**: Setup & Foundation (T001-T009).
2.  **Dev A**: US2 (Curriculum Structure) (T014-T019).
3.  **Dev B**: US3 (Setup Guides) (T020-T023).
4.  **Lead**: US1 (Deployment) & Polish.
