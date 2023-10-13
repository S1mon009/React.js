import { supabase } from "./config";

export const login = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      throw new Error(error.message);
    }
    if (!error) {
      localStorage.setItem("userData", JSON.stringify(data.user));
      return true;
    }
  } catch (error) {
    alert(error);
    return false;
  }
};
export const register = async ({ email, password }) => {
  try {
    // const { data, error } = await supabase
    //   .from("Users")
    //   .insert([{ Email: email, Password: password }]);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) throw new Error(error.message);
    if (data) console.log(data);
  } catch (error) {
    alert(error);
  }
};
export const getRecipies = async () => {};
