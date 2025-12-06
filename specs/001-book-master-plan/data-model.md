# Data Model & File Structure: Book Master Plan

**Feature**: Book Master Plan
**Date**: 2025-12-06

## Directory Hierarchy (The "Data Model" for Static Sites)

The content hierarchy maps directly to the sidebar structure.

```text
docs/
├── 01-foundations/
│   ├── _category_.json   # Defines "Foundations of Physical AI" label
│   ├── week-1-intro.md
│   └── week-2-math.md
├── 02-ros2/
│   ├── _category_.json   # Defines "ROS 2" label
│   ├── week-3-basics.md
│   ├── week-4-nav2.md
│   └── week-5-manipulation.md
├── 03-digital-twin/
│   ├── _category_.json
│   ├── week-6-intro.md
│   └── week-7-sim.md
├── 04-isaac-sim/
│   ├── _category_.json
│   ├── week-8-setup.md
│   ├── week-9-env.md
│   └── week-10-training.md
├── 05-vla-humanoids/
│   ├── _category_.json
│   ├── week-11-vla.md
│   ├── week-12-humanoid.md
│   └── week-13-capstone.md
└── setup/
    ├── digital-twin.md
    ├── edge-kit.md
    └── cloud-native.md
```

## Configuration Entities

### `docusaurus.config.js`
The central configuration object.

| Field | Type | Description |
|-------|------|-------------|
| `title` | String | "Physical AI Humanoid Robotics Textbook" |
| `url` | String | "https://[username].github.io" |
| `baseUrl` | String | "/[repo-name]/" |
| `organizationName` | String | GitHub username |
| `projectName` | String | Repository name |
| `presets` | Array | `['classic', ...]` configuration |
| `themeConfig.navbar` | Object | Navigation bar links (Docs, Blog, GitHub) |
| `themeConfig.footer` | Object | Footer links and copyright |

### `_category_.json`
Metadata for sidebar groups.

```json
{
  "label": "Foundations of Physical AI",
  "position": 1,
  "link": {
    "type": "generated-index"
  }
}
```
