import React from "react";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return <div className="card small">Select a Pokémon to view details</div>;
  const sprite = pokemon.sprites?.front_default;
  const name = pokemon.name;
  const types = pokemon.types?.map(t => t.type.name).join(", ");
  const stats = pokemon.stats || [];
  const statList = stats.map(s => ({ name: s.stat.name, value: s.base_stat }));
  return (
    <div className="card">
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <img src={sprite} alt={name} width={96} height={96} />
        <div>
          <h2 style={{ margin: 0, textTransform: "capitalize" }}>{name}</h2>
          <div className="small">Types: {types}</div>
          <div className="small">Height: {pokemon.height} | Weight: {pokemon.weight}</div>
        </div>
      </div>
      <div style={{ marginTop: 12 }}>
        <strong>Stats</strong>
        <ul>
          {statList.map(s => <li key={s.name}>{s.name}: {s.value}</li>)}
        </ul>
      </div>
    </div>
  );
}