import { UserProvider } from "./user";
import { PostsProvider } from "./posts";

const Providers = ({ children }) => {
  return (
    <PostsProvider>
      <UserProvider>{children}</UserProvider>
    </PostsProvider>
  );
};

export default Providers;
