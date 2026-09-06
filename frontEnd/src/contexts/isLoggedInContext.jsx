import { createContext, useContext, useState } from "react";
const isLoggedInContext = createContext();

function IsLoggedInProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  console.log(isLoggedIn);
  return (
    <isLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </isLoggedInContext.Provider>
  );
}

function useIsLoggedIn() {
  const context = useContext(isLoggedInContext);
  if (context === undefined) {
    throw new Error("user was used outside of scope");
  }

  return context;
}

export { IsLoggedInProvider, useIsLoggedIn };
