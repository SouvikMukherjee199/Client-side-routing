# React Router Client‑Side Routing Demo (Vite + React 19 + RRD v7)

A concise, production‑style demo of client‑side routing in React using React Router v7, with a layout wrapper (Header + Footer), nested routes via Outlet, and a global light/dark theme toggle powered by Tailwind CSS v4.

## Key Features
- Client‑side routing with React Router v7
  - Nested routes using a layout (HOC) that wraps pages with a persistent Header and Footer
  - NavLink based navigation with active state styles
  - 404 fallback route
- Modern, responsive UI
  - Professional Header and Footer, full‑width backgrounds with centered content
  - Content‑rich Feature and Blog screens
  - Login and SignUp pages for auth flows (UI only)
- Dark/Light theme toggle
  - Theme state persisted in localStorage
  - Class‑based dark mode via Tailwind (dark class on <html>)
- Built with Vite for fast dev/build

## Tech Stack
- React 19
- React Router DOM 7
- Vite 7
- Tailwind CSS 4 (with @tailwindcss/vite)

## Project Structure (essentials)
- index.html – Vite entry HTML
- src/
  - main.jsx – App bootstrap
  - App.jsx – Router setup and route tree
  - index.css – Tailwind entry
  - components/
    - HOC/Default.HOC.jsx – Layout wrapper (Header + Outlet + Footer) and theme control
    - Header.jsx – Top navigation with dark/light toggle
    - Footer.jsx – Footer with resource links
    - Home.jsx – Landing page (index route)
    - Feature.jsx – Feature overview (content‑rich)
    - Team.jsx – Team page
    - Blog.jsx – Blog/Articles
    - Login.jsx – Sign in (UI only)
    - SignUp.jsx – Registration (UI only)
    - NotFound.jsx – 404 page
- tailwind.config.js – Tailwind configuration (darkMode: 'class')
- package.json – Scripts and dependencies

## Routing Overview
The route tree is defined in src/App.jsx using createBrowserRouter:
- "/" – Layout route (DefaultHOC)
  - index – Home
  - /Home – Home
  - /Feature – Feature
  - /Team – Team
  - /Blog – Blog
  - /Login – Login
  - /SignUp – SignUp
  - /* – NotFound (fallback)

DefaultHOC wraps all child routes with a shared Header and Footer via <Outlet />.

## Theme (Light/Dark)
- Global theme logic is in src/components/HOC/Default.HOC.jsx
  - Reads localStorage (key: theme) and falls back to system preference
  - Toggles dark class on document.documentElement (<html>) for Tailwind dark: styles
  - Exposes a toggle handler to Header via props
- Header shows a theme toggle (sun/moon) on desktop and inside the mobile menu
- Footer and pages include dark: variants for backgrounds, borders, and text

Tailwind config enables class-based dark mode:
```
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
}
```
After editing Tailwind config, restart the dev server.

## Getting Started
Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ or compatible package manager

Install
- npm install

Development
- npm run dev
- Open the printed local URL (Vite default is http://localhost:5173)

Production Build
- npm run build

Preview Production Build
- npm run preview

Lint
- npm run lint

## Customization
- Branding: Update the brand name/logo in Header.jsx and Footer.jsx ("Acme Corp" placeholder)
- Navigation: Add/edit NavLinks in Header.jsx and routes in App.jsx
- Pages: Add new components under src/components and register them in App.jsx
- Layout: Adjust max‑width containers (max-w-screen-xl) if you want truly full‑width inner content (currently backgrounds span full width; content is centered for readability)

## Troubleshooting
- Dark theme not switching
  - Ensure tailwind.config.js has darkMode: 'class'
  - Confirm the code toggles the dark class on <html> (Default.HOC.jsx)
  - Restart the dev server after adding/editing Tailwind config
  - Verify src/index.css imports Tailwind (it should contain @import "tailwindcss";)
- Styles not updating
  - Clear browser cache and hard refresh
  - Stop and restart the dev server
- Unexpected stylesheet request
  - index.html may include a link to /src/style.css (not required); you can remove it to avoid a 404 in the console



## License
- MIT 

## Acknowledgements
- React, Vite, React Router, Tailwind CSS teams and communities.
