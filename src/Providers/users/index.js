import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { AuthContext } from "../auth";
import { ProfileContext } from "../differentStates/index";
import DefaultImage from "../../assets/image/user-padrao.png";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { setShowChangeInformation } = useContext(ProfileContext);
  const { setAuthenticated } = useContext(AuthContext);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || []
  );

  const userLocal =
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || "";

  const userCurrentLogin = (data, history) => {
    api
      .post("/login", data)
      .then((response) => {
        localStorage.setItem(
          "@CapstoneM3:userLogin",
          JSON.stringify(response.data)
        );

        setAuthenticated(true);
        setUser([response.data.user]);

        history.push("/");
      })
      .catch((err) => {
        toast.error("Algo deu errado, e-mail ou senha incorreto");
      });
  };

  const changeUserInformation = (userDataUpdate, history) => {
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
        localStorage.setItem(
          "@CapstoneM3:userLogin",
          JSON.stringify({ accessToken, user: response.data })
        );
        setUser([response.data]);
        setShowChangeInformation(false);
        history.push("/");
      })

      .catch((_) => {
        toast.error("Falha ao tentar atualizar seus dados");
      });
  };

  const handleUserRegister = (data, history) => {
    const infosUser = { ...data, biography: "", img: DefaultImage, note: null };
    api
      .post("/users", infosUser)

      .then((response) => {
        toast.success("Cadastro realizado com sucesso");
        history.push("/login");
      })

      .catch((_) => {
        toast.error("Falha ao tentar realizar o cadastro");
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userCurrentLogin,
        changeUserInformation,
        handleUserRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
