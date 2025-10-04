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

---

## Overview

This project was built to explore how data science and visualization can enhance user understanding of datasets — in this case, Pokémon statistics. It combines web development (React), data analysis (clustering), and signal processing (Kalman filtering) to provide meaningful, interactive insights.

---

## Architecture

The project is organized as follows:

PokéStats/
├── src/
│ ├── components/ # Reusable UI components (charts, cards, tables)
│ ├── data/ # Data fetching and transformation utilities
│ ├── hooks/ # Custom React hooks for state and effect management
│ ├── utils/ # Kalman filter, clustering, and helper functions
│ ├── App.js # Main application logic
│ └── index.js # Entry point
├── public/
│ └── index.html
└── package.json

yaml
Copy code

This clean separation of concerns ensures maintainability and scalability. Components handle display, utilities handle computation, and hooks manage stateful logic.

---

## Features

- Fetches Pokémon data dynamically from the PokéAPI.  
- Applies a **Kalman filter** to smooth noisy stat data.  
- Implements **k-means clustering** to group Pokémon by attribute similarity.  
- Displays interactive charts for comparison.  
- Allows filtering and searching by Pokémon type.  

---

## Prerequisites

Before running the project, ensure the following are installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn package manager
- Git (for cloning)

Verify installations:

```bash
node -v
npm -v
git --version
Installation & Running Locally
Clone the repository

bash
Copy code
git clone https://github.com/yourusername/pokestats.git
cd pokestats
Install dependencies

bash
Copy code
npm install
Start the development server

bash
Copy code
npm start
Build for production

bash
Copy code
npm run build
The app will run locally at http://localhost:3000.

Testing
If tests are added, you can run them with:

bash
Copy code
npm test
How It Works
PokéAPI Integration
The app fetches data directly from the PokéAPI, extracting key attributes such as attack, defense, speed, and type. These values are used as input for the visualization components.

Kalman Filter
The Kalman filter smooths Pokémon stat data, reducing variance and outliers for more consistent graphs. It is implemented as a helper function in /utils/kalman.js.

Clustering
Pokémon are grouped using the k-means clustering algorithm based on selected attributes (e.g., attack, defense, speed). Clusters are visualized through color-coded charts to highlight patterns among Pokémon.

Visualization
The project uses Recharts for interactive data visualization, including radar and bar charts. Data flows from the API → transformation layer → clustering → visualization components.

Tradeoffs and Limitations
The PokéAPI limits the number of requests, which can cause delays for larger datasets.

The Kalman filter assumes consistent data intervals, which may not perfectly fit the API’s variability.

Clustering accuracy is dependent on feature scaling and choice of attributes.

Currently, the app runs only on the client side; no backend persistence is implemented.

Future Improvements
Implement caching for API responses to improve performance.

Add more advanced clustering options (e.g., DBSCAN).

Introduce user authentication and saved preferences.

Add automated testing with Jest and React Testing Library.

License
This project is open-source and available under the MIT License.