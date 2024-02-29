import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
const url = "http://localhost:5173/src/dev-data/projects-data.json";

export async function fetchProjects() {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data");
    throw error;
  }

  const data = await response.json();

  return data;
}
