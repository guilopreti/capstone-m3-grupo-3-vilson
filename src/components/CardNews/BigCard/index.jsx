import BigCardContainer from "./styled";

import Nft from "../../../assets/image/nft.jpg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Providers/users";
import { useHistory } from "react-router-dom";
import api from "../../../services/api";

const BigCard = ({ current }) => {
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
    <BigCardContainer onClick={() => openPostPage(current.id)}>
      <div className="bigCard-div-img">
        <img src={current.primaryImage} alt="Ilustração da notícia" />
      </div>
      <div className="bigCard-div-main">
        <div className="bigCard-div-theme-title-paragraph">
          <div className="bigCard-div-theme">
            <div>
              <span>{current.theme}</span>
            </div>
            <span>3 minutos de leitura</span>
          </div>
          <div className="bigCard-div-title">
            <h2>{current.title}</h2>
          </div>
          <p>{current.text}</p>
        </div>
        <div className="bigCard-div-user">
          <div>
            <div className="bigCard-div-imgUser">
              <img src={userPost.img} alt="Imagem do usuário" />
            </div>
            <span>{userPost.username}</span>
          </div>
          <span className="bigCard-span-data">{current.date}</span>
        </div>
      </div>
    </BigCardContainer>
  );
};
export default BigCard;
