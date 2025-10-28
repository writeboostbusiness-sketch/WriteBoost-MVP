// src/api/api.js
export const API_URL = "https://writeboost-backend.onrender.com";

// Παράδειγμα fetch function
export async function fetchData(endpoint) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API fetch error:", err);
    return null;
  }
}
