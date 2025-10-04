import React, { useEffect, useMemo, useState } from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, PointElement, LinearScale, Tooltip, Legend } from "chart.js";
import { kmeans, normalizeFeatures } from "../lib/kmeans";

ChartJS.register(PointElement, LinearScale, Tooltip, Legend);

export default function ClusterPlot({ pokemonsDetails, featureX = "weight", featureY = "height" }) {
  const [k, setK] = useState(3);

  // build data matrix of [x,y] and keep names
  const { matrix, names, meta } = useMemo(() => {
    const mat = [];
    const namesArr = [];
    const metaArr = [];
    for (const p of pokemonsDetails) {
      if (!p) continue;
      // features: allow weight height and derived stat totals
      const totalStats = p.stats?.reduce((s, st) => s + st.base_stat, 0) || 0;
      const statMap = Object.fromEntries(p.stats.map(s => [s.stat.name, s.base_stat]));
      const xVal = featureX === "stat_total" ? totalStats : (featureX === "speed" ? statMap.speed || 0 : p[featureX] || 0);
      const yVal = featureY === "stat_total" ? totalStats : (featureY === "speed" ? statMap.speed || 0 : p[featureY] || 0);
      mat.push([xVal, yVal]);
      namesArr.push(p.name);
      metaArr.push({ xVal, yVal });
    }
    return { matrix: mat, names: namesArr, meta: metaArr };
  }, [pokemonsDetails, featureX, featureY]);

  // normalize then run kmeans
  const { assignments, centroids } = useMemo(() => {
    if (matrix.length === 0) return { assignments: [], centroids: [] };
    const norm = normalizeFeatures(matrix);
    return kmeans(norm, Math.min(k, norm.length));
  }, [matrix, k]);

  // build chart datasets
  const datasets = [];
  const colors = ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b"];
  const clusters = {};
  assignments.forEach((c, i) => {
    clusters[c] = clusters[c] || [];
    clusters[c].push({ x: matrix[i][0], y: matrix[i][1], label: names[i] });
  });
  Object.keys(clusters).forEach((c, i) => {
    datasets.push({
      label: `Cluster ${parseInt(c)+1}`,
      data: clusters[c].map(pt => ({ x: pt.x, y: pt.y, name: pt.label })),
      pointRadius: 4,
      backgroundColor: colors[i % colors.length]
    });
  });

  const data = { datasets };

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>Clustering</h3>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <div className="small">K:</div>
        <input type="number" min="1" max="8" value={k} onChange={(e)=>setK(Number(e.target.value))} style={{width:60}} />
        <div className="small" style={{ marginLeft: 12 }}>Points: {matrix.length}</div>
      </div>
      {datasets.length > 0 ? <Scatter data={data} options={{ responsive:true, plugins:{legend:{position:'bottom'}} }} /> : <div className="small">Not enough data to cluster</div>}
    </div>
  );
}
