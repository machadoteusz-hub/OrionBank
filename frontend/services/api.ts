const API_URL = "http://localhost:8080/api";

export async function apiFetch(
  endpoint: string,
  options?: RequestInit
) {
  const token = localStorage.getItem("token");

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
        ? `Bearer ${token}`
        : "",
      ...options?.headers,
    },
  });
}