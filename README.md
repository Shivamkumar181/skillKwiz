# skillKwiz

**skillKwiz** is a modern Next.js educational web platform built to empower students with skill development, interactive training modules, and placement preparation resources.

This repository represents a completed **company assessment project**. I inherited a legacy/buggy codebase and successfully optimized the architecture, fixed critical routing bugs, overhauled the design layout, and integrated updated branding.

---

##  Assessment Deliverables & Bug Fixes

I refactored the codebase to resolve several structural and visual issues requested during the company assessment:

*   **Routing & Navigation Fixes:** Resolved broken dynamic routes, fixed nested page links, and eliminated navigation loops to ensure smooth user transitions.
*   **Design Overhaul & Responsiveness:** Patched broken layout shifts, standardized padding/margins, and made the entire application fully responsive across mobile, tablet, and desktop screens.
*   **Logo & Branding Update:** Replaced outdated placeholders with the official logo, adjusting asset scaling and preventing layout cumulative shift (CLS).
*   **State & Performance Optimization:** Cleaned up unused dependencies, fixed console errors, and aligned component rendering with Next.js best practices.

---

## Core Application Features

*   **Placement Training:** Practice tracks engineered to prepare users for technical hiring rounds.
*   **Skill Development:** Structured technical pathways for step-by-step learning.
*   **Interactive Assessments:** Real-time quiz mechanisms to test and retain user skills.

---

## Tech Stack

*   Next.js
*   Typescript
*   Tailwind
*   Vercel

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have Node.js (v18.x or later) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```

2. **Navigate into the directory:**
   ```bash
   cd skillKwiz
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

Start the local development server:

```bash
npm run dev

---

## Production Deployment

The project is optimized for deployment via **Vercel**:

1. Push your updated code to your GitHub repository.
2. Import the repository into the Vercel dashboard.
3. Vercel automatically detects the Next.js build settings and deploys the site on every push.
