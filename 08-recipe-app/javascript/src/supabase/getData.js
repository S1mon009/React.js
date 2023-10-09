import { supabase } from "./config";

export const getUser = async ({ email, password }) => {
  try {
    let { data: Users, error } = await supabase
      .from("Users")
      .select("id")
      .eq("Email", email);
    console.log(Users);
  } catch (error) {
    console.log(error);
  }
};
