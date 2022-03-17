import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const PostsContext = createContext([]);

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((resp) => setPosts(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};
