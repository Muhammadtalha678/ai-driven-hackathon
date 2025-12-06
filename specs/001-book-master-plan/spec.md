# Feature Specification: Book Master Plan

**Feature Branch**: `1-book-master-plan`
**Created**: 2025-12-06
**Status**: Draft
**Input**: User description: "Define textbook structure and Docusaurus project setup for Physical AI & Humanoid Robotics training program."

## User Scenarios & Testing

### User Story 1 - Project Initialization & Infrastructure (Priority: P1)

As a **Course Maintainer**, I need a configured Docusaurus repository deployed to GitHub Pages so that I can start publishing content immediately.

**Why this priority**: This is the foundation for all content. Without the site, there is no textbook.

**Independent Test**:
1.  Clone the repository.
2.  Run `npm start` (or equivalent) -> Site loads locally.
3.  Visit the live GitHub Pages URL -> Site loads production build.

**Acceptance Scenarios**:

1.  **Given** a fresh clone, **When** I run the installation command, **Then** all dependencies install without error.
2.  **Given** a running local server, **When** I navigate to the home page, **Then** I see the "Physical AI Humanoid Robotics" branding.
3.  **Given** a push to the `main` branch, **When** the GitHub Action completes, **Then** the changes are visible on the live site.

---

### User Story 2 - Curriculum Navigation Structure (Priority: P1)

As a **Learner**, I need to navigate through the 13-week curriculum chronologically or by topic so that I can follow the learning path.

**Why this priority**: The core value is the structured curriculum. Users must be able to find the right week/topic easily.

**Independent Test**: verify the Sidebar contains all high-level sections (Foundations, ROS 2, Digital Twin, Isaac, VLA) and they are expandable.

**Acceptance Scenarios**:

1.  **Given** the sidebar, **When** I look at the top level, **Then** I see sections for "Foundations", "ROS 2", "Digital Twin", "NVIDIA Isaac", and "VLA Models".
2.  **Given** the "ROS 2" section, **When** I expand it, **Then** I see "Week 3", "Week 4", and "Week 5" chapters.
3.  **Given** any chapter page, **When** I click "Next", **Then** I am taken to the next chronological chapter in the 13-week plan.

---

### User Story 3 - Platform Setup Guides (Priority: P2)

As a **Learner**, I need to choose and configure my hardware platform (Digital Twin, Edge Kit, or Cloud) so that I can execute the practical exercises.

**Why this priority**: Learners cannot do the exercises without a configured environment.

**Independent Test**: Verify existence of 3 distinct setup guides accessible from the "Getting Started" or "Prerequisites" section.

**Acceptance Scenarios**:

1.  **Given** the "Getting Started" section, **When** I view the "Platform Setup" page, **Then** I see options for "Digital Twin", "Physical AI Edge Kit", and "Cloud-Native".
2.  **Given** the "Digital Twin" guide, **When** I follow the instructions, **Then** I can launch the simulation environment (verified via screenshot/command output in docs).

### Edge Cases

-   **Mobile View**: How does the deep nesting of weeks/chapters display on small screens? (Sidebar must remain accessible).
-   **Offline Access**: What happens if the user has no internet? (Service worker/PWA support consideration).
-   **Broken Links**: How does the system handle links to chapters not yet written? (Should show 404 or "Coming Soon" placeholder).

### Assumptions & Dependencies

-   **Assumption**: The user has a GitHub account and permissions to create repositories.
-   **Assumption**: The content for the chapters will be written iteratively; this feature only sets up the *structure*.
-   **Dependency**: `Node.js` environment for local development.
-   **Dependency**: GitHub Actions quota for free tier deployment.

## Requirements

### Functional Requirements

-   **FR-001**: The system MUST be built using **Docusaurus v3**.
-   **FR-002**: The site MUST be deployed to **GitHub Pages** via GitHub Actions.
-   **FR-003**: The sidebar navigation MUST reflect the 5-part course structure:
    1.  Foundations of Physical AI (Weeks 1-2)
    2.  ROS 2 (Weeks 3-5)
    3.  Digital Twin Workflows (Weeks 6-7)
    4.  NVIDIA Isaac (Weeks 8-10)
    5.  VLA Models & Humanoids (Weeks 11-13)
-   **FR-004**: The site MUST include a "Capstone" section for the final project pipeline.
-   **FR-005**: The site MUST support **MDX** for interactive components (e.g., terminal snippets, tabs for different platforms).
-   **FR-006**: The homepage MUST clearly state the intended audience (Industry Engineers) and prerequisites (Python knowledge).
-   **FR-007**: Navigation MUST provide "Next/Previous" pagination between chapters.

### Key Entities

-   **CurriculumSection**: A high-level grouping (e.g., "ROS 2") containing multiple Weeks.
-   **WeekModule**: A specific week's content (e.g., "Week 3: ROS 2 Basics").
-   **PlatformGuide**: Specific setup instructions for one of the 3 hardware paths.

## Success Criteria

### Measurable Outcomes

-   **SC-001**: Site Lighthouse Performance score is >90 on desktop.
-   **SC-002**: All 5 top-level sections are visible in the sidebar on mobile and desktop.
-   **SC-003**: Deployment pipeline duration is < 5 minutes from commit to live site.
-   **SC-004**: 100% of the 13 weeks have a placeholder page/file created in the structure.
