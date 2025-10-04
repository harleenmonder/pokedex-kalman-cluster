Pokédex with Kalman Filters and Clustering
Overview

This project is a web-based Pokédex built with React and Vite. It demonstrates API integration using the free PokéAPI
, data smoothing with a Kalman filter, and clustering visualization using client-side data analysis.

The goal is to combine software engineering fundamentals with basic AI concepts like filtering and pattern grouping — all within a modern front-end project.

How to Run Locally
Prerequisites

Before running the project, ensure that you have the following installed:

Node.js (v18 or higher recommended)

npm (comes with Node.js)

Git

To verify installations:

node -v
npm -v
git --version

1. Clone the Repository
git clone https://github.com/<your-username>/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster


Replace <your-username> with your GitHub username.
For example:

git clone https://github.com/harleenmonder/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev


Open the URL shown in your terminal — usually http://localhost:5173.

4. Build for Production
npm run build

5. Preview the Production Build
npm run preview

Tests

There are no automated tests in this version.

What I Built and Why
Purpose

This project demonstrates:

Fetching live data from a public REST API (PokéAPI)

Applying a Kalman filter to smooth noisy signals

Performing client-side clustering of Pokémon attributes

Displaying all results in an interactive, data-driven web UI

It’s a practical example of combining React development with data visualization and algorithmic reasoning.

Architecture

The project follows a modular React structure:

pokedex-kalman-cluster/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── PokemonCard.jsx
│   │   ├── KalmanDemo.jsx
│   │   └── ClusterPlot.jsx
│   │
│   ├── lib/
│   │   └── pokeApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md


Roles:

src/components/ – Reusable visual components

src/lib/pokeApi.js – Functions to fetch Pokémon data

App.jsx – Main logic and layout

index.css – App-wide styles

vite.config.js – Vite configuration

How It Works (Data Flow)

Pokémon Data Fetching
The app uses getPokemonList() and getPokemonByName() from pokeApi.js to fetch data from PokéAPI.

Selection and Details
Users can select a Pokémon from a dropdown to display its stats, image, and type information.

Kalman Filter Demo
The app simulates noisy stat values (like HP) and applies a 1D Kalman filter to show how smoothing works in time-series data.

Clustering Visualization
A simple k-means–style clustering algorithm groups Pokémon based on two chosen features (e.g., weight vs. height).
The results are plotted as a 2D scatterplot with color-coded clusters.

How PokéAPI Is Used

List endpoint:
https://pokeapi.co/api/v2/pokemon?limit=N
Returns names and URLs for Pokémon.

Detail endpoint:
https://pokeapi.co/api/v2/pokemon/{name}
Returns height, weight, stats, and sprite images.

All fetches are handled inside pokeApi.js using native fetch().

Where the Kalman Filter Fits

The PokéAPI provides static data, so a synthetic noisy signal is created from a Pokémon’s base stat (e.g., HP).

A simple Kalman filter implementation estimates the “true” underlying stat over time.

The output shows a clear visual difference between noisy data and filtered estimates.

How Clustering Works and Is Visualized

Pokémon are represented as numeric vectors of features (height, weight, or combined stat totals).

Data is normalized before clustering for fair distance comparison.

A k-means–like algorithm assigns Pokémon to clusters.

Results are displayed on a scatterplot with each cluster assigned a color.

Tradeoffs and Limitations

Kalman filtering and clustering are simplified for clarity, not optimized for performance.

PokéAPI is rate-limited; loading too many Pokémon at once may trigger slowdowns or 429 errors.

All computation is client-side, so large datasets may reduce browser performance.

The number of clusters k is fixed; future improvements could let users choose k.

Future Improvements

Add caching or backend support to reduce API load

Allow user selection of normalization and clustering parameters

Include unit tests for Kalman and clustering logic

Enhance visualizations with tooltips and interactivity

Deployment
Deploying to Vercel

Push this repository to GitHub.

Go to Vercel
, log in, and import your repository.

Accept default settings (Vite is auto-detected).

Once deployed, copy the live URL for submission.

Author

Harleen Monder
First-Year Computer Science Student, Western University

License

This project is released under the MIT License.