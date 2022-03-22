import { UserProvider } from "./users";
import { PostsProvider } from "./posts";
import { AuthProvider } from "./auth";
import { CurrentPostProvider } from "./currentPost";

const Providers = ({ children }) => {
  return (
    <CurrentPostProvider>
      <AuthProvider>
        <PostsProvider>
          <UserProvider>{children}</UserProvider>
        </PostsProvider>
      </AuthProvider>
    </CurrentPostProvider>
  );
};
export default Providers;
