import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import api from "../../services/api";

import { ProfileContext } from "../differentStates/index";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { setShowChangeInformation } = useContext(ProfileContext);

  const userLocal =
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || "";

  const [user, setUser] = useState([userLocal.user]);

  const history = useHistory();

  const userCurrentLogin = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem(
          "@CapstoneM3:userLogin",
          JSON.stringify(response.data)
        );
        console.log(response);
        setUser([response.data.user]);
        history.push("/");
      })
      .catch((err) => {
        toast.error("Algo deu errado, e-mail ou senha incorreto");
      });
  };

  const changeUserInformation = (userDataUpdate) => {
    api
      .patch(`/users/${userLocal.user.id}`, userDataUpdate, {
        headers: {
          Authorization: `Bearer ${userLocal.accessToken}`,
        },
      })
      .then((response) => {
        toast.success("Perfil atualizado com sucesso com sucesso");
        const userLocal = JSON.parse(
          localStorage.getItem("@CapstoneM3:userLogin")
        );
        const { accessToken } = userLocal;
        console.log(userLocal);
        localStorage.setItem(
          "@CapstoneM3:userLogin",
          JSON.stringify({ accessToken, user: response.data })
        );
        setUser([response.data]);
        setShowChangeInformation(false);
        history.push("/");
      })
      .catch((err) => {
        toast.error("Falha ao tentar atualizar seus dados");
      });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, userCurrentLogin, changeUserInformation }}
    >
      {children}
    </UserContext.Provider>
  );
};
