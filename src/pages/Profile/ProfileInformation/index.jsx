import { FaPen } from "react-icons/fa";
import ProfileInformationContainer from "./styled";
import { MainProfile } from "../ChangeInformation/styled";
import { ProfileTitleContainer } from "./styled";
import ImageProfile from "../../../assets/image/elon-musk.jpg";
import { useContext } from "react";
import { ProfileContext } from "../../../Providers/differentStates";

const ProfileInformation = () => {
  const { setShowChangeInformation } = useContext(ProfileContext);

  const userLocal = JSON.parse(
    localStorage.getItem("@CapstoneM3:userLogin") || null
  );

  return (
    <MainProfile>
      <ProfileTitleContainer>
        <div className="profile-div-img">
          <img src={ImageProfile} alt="Imagem de perfil" />
        </div>
        <div className="profile-div-name">
          <div>
            <h1>{userLocal !== null && userLocal.user.name}</h1>
            <h3>{userLocal !== null && userLocal.user.username}</h3>
          </div>
        </div>
        <div className="profile-div-edit">
          <span onClick={() => setShowChangeInformation(true)}>
            <FaPen className="profileInformation-icon-pen" />
            Editar
          </span>
        </div>
      </ProfileTitleContainer>
      <ProfileInformationContainer>
        <ul>
          <li>
            <span>Nome:</span>
            <p>{userLocal !== null && userLocal.user.name}</p>
          </li>
          <li className="profile-li-biography">
            <span>Biografia:</span>
            <p>{userLocal !== null && userLocal.user.biography}</p>
          </li>
          <li>
            <span>Nome de exibição:</span>
            <p>{userLocal !== null && userLocal.user.username}</p>
          </li>
          <li>
            <span>E-mail:</span>
            <p>{userLocal !== null && userLocal.user.email}</p>
          </li>
        </ul>
      </ProfileInformationContainer>
    </MainProfile>
  );
};

export default ProfileInformation;
