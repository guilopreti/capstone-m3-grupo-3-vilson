import { createContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || []
  );
  console.log(user);

  const history = useHistory();
  const userCurrentLogin = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "@CapstoneM3:userLogin",
          JSON.stringify(response.data)
        );
        setUser(response.data);
        history.push("/");
      })
      .catch((_) => {
        toast.error("Algo deu errado, e-mail ou senha incorretos");
      });
  };

  return (
    <UserContext.Provider value={{ user, setUser, userCurrentLogin }}>
      {children}
    </UserContext.Provider>
  );
};
