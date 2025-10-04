# Pokédex with Kalman Filters and Clustering

## Overview
This project is a Pokédex web application built with React and Vite that demonstrates data smoothing with a Kalman filter and simple clustering visualization using Pokémon data from the PokéAPI.  
The goal is to combine frontend engineering and basic data-processing concepts in a single interactive demo.

---

## Contents

- How to run locally (prereqs, install, start/build, tests)
- What I built and why (architecture, how it works, how PokéAPI is used, where Kalman fits, clustering details)
- Tradeoffs, limitations and future improvements

---

## How to run locally

### Prerequisites
- Node.js (v18 or later recommended)
- npm (bundled with Node.js)
- Git (for cloning and pushing)

Verify installations:
```bash
node -v
npm -v
git --version
Clone the repository
Replace <your-username> with your GitHub username or use the repository URL you created.

bash
Copy code
git clone https://github.com/<your-username>/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster
Example:

bash
Copy code
git clone https://github.com/harleenmonder/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster
Install dependencies
bash
Copy code
npm install
Start development server
bash
Copy code
npm run dev
Open the URL shown in the terminal (commonly http://localhost:5173).

Build for production
bash
Copy code
npm run build
Preview production build (optional)
bash
Copy code
npm run preview
Tests
No automated tests are included in this version.

What I built & why
Project purpose
The app demonstrates how a web UI can combine API data with basic analytical techniques:

Provide a friendly interface for exploring Pokémon data.

Demonstrate a Kalman filter for smoothing noisy observations.

Visualize clustering to group Pokémon by numeric features.

Architecture
The project follows a component-based React structure with clear separation of concerns.

pgsql
Copy code
pokedex-kalman-cluster/
├── public/
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx
│   │   ├── KalmanDemo.jsx
│   │   └── ClusterPlot.jsx
│   ├── lib/
│   │   └── pokeApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── README.md
└── vite.config.js
src/components/ contains the UI components for the Pokémon card, Kalman demo, and clustering plot.

src/lib/pokeApi.js centralizes PokéAPI fetch logic.

App.jsx manages state, coordinates data fetching, and composes components.

index.css contains the layout and card styles.

How it works (data flow)
On load, the app requests a list of Pokémon (name + URL) using PokéAPI.

The app prefetches a moderate number of detailed Pokémon records (for clustering) and fetches details for the currently selected Pokémon on demand.

The UI displays the selected Pokémon (sprite, types, height, weight, stats).

The Kalman demo creates a short simulated noisy time series for a selected stat (for example HP) and runs a 1D Kalman filter to produce the smoothed estimate shown on a chart.

The clustering component builds a feature matrix (for example [height, weight] or [stat_total, speed]), normalizes features, runs a simple k-means style algorithm, and visualizes points color-coded by cluster.

How PokéAPI is used
https://pokeapi.co/api/v2/pokemon?limit=N to get the list of Pokémon (names and detail URLs).

https://pokeapi.co/api/v2/pokemon/{name} to fetch detailed attributes for a chosen Pokémon (stats, sprites, height, weight, types).
All fetching is done client-side via fetch() inside src/lib/pokeApi.js.

Where the Kalman filter fits
PokéAPI returns static attribute values, so the Kalman demo simulates a noisy measurement series (e.g., small random perturbations around the base stat).

A simple 1D Kalman filter implementation consumes those noisy observations and produces a smoothed estimate sequence.

The chart displays raw noisy points and the Kalman-smoothed line to illustrate how Kalman filtering reduces measurement noise.

How clustering is done and visualized
Select numerical features for X and Y (e.g., height vs weight or stat totals).

Normalize features (min-max or z-score) so dimensions are comparable.

Run a simple K-means style clustering on the normalized data (small N, client-side).

Visualize clusters on a 2D scatterplot with color-coded points. Clicking or hovering can reveal the Pokémon name or stats (if implemented).

Tradeoffs, limitations and future improvements
Tradeoffs and known limitations
Simplified algorithms: Kalman filter and clustering are implemented in a simple form to keep the demo readable and easy to understand, not production-grade.

API rate limiting: PokéAPI is a public API with rate limits. The app fetches a modest number of details to avoid throttling; you may reduce the prefetch count if you experience slow loading or 429 responses.

Client-side only: All processing is done in the browser (no backend). For larger datasets or production use, server-side caching and preprocessing would be needed.

Clustering sensitivity: K-means requires selecting k and is sensitive to feature scaling and initialization.

Future improvements
Add server-side caching or a simple backend to reduce repeated PokéAPI calls.

Provide UI controls to select feature normalization and clustering parameters.

Add unit tests for the Kalman and clustering utilities.

Improve visualizations with interactive charting libraries and better hover/tooltips.

Deployment
Recommended hosts: Vercel or Netlify.

Vercel example

Push the repository to GitHub.

Sign in to Vercel, import the repository, accept defaults (Vite detected).

Deploy and copy the live URL for submission.

Author
Harleen Monder
First-year Computer Science student

License
MIT License