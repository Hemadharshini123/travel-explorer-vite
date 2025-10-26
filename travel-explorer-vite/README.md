# Travel Explorer (Vite + React + Tailwind + Framer Motion)

A lightweight, responsive frontend app showcasing travel destinations using local mock JSON data.
Includes Dark Mode toggle and animated cards (Framer Motion).

## Features
- Responsive grid of destination cards
- Category filters and search
- Dark Mode (class-based)
- Card animations using Framer Motion

## Setup

1. Clone or unzip the project.
2. Install dependencies:
```bash
npm install
```
3. Run dev server:
```bash
npm run dev
```
4. Open the URL shown by Vite (usually http://localhost:5173).

## Notes about Tailwind
This project uses Tailwind CSS (configured via `tailwind.config.cjs` and `postcss.config.cjs`). After `npm install`, `npm run dev` will work normally with Vite and Tailwind.

## Files of interest
- `src/data/destinations.json` — mock data
- `src/components/DestinationCard.jsx` — card UI + motion
- `src/components/FilterBar.jsx` — filters + search + dark toggle
- `src/App.jsx` — main app

## Submission
- Make sure to include screenshots in the README before submitting.
- Push to GitHub and send the repository link as required.

Enjoy — want me to also create a short GIF or screenshots inside the ZIP? I can add placeholder screenshots if you'd like.
