import { UserProvider } from "./users";
import { PostsProvider } from "./posts";
import { ChangeImageProvider } from "./ChangeImage/index";
import {
  ModalProvider,
  ProfileProvider,
  ChangeOpacityProvider,
} from "./differentStates/index";

const Providers = ({ children }) => {
  return (
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
  );
};
export default Providers;
