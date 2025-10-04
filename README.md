Pokédex with Kalman Filters and Clustering
Overview

This project is a web-based Pokédex built with React and Vite. It demonstrates front-end development, API integration with the PokéAPI, and basic data processing techniques: a Kalman filter for smoothing noisy values and client-side clustering to visualize groups of Pokémon by numeric attributes.

How to run locally
Prerequisites

Node.js (v18 or later recommended)

npm (bundled with Node.js)

Git

Verify installations by running the following commands in your terminal (each on its own line):

node -v
npm -v
git --version

Clone the repository

Replace <your-username> with your GitHub username or the repository URL:

git clone https://github.com/<your-username>/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster


Example (if your repo is under your account):

git clone https://github.com/harleenmonder/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster

Install dependencies
npm install

Start the development server
npm run dev


Open the URL shown in the terminal (typically http://localhost:5173
).

Build for production
npm run build

Preview production build (optional)
npm run preview

Tests

There are no automated tests included in this version.

What I built and why
Purpose

The app combines front-end engineering with basic data analysis to provide an interactive way to explore Pokémon data. The goal was to demonstrate:

API integration (fetching data from an external source),

a simple Kalman filter to illustrate smoothing of noisy measurements,

client-side clustering to visualize relationships between Pokémon attributes.

Architecture

The project is organized with a component-driven React structure:

public/

src/

components/

PokemonCard.jsx

KalmanDemo.jsx

ClusterPlot.jsx

lib/

pokeApi.js

App.jsx

main.jsx

index.css

package.json

README.md

vite.config.js

Roles:

src/components/ contains UI components for display and visualization.

src/lib/pokeApi.js centralizes API calls to PokéAPI.

App.jsx manages application state, data fetching, and composes child components.

index.css contains layout and styling rules.

How it works (data flow)

On load, the app requests a list of Pokémon (names and URLs) from the PokéAPI.

The app prefetches a moderate number of detailed Pokémon records for clustering and fetches details for the currently selected Pokémon on demand.

The UI displays the selected Pokémon (sprite, types, height, weight, stats).

The Kalman demo simulates a short noisy time series around a Pokémon stat (for example HP) and applies a 1D Kalman filter to produce a smoothed estimate.

The clustering component builds a feature matrix from selected numeric attributes (for example [height, weight] or [stat_total, speed]), normalizes features, runs a simple k-means style algorithm, and visualizes clusters on a 2D scatterplot with color coding.

How PokéAPI is used

To retrieve the list of Pokémon:

https://pokeapi.co/api/v2/pokemon?limit=N (returns names and detail URLs)

To fetch details for a single Pokémon:

https://pokeapi.co/api/v2/pokemon/{name} (returns stats, sprites, height, weight, types)
All fetches are performed client-side via fetch() in src/lib/pokeApi.js.

Where the Kalman filter fits

PokéAPI provides static attribute values; to demonstrate Kalman filtering, the app generates a simulated noisy measurement series by perturbing a base stat (e.g., HP).

A simple 1D Kalman filter consumes these noisy observations and outputs smoothed estimates.

The visualization shows the raw noisy points and the Kalman-filtered line so reviewers can clearly see the smoothing effect.

How clustering is done and visualized

The app constructs a numeric feature vector for each Pokémon using selected attributes (e.g., height, weight, total stats).

Features are normalized (min-max or z-score) to make dimensions comparable.

A basic K-means style clustering algorithm runs client-side on the normalized data (small N).

Results are displayed on a 2D scatter plot with points color-coded by cluster. Hover or click can reveal the Pokémon name and attributes (if implemented).

Tradeoffs and limitations

The Kalman filter and clustering implementations are intentionally simplified for clarity and educational purposes, not performance or production accuracy.

PokéAPI is a public API and may impose rate limits; the app prefetches a limited number of Pokémon to reduce request load. If you see slow loading or HTTP 429 responses, reduce the prefetch count.

All computation is client-side; processing many Pokémon will increase memory and CPU use in the browser.

K-means requires choosing the number of clusters k and is sensitive to feature scaling and initialization.

Future improvements

Add server-side caching or a small backend to reduce repeated PokéAPI calls.

Provide UI controls for normalization and clustering parameters (normalization method, k selection).

Add automated unit tests for Kalman and clustering utilities.

Improve visualizations (interactive tooltips, zooming, selectable axes).

Deployment

Recommended hosts: Vercel or Netlify.

Vercel example:

Push the repository to GitHub.

Go to vercel.com and import the repository.

Accept defaults (Vite is detected) and deploy.

Copy the live URL for submission.

Author

Harleen Monder
First-year Computer Science student

License

MIT License