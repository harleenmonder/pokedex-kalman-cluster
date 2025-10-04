# Pokédex with Kalman Filters and Clustering

This project is a small interactive Pokédex web app built with **React** and powered by the free [PokéAPI](https://pokeapi.co/). It demonstrates the use of **Kalman filters** for data smoothing and **clustering algorithms** to visualize Pokémon characteristics.  
It was built as part of a take-home challenge for Western AI.

---

## 1. How to Run the Project Locally

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node)
- Git (to clone the repository)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/harleenmonder/pokedex-kalman-cluster.git
Navigate into the project folder:

bash
Copy code
cd pokedex-kalman-cluster
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open the local server link shown in your terminal (typically http://localhost:5173).

Build for Production
To create an optimized production build:

bash
Copy code
npm run build
There are no tests implemented in this version.

2. Project Overview
What I Built
This Pokédex app allows users to:

Browse and select Pokémon from a list fetched via PokéAPI.

View key details (sprite, stats, height, weight, etc.).

Observe a demonstration of Kalman filtering applied to a Pokémon stat value.

Explore Pokémon clustering visually, based on numerical attributes (e.g., height, weight, speed).

Architecture
Frontend: React (Vite setup)

Data Source: PokéAPI REST endpoints

Visualization: Simple JavaScript-based plotting for clustering and data grouping

Components:

PokemonCard: Displays Pokémon information.

KalmanDemo: Applies a Kalman filter to smooth out a noisy stat.

ClusterPlot: Plots and clusters multiple Pokémon based on numerical features.

pokeApi.js: Handles all API calls to PokéAPI.

3. How It Works
PokéAPI Integration
The app fetches Pokémon data (name, image, and stats) from PokéAPI using fetch() in pokeApi.js.
The main list is retrieved once, and additional details load dynamically when a Pokémon is selected.

Kalman Filter Usage
A Kalman filter is used to smooth noisy measurements of a Pokémon’s HP (or another stat).
It provides a running estimate of the true value — a simplified demonstration of how filtering can remove noise from observed data.

Clustering
The app prefetches data for multiple Pokémon and clusters them based on two selected numerical features (e.g., weight vs. height).
Simple k-means–style grouping is simulated to visualize data similarity, helping show relationships between Pokémon stats.

4. Design and Layout
Clean, two-column layout: Pokémon selection and controls on the left, visualizations on the right.

Minimalist CSS styling for clarity and accessibility.

Responsive layout that adjusts to small screens.

5. Key Tradeoffs and Limitations
The Kalman filter and clustering are conceptual demonstrations, not mathematically optimized implementations.

Due to API rate limits, the app preloads only a limited number of Pokémon (e.g., 80–120).

The clustering visualization is intentionally simple to keep the project light and easy to understand.

6. Deployment
The live version of this app can be hosted using:

Vercel

Netlify

GitHub Pages

To deploy to Vercel:

Push this repository to GitHub.

Go to https://vercel.com/.

Import your GitHub project.

Click Deploy — your live link will be ready in under a minute.

7. Credits
API: PokéAPI

Framework: React

Build Tool: Vite

Developed by Harleen Monder