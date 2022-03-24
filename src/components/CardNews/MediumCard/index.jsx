import MediumCardContainer from "./styled";
import Nft from "../../../assets/image/nft.jpg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Providers/users";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

const MediumCard = ({ current }) => {
  const [userPost, setUserPost] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get("/users").then((resp) => {
      setUserPost(
        resp.data.find((user) => {
          return user.id === current.userId;
        })
      );
    });
  }, []);

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
            <span>3 minutos de leitura</span>
          </div>
          <div className="mediumCard-div-title">
            <h2>{current.title}</h2>
          </div>
          <p>{current.text}</p>
        </div>
        <div className="mediumCard-div-user">
          <div>
            <div className="mediumCard-div-imgUser">
              <img src={userPost.img} alt="Imagem do usuário" />
            </div>
            <span>{userPost.username}</span>
          </div>
          <span className="mediumCard-span-data">{current.date}</span>
        </div>
      </div>
    </MediumCardContainer>
  );
};
export default MediumCard;
