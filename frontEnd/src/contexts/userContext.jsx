import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/users/me", {
          withCredentials: true,
        });

        setUser(res?.data?.data?.user);
      } catch (err) {
        setUser(null);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getCurrentUser();
  }, []);

  return (
    <userContext.Provider value={{ user, isLoading }}>
      {children}
    </userContext.Provider>
  );
}

function useUser() {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error("user was used outside of scope");
  }

  return context;
}

export { UserProvider, useUser };
