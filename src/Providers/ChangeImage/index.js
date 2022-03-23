import { createContext, useState } from "react";
import api from "../../services/api";

export const ChangeImageContext = createContext();

export const ChangeImageProvider = ({ children }) => {
  const [showChangeImage, setShowChangeImage] = useState(false);
  const [image, setImage] = useState("");

  const userLocal =
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || "";

  const sendUserImage = () => {
    api
      .patch(
        `/users/${userLocal.user.id}`,
        { img: image },
        {
          headers: {
            Authorization: `Bearer ${userLocal.accessToken}`,
          },
        }
      )
      .then((response) => {
        const { accessToken } = userLocal;
        localStorage.setItem(
          "@CapstoneM3:userLogin",
          JSON.stringify({ accessToken, user: response.data })
        );
        setImage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ChangeImageContext.Provider
      value={{
        showChangeImage,
        setShowChangeImage,
        image,
        setImage,
        sendUserImage,
      }}
    >
      {children}
    </ChangeImageContext.Provider>
  );
};
