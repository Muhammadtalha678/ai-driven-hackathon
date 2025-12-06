# Physical AI Humanoid Robotics Textbook Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

<!-- 
Sync Impact Report:
- Version change: 1.0.0 (Initial Ratification)
- Principles defined: 5
- Templates checked: plan-template.md, spec-template.md, tasks-template.md (Status: Compatible)
-->

## Core Principles

### I. Spec-Driven Development (SDD)
<!-- Example: I. Library-First -->
All development must follow the Spec-Driven Development methodology. No code is written without a corresponding specification (`spec.md`) or plan (`plan.md`). Changes are defined first in documentation, then implemented in code. This ensures alignment, clarity, and reduced rework.

### II. Infrastructure as Code & Documentation
<!-- Example: II. CLI Interface -->
The product itself is a documentation site (Docusaurus) and its infrastructure (GitHub Pages). Both the content (textbook) and the container (site structure, deployment scripts) must be treated as code. Configuration, content, and deployment pipelines must be versioned and reproducible.

### III. AI-Augmented Workflow
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
Development is AI-first, utilizing tools like Spec-Kit Plus and AI Agents for generating specs, plans, and code. The human acts as the architect and reviewer. AI outputs must be verified, but AI is the primary engine for execution to maximize velocity.

### IV. Quality & Accessibility
<!-- Example: IV. Integration Testing -->
As an educational resource, content and code must be high-quality and accessible. "Quality" means clear, accurate technical content and clean, idiomatic code examples. "Accessibility" means the site must be usable by all (WCAG standards) and the content understandable to the target audience.

### V. Continuous Delivery
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
The textbook is a living document. Changes should be small, atomic, and deployable immediately to the live site. We prioritize a working "main" branch that is always ready for publication over long-lived feature branches.

## Technical Constraints
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

1.  **Platform**: The site must be built using **Docusaurus**.
2.  **Hosting**: The site must be deployed to **GitHub Pages**.
3.  **Content Format**: Content must be written in **MDX** (Markdown + React).
4.  **CI/CD**: Deployment must be automated via **GitHub Actions**.
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## Content Guidelines
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

1.  **Scope**: Materials must focus on **Humanoid Robotics** and **Physical AI**.
2.  **Clarity**: Concepts should be explained simply first, then with technical depth.
3.  **Visuals**: Use diagrams, images, and videos to illustrate physical concepts.
4.  **Code**: All code examples must be runnable and tested.
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

1.  **Supremacy**: This Constitution supersedes all other project guidelines.
2.  **Amendments**: Changes to these principles require a version bump and an update to this document (`/sp.constitution`).
3.  **Compliance**: All Pull Requests must be checked against these principles. Non-compliant changes must be rejected or justified via an Architectural Decision Record (ADR).
4.  **Versioning**: The Constitution follows semantic versioning (MAJOR for principle changes, MINOR for additions, PATCH for clarifications).

<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: 1.0.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->