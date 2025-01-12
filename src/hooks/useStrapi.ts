import { useState } from "react";

import axios from "axios";
import { addUser } from "@/redux/slices/usersSlice";
import { useDispatch } from "react-redux";
interface User {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
}
export const useStrapi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const addUserToStrapi = async (user: User) => {
    setLoading(true);
    setError(null);
    console.log(user);
    try {
      // Replace with your Strapi endpoint
      const response = await axios.post(
        "http://localhost:1337/user-informations",
        user
      );
      console.log(response);
      // Add the new user to Redux store
      dispatch(addUser(user));

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to add user");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { addUserToStrapi, loading, error };
};
