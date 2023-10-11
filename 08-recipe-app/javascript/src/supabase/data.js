import { supabase } from "./config";

export const login = async ({ email, password }) => {
  try {
    let { data: Users, error } = await supabase
      .from("Users")
      .select("id")
      .eq("Email", email);
    if (error) throw new Error(error.message);
    console.log(Users);
  } catch (error) {
    console.log(error);
  }
};

export const register = async ({ email, password }) => {
  try {
    const { data, error } = await supabase
      .from("Users")
      .insert([{ Email: email, Password: password }]);
    if (error) throw new Error(error.message);
  } catch (error) {
    console.log(error);
  }
};
