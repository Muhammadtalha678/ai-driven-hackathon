---
description: "Task list for Chapter Template System"
---

# Tasks: Chapter Template System

**Input**: Design documents from `specs/002-chapter-templates/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/
**Tests**: Manual verification of rendering (static site). No automated tests requested.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: Which user story this task belongs to (US1, US2, US3)

## Path Conventions

- `frontend/docs/templates/`: Location for the template file
- `specs/002-chapter-templates/`: Reference documentation

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and validation of environment

- [x] T001 Verify `frontend/docs` directory structure exists
- [x] T002 Verify Docusaurus dependencies are installed (run `npm list` in `frontend/`)
- [x] T003 [P] Create directory `frontend/docs/templates/` if it doesn't exist

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core decisions validation before template creation

- [x] T004 Confirm MDX support is active in `docusaurus.config.ts` (check for `@docusaurus/preset-classic`)
- [x] T005 [P] Verify `Tabs` component availability in node_modules

**Checkpoint**: Foundation ready - template creation can begin.

---

## Phase 3: User Story 1 - Author creates a new chapter (Priority: P1) 🎯 MVP

**Goal**: Standardized template so authors can quickly create consistent chapters.

**Independent Test**: Create a new file from the template, fill in dummy content, and verify it builds and renders correctly.

### Implementation for User Story 1

- [x] T006 [US1] Create `chapter.mdx` in `frontend/docs/templates/` with frontmatter schema (id, title, sidebar_label, description)
- [x] T007 [US1] Add "Learning Objectives" section to `frontend/docs/templates/chapter.mdx`
- [x] T008 [US1] Add "Summary" section to `frontend/docs/templates/chapter.mdx`
- [x] T009 [US1] Add instructional comments to `chapter.mdx` guiding authors on usage

**Checkpoint**: Template file exists with core structure.

---

## Phase 4: User Story 2 - Reader navigates a standardized chapter (Priority: P1)

**Goal**: Consistent navigation and layout (TOC, Next/Prev).

**Independent Test**: View a rendered chapter created from the template and verify navigation elements.

### Implementation for User Story 2

- [x] T010 [US2] Verify Table of Contents generation by adding sample headers (H2, H3) to `frontend/docs/templates/chapter.mdx`
- [x] T011 [US2] Document sidebar configuration requirement in `frontend/docs/templates/chapter.mdx` (comment explaining `sidebars.ts` usage for Next/Prev links)

**Checkpoint**: Template supports consistent navigation.

---

## Phase 5: User Story 3 - Author includes interactive placeholders (Priority: P2)

**Goal**: Placeholders for future interactive components (Quizzes, Code).

**Independent Test**: Verify template contains specific comments/sections for interactive elements.

### Implementation for User Story 3

- [x] T012 [US3] Add Admonition examples (note, tip, warning) to `frontend/docs/templates/chapter.mdx`
- [x] T013 [US3] Add Tabs component example (OS-specific instructions) to `frontend/docs/templates/chapter.mdx` with imports
- [x] T014 [US3] Add HTML comments `<!-- TODO: Interactive Quiz -->` as placeholders in `frontend/docs/templates/chapter.mdx`
- [x] T015 [US3] Add code block placeholder in `frontend/docs/templates/chapter.mdx`

**Checkpoint**: Template includes all interactive placeholders and Docusaurus features.

---

## Phase 6: Polish & Validation

**Purpose**: Final verification and documentation

- [x] T016 Validate `chapter.mdx` against `specs/002-chapter-templates/contracts/chapter.mdx`
- [x] T017 Create a test chapter `frontend/docs/test-chapter.mdx` from template to verify build (manual test)
- [x] T018 Delete test chapter `frontend/docs/test-chapter.mdx` after verification

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup.
- **User Stories (Phase 3+)**: All depend on Foundational.
  - US1 (Structure) is required for US2 and US3.
  - US2 and US3 can be done in parallel after US1.
- **Polish (Phase 6)**: Depends on all user stories.

### User Story Dependencies

- **US1 (Structure)**: Base template file creation.
- **US2 (Nav)**: Adds content structure to US1 file.
- **US3 (Interactive)**: Adds specific component examples to US1 file.

### Parallel Opportunities

- T003, T005 can run in parallel with T001, T002.
- T012, T013, T014, T015 can be implemented in any order within US3.

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Setup & Foundation.
2. Implement T006-T009 (Basic Template).
3. Validate basic structure.

### Full Feature

1. Complete US1.
2. Add US2 (Navigation structure).
3. Add US3 (Interactive placeholders & Components).
4. Perform final validation (T016-T018).
