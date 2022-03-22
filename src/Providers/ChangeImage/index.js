import { createContext, useState } from "react";
// import DefaultImage from "../../assets/image/elon-musk.jpg";
import api from "../../services/api";

export const ChangeImageContext = createContext();

export const ChangeImageProvider = ({ children }) => {
  const [showChangeImage, setShowChangeImage] = useState(false);
  const [image, setImage] = useState(null);
  console.log(image);

  const userLocal = JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"));
  console.log(userLocal.user.id);

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
        console.log(response);
        localStorage.setItem(
          "@CapstoneM3:userLogin",
          JSON.stringify({ accessToken, user: response.data })
        );
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
