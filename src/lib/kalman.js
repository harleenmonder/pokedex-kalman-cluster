// Simple 1D Kalman filter
// observations: array of numbers
// options: R (measurement variance), Q (process variance), initialEstimate, initialError
export function kalman1D(observations, { R = 4, Q = 1, initialEstimate = null, initialError = 1 } = {}) {
  if (!observations || observations.length === 0) return [];
  let x = initialEstimate !== null ? initialEstimate : observations[0];
  let P = initialError;
  const estimates = [];
  for (const z of observations) {
    // predict (constant model)
    P = P + Q;
    // update
    const K = P / (P + R);
    x = x + K * (z - x);
    P = (1 - K) * P;
    estimates.push(x);
  }
  return estimates;
}

// utility to simulate noisy observations (gaussian-ish via Box-Muller)
export function simulateNoisy(value, n = 30, std = 4) {
  const obs = [];
  for (let i = 0; i < n; i++) {
    // Box-Muller transform for normal noise
    const u1 = Math.random() || 1e-10;
    const u2 = Math.random() || 1e-10;
    const randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    obs.push(value + randStdNormal * std);
  }
  return obs;
}
