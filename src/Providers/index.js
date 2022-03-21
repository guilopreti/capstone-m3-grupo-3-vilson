import { UserProvider } from "./users";
import { PostsProvider } from "./posts";
import { AuthProvider } from "./auth";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <PostsProvider>
        <UserProvider>{children}</UserProvider>
      </PostsProvider>
    </AuthProvider>
  );
};
export default Providers;
