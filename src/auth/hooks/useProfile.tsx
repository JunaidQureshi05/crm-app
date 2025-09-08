import { useEffect, useState } from "react";
import { LoggedInUser } from "../../types/global";

const useProfile = () => {
  const [profile, setProfile] = useState<LoggedInUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let userData = localStorage.getItem("user");
    if (userData) {
      let user = JSON.parse(userData);
      setProfile(user);
    }
    setLoading(false);
  }, []);

  return { profile, loading };
};

export default useProfile;
