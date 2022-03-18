import { UserProvider } from "./users";
import { PostsProvider } from "./posts";

const Providers = ({ children }) => {
  return (
    <PostsProvider>
      <UserProvider>{children}</UserProvider>
    </PostsProvider>
  );
};
export default Providers;
