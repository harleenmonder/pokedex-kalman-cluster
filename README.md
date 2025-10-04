Pokédex with Kalman Filters and Clustering
Overview

This project is a Pokédex web application built with React and Vite that demonstrates data smoothing with a Kalman filter and simple clustering visualization using Pokémon data from the PokéAPI.
The goal is to combine frontend engineering and basic data-processing concepts in a single interactive demo.

Contents

How to run locally (prereqs, install, start/build, tests)

What I built and why (architecture, how it works, how PokéAPI is used, where Kalman fits, clustering details)

Tradeoffs, limitations, and future improvements

How to Run Locally
Prerequisites

Node.js (v18 or later recommended)

npm (bundled with Node.js)

Git (for cloning and pushing)

Verify installations:

node -v
npm -v
git --version

Clone the Repository

Replace <your-username> with your GitHub username or use the repository URL you created:

git clone https://github.com/<your-username>/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster


Example:

git clone https://github.com/harleenmonder/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster

Install Dependencies
npm install

Start Development Server
npm run dev


Then open the URL shown in the terminal (commonly http://localhost:5173).

Build for Production
npm run build

Preview Production Build (optional)
npm run preview

Tests

No automated tests are included in this version.

What I Built & Why
Project Purpose

The app demonstrates how a web UI can combine API data with analytical techniques:

Provides an interactive interface for exploring Pokémon data.

Demonstrates a Kalman filter for smoothing noisy observations.

Visualizes clustering to group Pokémon by numerical features.

Architecture

The project follows a component-based React structure with a clear separation of concerns.

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


Breakdown:

src/components/ — UI components for the Pokémon card, Kalman demo, and clustering plot.

src/lib/pokeApi.js — Centralized PokéAPI fetch logic.

App.jsx — Main logic: state management, data fetching, component composition.

index.css — Layout and card styles.

How It Works (Data Flow)

On load, the app requests a Pokémon list (name + URL) using PokéAPI.

Prefetches detailed Pokémon records (for clustering) and fetches details for the selected Pokémon.

Displays Pokémon attributes (sprite, types, height, weight, stats).

The Kalman demo simulates noisy stat data (e.g., HP) and applies a 1D Kalman filter to smooth it.

The clustering component normalizes features (e.g., height vs weight), applies a simple k-means clustering, and visualizes points color-coded by cluster.

How PokéAPI Is Used

https://pokeapi.co/api/v2/pokemon?limit=N retrieves the Pokémon list.

https://pokeapi.co/api/v2/pokemon/{name} fetches detailed attributes (stats, sprites, height, weight, types).

All data fetching is done client-side through fetch() in src/lib/pokeApi.js.

Where the Kalman Filter Fits

PokéAPI provides static data, so the Kalman demo simulates a noisy series around a Pokémon’s base stat.

A 1D Kalman filter smooths that simulated data to illustrate noise reduction.

The chart shows both raw and filtered values for comparison.

How Clustering Is Done and Visualized

Choose X and Y numeric features (e.g., height vs weight).

Normalize the data for scale consistency.

Apply a simple K-means–style clustering.

Display results on a 2D scatterplot with color-coded clusters.

Tradeoffs, Limitations, and Future Improvements
Tradeoffs & Known Limitations

Simplified algorithms: Both Kalman filter and clustering are simplified for educational clarity.

Public API: Heavy use can trigger PokéAPI rate limits.

Client-side only: No backend means performance decreases with many data points.

K-means sensitivity: Cluster quality varies by initialization and scaling.

Future Improvements

Add local caching or backend data storage.

Expand clustering features and normalization options.

Add test coverage for Kalman and clustering utilities.

Improve interactivity and chart visualization.

Deployment

You can host this project on Vercel, Netlify, or GitHub Pages.

Deploy on Vercel

Push your repository to GitHub.

Go to Vercel
, import the repository, and deploy (Vite will be detected automatically).

Copy the live deployment link for submission.

Author

Harleen Monder
First-Year Computer Science Student

License

MIT License