import { createContext, useState } from "react";
import api from "../../services/api";

export const CurrentPostContext = createContext();

export const CurrentPostProvider = ({ children }) => {
  const [currentPost, setCurrentPost] = useState(
    JSON.parse(localStorage.getItem("@CapstoneM3:currentPost")) || []
  );

  const openCurrentPost = (postId) => {
    api.get(`/posts/${postId}`).then((resp) => {
      setCurrentPost(resp.data);
      localStorage.setItem(
        "@CapstoneM3:currentPost",
        JSON.stringify(resp.data)
      );
    });
  };

  return (
    <CurrentPostContext.Provider value={{ currentPost, openCurrentPost }}>
      {children}
    </CurrentPostContext.Provider>
  );
};
