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

## How to Run Locally

### Prerequisites
- Node.js (v18 or later recommended)
- npm (bundled with Node.js)
- Git (for cloning and pushing)

Verify installations:
```bash
node -v
npm -v
git --version
Clone the Repository
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
Install Dependencies
bash
Copy code
npm install
Start Development Server
bash
Copy code
npm run dev
Open the URL shown in the terminal (commonly http://localhost:5173).

Build for Production
bash
Copy code
npm run build
Preview Production Build (optional)
bash
Copy code
npm run preview
Tests
No automated tests are included in this version.

What I Built & Why
Project Purpose
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

How It Works (Data Flow)
On load, the app requests a list of Pokémon (name + URL) using PokéAPI.

The app prefetches a moderate number of detailed Pokémon records (for clustering) and fetches details for the currently selected Pokémon on demand.

The UI displays the selected Pokémon (sprite, types, height, weight, stats).

The Kalman demo creates a short simulated noisy time series for a selected stat (e.g., HP) and runs a 1D Kalman filter to produce the smoothed estimate shown on a chart.

The clustering component builds a feature matrix (for example [height, weight] or [stat_total, speed]), normalizes features, runs a simple k-means style algorithm, and visualizes points color-coded by cluster.

How PokéAPI Is Used
https://pokeapi.co/api/v2/pokemon?limit=N retrieves the Pokémon list (names and URLs).

https://pokeapi.co/api/v2/pokemon/{name} fetches detailed attributes (stats, sprites, height, weight, types).
All fetching is done client-side via fetch() inside src/lib/pokeApi.js.

Where the Kalman Filter Fits
PokéAPI returns static values, so the Kalman demo simulates a noisy measurement series (random perturbations around a base stat).

A simple 1D Kalman filter smooths those noisy points.

The chart displays both raw and smoothed data to illustrate the effect.

How Clustering Is Done and Visualized
Select numerical features for X and Y (e.g., height vs weight).

Normalize features so scales match.

Run a simple K-means–style clustering.

Visualize clusters on a 2D scatterplot with color-coded points.

Tradeoffs, Limitations, and Future Improvements
Tradeoffs and Known Limitations
Simplified algorithms: Kalman filter and clustering are intentionally simple for clarity.

API rate limiting: PokéAPI is public; excessive requests may trigger rate limits.

Client-side only: No backend; performance may degrade with large data.

Clustering sensitivity: K-means depends on scaling and initialization.

Future Improvements
Add caching or backend support.

Provide more clustering and normalization options.

Add tests for Kalman and clustering utilities.

Improve chart interactivity and tooltips.

Deployment
You can host this project on platforms such as Vercel or Netlify.

Deploy on Vercel
Push this repository to GitHub.

Go to Vercel, import the repository, and deploy (Vite will be auto-detected).

Copy the live deployment URL for sharing or submission.

Author
Harleen Monder
First-year Computer Science student

License
MIT License