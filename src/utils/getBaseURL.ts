// Changes base URL in API requests based on current environment (dev/prod)

export function getBaseUrl() {
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_API_BASE_URL_DEV;
  } else {
    return import.meta.env.VITE_API_BASE_URL_PROD;
  }
}
