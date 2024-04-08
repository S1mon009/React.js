import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
import { supabase } from "./supabase";

export async function fetchProjects({ search, repository, sort }) {
  let query = supabase.from("projects").select("*");

  if (search) {
    query = query.like("title", `%${search}%`);
  }
  if (repository) {
    query = query.eq("repository", repository);
  }

  query = query.order("title", { ascending: !!(sort === "A-Z") });

  const { data: projects, error } = await query;

  if (error) {
    throw error;
  }

  return projects;
}

export async function searchProjects(search) {
  if (search === "") {
    return null;
  }
  let query = supabase
    .from("projects")
    .select("*")
    .like("title", `%${search}%`);

  const { data: searchedProjects, error } = await query;

  if (error) {
    throw error;
  }

  return searchedProjects;
}
