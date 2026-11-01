# House Staff App

A modern **e-commerce frontend application** for interior design and furniture, focused on performance, accessibility, and seamless user experience.

Frontend project built with **React, Vite, and TypeScript**.

## Live Demo

Live App: https://house-staff.onrender.com

Storybook: https://nadia-dot-com.github.io/house-staff

Storybook is used for **isolated UI component development and git documentation**.

---

## Features

### Backend Communication 
Integration with a dedicated Node.js/Express server. Managed the full data lifecycle (fetching, sending, and updating) and established seamless communication with the database.

### Server State Management
Powered by TanStack Query for efficient data fetching, automated caching, real-time synchronization, and seamless handling of loading/error states.

### Global State
Managed via React Context API + useReducer for scalable and predictable state transitions.

### TypeScript
Fully typed codebase using interfaces and custom types to describe data structures, eliminating runtime errors and providing superior developer experience through enhanced autocompletion.

### UI Components & Documentation
Storybook is used for isolated UI component development and documentation.

### Shopping Cart Management
Full CRUD operations on cart items with persistent data storage.

### User Authentication
Secure Google OAuth integration enabling a personalized user experience.

### Wishlist System
Users can save their favorite products. The wishlist works for both guest and authenticated users.

### Performance Optimization
Implemented Code Splitting using React.lazy and image optimization to reduce application loading times.

### Styling & UI
Styled using CSS Modules with reusable and maintainable component-based architecture.

### Responsive Design
Fully responsive interface optimized for desktop, tablet, and mobile devices.

### Accessibility (A11y) and SEO
Implementation of accessibility standards (semantic HTML, ARIA attributes) and SEO optimization (metadata and structured content).

### Animation 
Animations implemented with Framer Motion.

### Testing
Implemented unit and component tests using Vitest and React Testing Library to verify UI behavior, conditional rendering, routing interactions, and user events.
---

# Tech Stack

### Core
- React 19
- TypeScript
- Vite
- TanStack Query (React Query)
- Storybook

### State Management
- React Context API (Cart, User, UI state)

### Server State
- TanStack Query (React Query)

### Routing
- React Router DOM

### Styling
- CSS Modules

### UI Development
- Storybook

### Icons
- React Icons

### Deployment
- Render (Frontend + Backend)

### Testing
- Vitest
- React Testing Library

---

# Performance Optimization

To maintain a high Lighthouse score, the application includes:

- **Lazy Loading** – split the main bundle into smaller chunks using `React.lazy`
- **LCP Optimization** – critical product images use `fetchpriority="high"`
- **Accessibility improvements**:
  - ARIA labels
  - semantic HTML (`ul` / `li`)
  - keyboard navigation support

---

# Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/nadia-dot-com/house-staff.git
cd house-staff
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file:

```
VITE_API_URL=https://house-staff-server.onrender.com
VITE_NEW_PRODUCT_THRESHOLD_DAYS=40
VITE_WEB3FORMS_KEY=YOUR_KEY
```

## 4. Run the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5175
```

## Commit Convention

This project uses [commitlint](https://commitlint.js.org/) with the [conventional commits](https://www.conventionalcommits.org/) standard an d a [husky](https://typicode.github.io/husky/)pre-commit hook to enforce consistent commit messages.

All commit messages must follow the conventional commits format:

```
<type>[scope]: <description>
```

**Types:**

- `feat` - a new feature
- `fix` - a bug fix
- `docs` - documentation only changes
- `style` - code style changes (formatting, semicolons, etc)
- `refactor` - a code change that neither fixes a bug nor adds a feature
- `test` - adding or updating tests
- `chore` - other changes like build process or tooling changes