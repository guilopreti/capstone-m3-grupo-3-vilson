import MediumCardContainer from "./styled";
import Nft from "../../../assets/image/nft.jpg";
import { useContext } from "react";
import { UserContext } from "../../../Providers/users";
import { useHistory } from "react-router-dom";

const MediumCard = ({ current }) => {
  const { listUsers } = useContext(UserContext);
  const history = useHistory();

  const findUser = listUsers.find((user) => {
    return user.id === current.userId;
  });

  const openPostPage = (postId) => {
    localStorage.setItem("@CapstoneM3:postId", postId);

    history.push("/post");
  };

  return (
    <MediumCardContainer onClick={() => openPostPage(current.id)}>
      <div className="mediumCard-div-img">
        <img src={current.primaryImage} alt="Ilustração da notícia" />
      </div>
      <div className="mediumCard-div-main">
        <div className="mediumCard-div-theme-title-paragraph">
          <div className="mediumCard-div-theme">
            <div>
              <span>{current.theme}</span>
            </div>
            {/* <span>{current.time_read}</span> */}
          </div>
          <div className="mediumCard-div-title">
            <h2>{current.title}</h2>
          </div>
          <p>{current.text}</p>
        </div>
        <div className="mediumCard-div-user">
          <div>
            <div className="mediumCard-div-imgUser">
              <img src={findUser.img} alt="Imagem do usuário" />
            </div>
            <span>{findUser.username}</span>
          </div>
          <span className="mediumCard-span-data">{current.date}</span>
        </div>
      </div>
    </MediumCardContainer>
  );
};
export default MediumCard;
