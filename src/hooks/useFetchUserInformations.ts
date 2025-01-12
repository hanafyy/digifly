import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store"; // Adjust the path to your `store.ts`
import { setUsers } from "../redux/slices/usersSlice";
import axios from "axios";

export const useFetchUserInformations = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Perform the GET request
        const response = await axios.get(
          "http://localhost:1337/user-informations"
        );
        console.log(response);
        // Assuming the response.data contains the array of users
        dispatch(setUsers(response.data)); // Store the users in Redux
      } catch (err: unknown) {
        // Handle the error
        if (axios.isAxiosError(err)) {
          setError(
            err.response?.data?.message ||
              err.message ||
              "Failed to fetch data."
          );
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return { loading, error };
};
