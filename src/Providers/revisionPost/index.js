import { createContext, useState } from "react";

export const RevisionPostContext = createContext();

export const RevisionPostProvider = ({ children }) => {
  const [revisionPosts, setRevisionPosts] = useState([]);

  return (
    <RevisionPostContext.Provider value={{ revisionPosts, setRevisionPosts }}>
      {children}
    </RevisionPostContext.Provider>
  );
};
