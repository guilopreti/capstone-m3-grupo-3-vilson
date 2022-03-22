import { UserProvider } from "./users";
import { PostsProvider } from "./posts";
import { ChangeImageProvider } from "./ChangeImage/index";
import { AuthProvider } from "./auth/index";
import {
  ModalProvider,
  ProfileProvider,
  ChangeOpacityProvider,
} from "./differentStates/index";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ChangeOpacityProvider>
        <ChangeImageProvider>
          <ProfileProvider>
            <ModalProvider>
              <PostsProvider>
                <UserProvider>{children}</UserProvider>
              </PostsProvider>
            </ModalProvider>
          </ProfileProvider>
        </ChangeImageProvider>
      </ChangeOpacityProvider>
    </AuthProvider>
  );
};
export default Providers;
