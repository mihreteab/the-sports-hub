# The Sports Hub

A modern sports application for browsing leagues, fixtures, and match details. Built with React Router, TypeScript, and Tailwind CSS, powered by [The Sports DB](https://www.thesportsdb.com/) API.

---

## Live Demo

**[View live application →](https://the-sports-hub-two.vercel.app/matches)**

---

## Features

- Browse leagues and competitions
- View fixtures and match schedules
- Match details with events and timeline
- Server-side rendering and fast navigation
- Responsive UI with Tailwind CSS
- TypeScript for type safety

---

## Prerequisites

- **Node.js** 18.x or later ([nodejs.org](https://nodejs.org))
- **npm** (included with Node.js) or **pnpm** / **yarn**

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/the-sports-hub.git
cd the-sports-hub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the project root (you can copy from `.env.example` if provided, or create one with):

```env
# The Sports DB API (free tier)
VITE_SPORTS_DB_BASE_URL=https://www.thesportsdb.com/api/v1/json/3
VITE_SPORTS_DB_TIMELINE_API_KEY=123
VITE_SPORTS_DB_DEFAULT_LEAGUE_ID=4328
```

- **VITE_SPORTS_DB_BASE_URL** — Base URL for The Sports DB API. The `3` in the path is a public demo key; replace with your own key from [The Sports DB](https://www.thesportsdb.com/api.php) if needed.
- **VITE_SPORTS_DB_TIMELINE_API_KEY** — API key for timeline/event endpoints (use your key in production).
- **VITE_SPORTS_DB_DEFAULT_LEAGUE_ID** — Default league ID (e.g. `4328` for English Premier League).

---

## Running locally

### Development

Start the dev server with hot reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

Build and run the production server:

```bash
npm run build
npm run start
```

The app will be served (default port may vary; check the terminal output).

---

## Available scripts

| Command             | Description               |
| ------------------- | ------------------------- |
| `npm run dev`       | Start development server  |
| `npm run build`     | Create production build   |
| `npm run start`     | Serve production build    |
| `npm run typecheck` | Run TypeScript type check |
| `npm run lint`      | Run ESLint                |
| `npm run format`    | Format code with Prettier |

---

## Tech stack

- [React](https://react.dev/) & [React Router](https://reactrouter.com/) v7
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [The Sports DB](https://www.thesportsdb.com/) API

---

## License

This project is private. Use and distribution are subject to the repository owner’s terms.

---

_The Sports Hub_ — built with React Router and The Sports DB.
