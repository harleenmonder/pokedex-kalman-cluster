PokéStats — Pokémon Data Dashboard

A React-based web application that visualizes Pokémon statistics using data from the PokéAPI
.
The app demonstrates real-time data smoothing with a Kalman filter and data clustering for visualization.

How to Run Locally
1. Prerequisites

Make sure you have the following installed:

Node.js (v18 or higher)

npm (comes with Node)

Verify installations:

node -v
npm -v

2. Clone the Repository
git clone https://github.com/<your-username>/pokedex-kalman-cluster.git
cd pokedex-kalman-cluster

3. Install Dependencies
npm install

4. Run the App
npm run dev


Then open the URL displayed in your terminal (usually http://localhost:5173/).

5. Build for Production
npm run build

What I Built and Why

PokéStats is designed to explore how real-world data processing techniques like Kalman filtering and clustering can enhance visualization of API-based datasets.
The project highlights how machine learning and data visualization intersect within front-end development.

Architecture

The project follows a modular React architecture for readability and maintainability:

PokeStats/
├── src/
│   ├── components/        # Reusable UI components (charts, cards, tables)
│   ├── data/              # Data fetching and transformation utilities
│   ├── hooks/             # Custom React hooks for managing state and effects
│   ├── utils/             # Kalman filter, clustering, and helper functions
│   ├── App.jsx            # Main application logic
│   └── main.jsx           # Entry point
├── public/
│   └── index.html
└── package.json

How It Works

PokéAPI Integration:
The app fetches data for multiple Pokémon, including attributes such as height, weight, and base stats.

Kalman Filter:
A lightweight algorithm smooths noisy data (for example, weight variations), simulating real-world sensor data filtering.

Clustering:
Pokémon are grouped by numerical attributes using a basic K-means–style clustering algorithm.
The results are visualized using a simple chart to compare relationships among Pokémon.

Visualization:
The frontend displays the filtered and clustered data in interactive, dynamic charts for intuitive comparison.

Tradeoffs and Limitations

Data Sampling: PokéAPI limits the number of API calls, so large-scale clustering is constrained.

Simplified Kalman Model: Uses a 1D linear Kalman filter for demonstration; not optimized for complex multidimensional data.

Static Clustering: Clusters are computed on load — no live model retraining.

Performance: Rendering may slow down for very large datasets due to client-side processing.

Future Improvements

Add pagination and advanced filtering options.

Implement real-time data updates or live search.

Integrate a more advanced clustering algorithm with adjustable parameters.