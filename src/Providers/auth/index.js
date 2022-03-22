import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token] = useState(localStorage.getItem("@CapstoneM3:userLogin"));
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
    }
    setLoading(false);
  }, [token]);

  const handleLogout = () => {
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
