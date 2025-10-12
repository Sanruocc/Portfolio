# Portfolio Website Sitemap

This sitemap provides an overview of the current portfolio website structure, including all pages and the main sections on the home page.

## Pages

- **Home (/)**: The main landing page featuring all portfolio sections
- **Projects (/projects)**: A page listing all projects
- **Project Detail (/projects/[slug])**: Individual project pages with detailed information

## Home Page Sections

The home page is structured as a single-page application with the following sections:

1. **Navigation**: Site-wide navigation menu
2. **Hero Section**: Introduction and main call-to-action
3. **Skills Section**: Display of technical skills and expertise
4. **Portfolio Grid**: Grid layout showcasing portfolio items
5. **Fiverr Gallery**: Gallery of Fiverr-related work or services
6. **About Section**: Personal information and background
7. **Contact Section**: Contact information and form
8. **Footer**: Site footer with additional links and information

## Site Structure Diagram

```mermaid
graph TD
    A[Home /] --> B[Hero Section]
    A --> C[Skills Section]
    A --> D[Portfolio Grid]
    A --> E[Fiverr Gallery]
    A --> F[About Section]
    A --> G[Contact Section]
    A --> H[Footer]
    A --> I[Navigation]

    J[Projects /projects] --> K[Project List]

    L[Project Detail /projects/[slug]] --> M[Project Content]

    I --> J
    K --> L
```

This diagram illustrates the navigation flow and the structure of the home page sections.