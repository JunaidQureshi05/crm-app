import { useEffect, useState } from "react";
import { LoggedInUser } from "../../types/global";

const useProfile = () => {
  const [profile, setProfile] = useState<LoggedInUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const userData = localStorage.getItem("user");

      console.log(userData);
      if (userData) {
        const user: LoggedInUser = JSON.parse(userData);
        setProfile(user);
      }
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { profile, loading };
};

export default useProfile;
