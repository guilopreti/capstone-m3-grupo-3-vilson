import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@CapstoneM3:user")) || []
  );

  const updateUser = (newUser) => {
    localStorage.setItem("@CapstoneM3:user", JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
