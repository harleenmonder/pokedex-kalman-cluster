export async function getPokemonList(limit = 150) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  if (!res.ok) throw new Error("Failed fetching list");
  const data = await res.json();
  return data.results; // [{name, url}, ...]
}

export async function getPokemonByName(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) throw new Error("Failed fetching pokemon " + name);
  return await res.json();
}