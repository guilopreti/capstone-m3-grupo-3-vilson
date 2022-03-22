import ChangeInformation from "../ChangeInformation/index";
import ProfileInformation from "../ProfileInformation/index";
import { useContext } from "react";
import { ProfileContext } from "../../../Providers/differentStates";
import HeaderHome from "../../../components/HeaderHome";
import MenuNav from "../../../components/MenuNav";

const Profile = () => {
  const { showChangeInformation } = useContext(ProfileContext);

  return (
    <>
      <HeaderHome />
      <MenuNav hiddenSearch hiddenMyAccount />
      {showChangeInformation ? <ChangeInformation /> : <ProfileInformation />}
    </>
  );
};
export default Profile;
