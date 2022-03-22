import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token] = useState(localStorage.getItem("@CapstoneM3:userLogin"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, [token]);

  const handleLogout = (history) => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, handleLogout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
