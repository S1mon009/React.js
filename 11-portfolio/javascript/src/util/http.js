import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
import { supabase } from "../dev-data/supabase";
const url = "http://localhost:5173/src/dev-data/projects-data.json";

export async function fetchProjects() {
  let { data: projects, error } = await supabase.from("projects").select("*");

  if (error) {
    throw error;
  }

  return projects;
}
