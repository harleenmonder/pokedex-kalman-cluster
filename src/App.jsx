import React, { useEffect, useState } from "react";
import { getPokemonList, getPokemonByName } from "./lib/pokeApi";
import PokemonCard from "./components/PokemonCard";
import KalmanDemo from "./components/KalmanDemo";
import ClusterPlot from "./components/ClusterPlot";
import "./index.css";

export default function App() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState("");
  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [bulkDetails, setBulkDetails] = useState([]); // for clustering

  useEffect(() => {
    getPokemonList(120).then(res => setList(res)).catch(err => console.error(err));
    // prefetch a modest number for clustering (avoid 150 to reduce requests)
    (async () => {
      try {
        const namesRes = await getPokemonList(80);
        const fetches = namesRes.map(r => getPokemonByName(r.name));
        const results = await Promise.all(fetches);
        setBulkDetails(results);
      } catch (e) { console.error("prefetch error", e); }
    })();
  }, []);

  useEffect(() => {
    if (!selected) { setDetails(null); return; }
    setLoadingDetails(true);
    getPokemonByName(selected).then(p => { setDetails(p); setLoadingDetails(false); }).catch(e => { console.error(e); setLoadingDetails(false); });
  }, [selected]);

  // for Kalman, pick a stat value (hp or total)
  const baseValue = details ? (details.stats?.find(s=>s.stat.name==="hp")?.base_stat || details.stats[0]?.base_stat || 50) : null;

  return (
    <div className="app">
      <div className="left">
        <div className="card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>Pokédex — Kalman & Clustering</h2>
            <div className="small">Demo</div>
          </div>
          <div style={{ marginTop: 8 }}>
            <label className="small">Select Pokémon</label>
            <div style={{ display:"flex", gap:8, marginTop:8 }}>
              <select className="select" value={selected} onChange={(e)=>setSelected(e.target.value)}>
                <option value="">— Select —</option>
                {list.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        <PokemonCard pokemon={details} />
        <div style={{ height: 16 }} />

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Clustering Controls</h3>
          <div style={{ display:"flex", gap:8, alignItems:"center" }}>
            <div>
              <label className="small">X feature</label>
              <select id="x" className="select" defaultValue="weight" onChange={(e)=>{/* no-op controlled in child */}}>
                <option value="weight">weight</option>
                <option value="height">height</option>
                <option value="stat_total">stat_total</option>
                <option value="speed">speed</option>
              </select>
            </div>
            <div>
              <label className="small">Y feature</label>
              <select id="y" className="select" defaultValue="height" onChange={(e)=>{/* no-op controlled in child */}}>
                <option value="height">height</option>
                <option value="weight">weight</option>
                <option value="stat_total">stat_total</option>
                <option value="attack">attack</option>
              </select>
            </div>
            <div className="small">Note: you can toggle features in the cluster component directly</div>
          </div>
        </div>
      </div>

      <div className="right">
        {loadingDetails ? <div className="card small">Loading...</div> : <PokemonCard pokemon={details} />}
        <KalmanDemo baseValue={baseValue} />
        <ClusterPlot pokemonsDetails={bulkDetails} />
      </div>
    </div>
  );
}
