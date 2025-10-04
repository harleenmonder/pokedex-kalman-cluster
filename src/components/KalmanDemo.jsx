import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, PointElement, LineElement, LinearScale, CategoryScale, Tooltip, Legend } from "chart.js";
import { simulateNoisy, kalman1D } from "../lib/kalman";

ChartJS.register(PointElement, LineElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function KalmanDemo({ baseValue }) {
  const [obs, setObs] = useState([]);
  const [est, setEst] = useState([]);

  useEffect(() => {
    if (baseValue == null) {
      setObs([]); setEst([]); return;
    }
    const observations = simulateNoisy(baseValue, 30, Math.max(2, baseValue * 0.06));
    setObs(observations);
    const estimates = kalman1D(observations, { R: Math.pow(Math.max(2, baseValue * 0.06), 2), Q: 1, initialEstimate: observations[0] });
    setEst(estimates);
  }, [baseValue]);

  if (!obs.length) return <div className="card small">Select a Pokémon to see Kalman demo</div>;

  const data = {
    labels: obs.map((_, i) => i + 1),
    datasets: [
      { label: "Noisy Observations", data: obs, showLine: false, pointRadius: 3 },
      { label: "Kalman Estimate", data: est, borderWidth: 2, fill: false, tension: 0.2 }
    ]
  };

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Kalman Filter Demo</h3>
      <div className="small">Noisy observations (points) vs Kalman smoothed estimate (line)</div>
      <Line data={data} />
    </div>
  );
}