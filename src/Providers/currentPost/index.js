import { createContext, useState } from "react";
import api from "../../services/api";

export const CurrentPostContext = createContext();

export const CurrentPostProvider = ({ children }) => {
  const [currentPost, setCurrentPost] = useState({});

  const openCurrentPost = (postId) => {
    api.get(`/posts/${postId}`).then((resp) => {
      setCurrentPost(resp.data);
    });
  };

  return (
    <CurrentPostContext.Provider
      value={{ currentPost, setCurrentPost, openCurrentPost }}
    >
      {children}
    </CurrentPostContext.Provider>
  );
};
