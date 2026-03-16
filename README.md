# House Staff App

A modern **e-commerce frontend application** for interior design and furniture, focused on performance, accessibility, and seamless user experience.

Frontend project built with **React, Vite, and TypeScript**.

## Live Demo

Live App: https://house-staff.onrender.com

Storybook: https://nadia-dot-com.github.io/shop

Storybook is used for **isolated UI component development and documentation**.

---

# Key Features

### Shopping Cart Management
Full CRUD operations on cart items with persistent storage.

### User Authentication
Secure **Google OAuth integration** for personalized user experience.

### Optimized Checkout Flow
Mobile-first design with a custom-built modal and scroll-lock mechanics.

### Wishlist System
Users can save favorite products. The wishlist works for both **guest and authenticated users**.

### Performance Focused
Implemented **Code Splitting (React.lazy)** and image optimization to ensure fast loading times.

### Responsive Design
Fully responsive layout optimized for **desktop, tablet, and mobile devices (iOS/Android)**.

---

# Tech Stack

### Core
- React 18
- TypeScript
- Vite

### State Management
- React Context API (Cart, User, UI state)

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
git clone https://github.com/nadia-dot-com/shop.git
cd shop
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