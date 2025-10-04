// Small K-means for small N and 2D data
export function euclidean(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += (a[i] - b[i]) ** 2;
  return Math.sqrt(s);
}

export function normalizeFeatures(data) {
  // data: array of arrays [[x,y],...]
  const dim = data[0].length;
  const mins = new Array(dim).fill(Infinity);
  const maxs = new Array(dim).fill(-Infinity);
  for (const row of data) {
    for (let d = 0; d < dim; d++) {
      if (row[d] < mins[d]) mins[d] = row[d];
      if (row[d] > maxs[d]) maxs[d] = row[d];
    }
  }
  return data.map(row => row.map((v, d) => (maxs[d] - mins[d] === 0 ? 0 : (v - mins[d]) / (maxs[d] - mins[d]))));
}

export function kmeans(data, k = 3, maxIter = 100) {
  if (data.length === 0) return { assignments: [], centroids: [] };
  const n = data.length;
  const dim = data[0].length;
  // init centroids: random distinct points
  const centroids = [];
  const used = new Set();
  while (centroids.length < k) {
    const i = Math.floor(Math.random() * n);
    if (!used.has(i)) { centroids.push(data[i].slice()); used.add(i); }
  }
  let assignments = new Array(n).fill(-1);
  for (let iter = 0; iter < maxIter; iter++) {
    let changed = false;
    // assign
    for (let i = 0; i < n; i++) {
      let best = 0;
      let bestDist = euclidean(data[i], centroids[0]);
      for (let c = 1; c < k; c++) {
        const d = euclidean(data[i], centroids[c]);
        if (d < bestDist) { bestDist = d; best = c; }
      }
      if (assignments[i] !== best) { changed = true; assignments[i] = best; }
    }
    if (!changed) break;
    // update centroids
    const sums = new Array(k).fill(0).map(() => new Array(dim).fill(0));
    const counts = new Array(k).fill(0);
    for (let i = 0; i < n; i++) {
      const c = assignments[i]; counts[c]++;
      for (let d = 0; d < dim; d++) sums[c][d] += data[i][d];
    }
    for (let c = 0; c < k; c++) {
      if (counts[c] === 0) continue;
      for (let d = 0; d < dim; d++) centroids[c][d] = sums[c][d] / counts[c];
    }
  }
  return { assignments, centroids };
}