import { supabase } from "./config";

export const addUser = async ({ email, password }) => {
  try {
    const { data, error } = await supabase
      .from("Users")
      .insert([{ Email: email, Password: password }]);
  } catch (error) {
    console.log(error);
  }
};
