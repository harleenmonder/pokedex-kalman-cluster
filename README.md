# PokéStats

PokéStats is a React-based web application that visualizes Pokémon statistics using data from the [PokéAPI](https://pokeapi.co/). It features data filtering, clustering analysis, and a Kalman filter to smooth performance metrics for better visualization and comparison.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Features](#features)
4. [Prerequisites](#prerequisites)
5. [Installation & Running Locally](#installation--running-locally)
6. [Testing](#testing)
7. [How It Works](#how-it-works)
8. [Tradeoffs and Limitations](#tradeoffs-and-limitations)
9. [Future Improvements](#future-improvements)
10. [License](#license)

---

## Overview

This project explores how data science and visualization can enhance understanding of datasets — in this case, Pokémon statistics. It combines web development (React), data analysis (clustering), and signal processing (Kalman filtering) to provide meaningful, interactive insights.

---

## Architecture

Project structure:

```text
pokedex-kalman-cluster/
├── src/
│   ├── components/           # Reusable UI components (charts, cards, tables)
│   ├── data/                 # Data fetching and transformation utilities
│   ├── hooks/                # Custom React hooks for state/effect management
│   ├── utils/                # Kalman filter, clustering, and helper functions
│   ├── App.js                # Main application logic
│   └── index.js              # Entry point
├── public/
│   └── index.html
├── package.json
└── README.md
This separation of concerns keeps the app maintainable and scalable: components handle display, utilities handle computation, and hooks manage stateful logic.
```

---

## Features

- Fetches Pokémon data dynamically from the PokéAPI.

- Applies a Kalman filter to smooth noisy stat data.

- Implements k-means clustering to group Pokémon by attribute similarity.

- Displays interactive charts for comparison (using Recharts).

- Allows filtering and searching by Pokémon type.


Prerequisites

Please install:


- Node.js (v18 or higher)

- npm or Yarn

- Git

Verify installations:

```bash
node -v
npm -v
git --version
```

Installation & Running Locally
Clone the repository:

```bash
git clone https://github.com/yourusername/pokestats.git
cd pokestats
```

Install dependencies:

```bash
npm install
# or
yarn
```

Start the development server:

```bash
npm start
# or
yarn start
```

Build for production:

```bash
npm run build
# or
yarn build
```

The app will run locally at http://localhost:5173.


Testing

If tests are added, run them with:

```bash
npm test
# or
yarn test
```

---

## How It Works

- PokéAPI Integration
    - The app fetches data directly from the PokéAPI, extracting key attributes such as attack, defense, speed, and type. These values feed the visualization components.

- Kalman Filter
    - A 1-D Kalman filter smooths Pokémon stat data, reducing variance and outliers for more consistent graphs. It is implemented as a helper in src/lib/kalman.js.

- Clustering
    - Pokémon are grouped using the k-means clustering algorithm based on selected attributes (e.g., attack, defense, speed). Clusters are visualized with color-coded charts to highlight patterns.

- Visualization
    - The project uses Recharts for interactive data visualization (e.g., radar and bar charts). Data flow: API → transformation → clustering → visualization components.

---

## Tradeoffs and Limitations

- PokéAPI rate limits can slow large fetches.

- The Kalman filter assumes consistent sampling intervals, which may not perfectly match API realities.

- Clustering quality depends on feature selection and scaling.

- Client-only app; there is no backend persistence.

---

## Future Improvements
- Cache API responses for better performance.

- Add alternative clustering methods (e.g., DBSCAN).

- Introduce authentication and saved user preferences.

- Add automated tests with Jest and React Testing Library.

---

## License

This project is open-source and available under the MIT License.