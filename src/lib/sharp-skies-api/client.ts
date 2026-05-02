import axios from "axios";

// Add axios client creation here
export const api = axios.create({
  baseURL:
    import.meta.env.VITE_SHARP_SKIES_API_BASE_URL + "/api" ||
    "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
