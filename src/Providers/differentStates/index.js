import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [showChangeInformation, setShowChangeInformation] = useState(false);

  console.log(showChangeInformation);

  return (
    <ProfileContext.Provider
      value={{ showChangeInformation, setShowChangeInformation }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const ChangeOpacityContext = createContext();

export const ChangeOpacityProvider = ({ children }) => {
  const [isOpacity, setOpacity] = useState(false);
  console.log(isOpacity);

  return (
    <ChangeOpacityContext.Provider value={{ isOpacity, setOpacity }}>
      {children}
    </ChangeOpacityContext.Provider>
  );
};
