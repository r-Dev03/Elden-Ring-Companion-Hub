# Elden Ring Companion Hub

**Fan Companion App for Logging In-Game Strategies and Live Search**

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)](https://axios-http.com/)

<!-- Add screenshot or gif here when available -->

## Overview

Elden Ring Companion Hub is a purely client-side fan companion app built for fellow Tarnished. Users can log and manage personal notes and strategies across bosses, areas, items, and crafting, with live search powered by the Elden Ring open-source API. All data is persisted locally via localStorage, requiring no backend or account.

**Core Features:**
- Log and manage notes and strategies for bosses, areas, items, and crafting
- Live search via the Elden Ring open-source API
- Data persistence with localStorage — no account required
- UI designed to match the aesthetic of the Lands Between

## Tech Stack

**Frontend:**
- React
- JSX
- Axios (API requests)
- localStorage (client-side persistence)
- HTML5 / CSS3

## Architecture

### Component Structure
```
┌───────────────────────────────────┐
│            App.jsx                │
└──────────────┬────────────────────┘
               │
┌──────────────▼────────────────────┐
│            Components             │
│          - SearchBar              │
│          - NotesList              │
│          - NoteForm               │
│          - ResultCard             │
└──────────────┬────────────────────┘
               │
┌──────────────▼────────────────────┐
│           Data Layer              │
│     - Elden Ring API (Axios)      │
│        - localStorage             │
└───────────────────────────────────┘
```

### Data Flow

**Notes / Strategies**
- Created and managed via React state
- Persisted to localStorage on every update
- Loaded from localStorage on app mount

**Search**
- User query sent to Elden Ring open-source API via Axios
- Results rendered as cards in real time

## Installation

### Prerequisites
```bash
node -v   # v18 or higher recommended
```

### Setup
```bash
# Clone repository
git clone https://github.com/r-Dev03/Elden-Ring-Companion-Hub.git
cd Elden-Ring-Companion-Hub

# Install dependencies
npm install

# Start the app
npm start
```

Access the application at: `http://localhost:3000`

## Usage

### Search
- Use the search bar to query bosses, areas, items, and crafting materials
- Results are fetched live from the Elden Ring open-source API and displayed as cards

### Notes & Strategies
- Add notes tied to any boss, area, or item
- Notes are saved automatically to localStorage and persist across sessions
- Edit or delete notes at any time

## License

MIT License - see LICENSE file for details
