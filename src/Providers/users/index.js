import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

import { ProfileContext } from "../differentStates/index";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { setShowChangeInformation } = useContext(ProfileContext);

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
        console.log(response);
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
        console.log(userLocal);
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
    api
      .post("/users", data)

      .then((response) => {
        toast.success("Cadastro realizado com sucesso");

        console.log(response);
        history.push("/login");
      })

      .catch((err) => {
        toast.error("Falha ao tentar realizar o cadastro");
        console.log(err);
      });
  };

  // const userCurrentLogin = async (data, history) => {
  //   const response = await api.post("/login", data).catch((err) => {
  //     toast.error("Algo deu errado, e-mail ou senha incorretos");
  //   });

  //   localStorage.setItem(
  //     "@CapstoneM3:userLogin",
  //     JSON.stringify(response.data)
  //   );
  //   history.push("/");
  //   setAuthenticated(true);
  // };

  /*const findUserJwtDecode = async () => {
    const response = await api.get('/users')
    const token = JSON.parse(localStorage.getItem('@CapstoneM3:userLogin'))
    const decoded = jwt_decode(token)

    const findedUser = response.data.find((user) => {
      return user.email === decoded.email
    })
    console.log(findedUser)
    return findedUser
  }*/

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
