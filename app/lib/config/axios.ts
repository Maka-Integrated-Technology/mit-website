import axios from "axios";
import axiosRetry from "axios-retry";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: { Accept: "application/json" },
    post: { "Content-Type": "application/json" },
  },
});

// Only retry true network errors (no connection, timeout).
// 5xx server errors are retried by TanStack Query instead — having both
// retry on 5xx multiplies attempts: (axios retries + 1) × (TQ retries + 1).
axiosRetry(axiosInstance, {
  retries: 2,
  retryDelay: axiosRetry.exponentialDelay,
  shouldResetTimeout: true,
  retryCondition: (error) => axiosRetry.isNetworkError(error),
});

export default axiosInstance;
