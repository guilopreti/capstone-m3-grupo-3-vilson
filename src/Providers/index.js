import { UserProvider } from "./users";
import { PostsProvider } from "./posts";
import { ChangeImageProvider } from "./ChangeImage/index";
import { AuthProvider } from "./auth";
import {
  ModalProvider,
  ProfileProvider,
  ChangeOpacityProvider,
} from "./differentStates/index";
import { RevisionPostProvider } from "./revisionPost";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ChangeOpacityProvider>
        <ChangeImageProvider>
          <ProfileProvider>
            <ModalProvider>
              <PostsProvider>
                <UserProvider>
                  <RevisionPostProvider>{children}</RevisionPostProvider>
                </UserProvider>
              </PostsProvider>
            </ModalProvider>
          </ProfileProvider>
        </ChangeImageProvider>
      </ChangeOpacityProvider>
    </AuthProvider>
  );
};
export default Providers;
