import BigCardContainer from "./styled";

import Nft from "../../../assets/image/nft.jpg";

const BigCard = ({ current }) => {
  return (
    <BigCardContainer>
      <div className="bigCard-div-img">
        <img src={current.primaryImage} alt="Ilustração da notícia" />
      </div>
      <div className="bigCard-div-main">
        <div className="bigCard-div-theme-title-paragraph">
          <div className="bigCard-div-theme">
            <div>
              <span>{current.theme}</span>
            </div>
            <span>{current.time_read}</span>
          </div>
          <div className="bigCard-div-title">
            <h2>{current.title}</h2>
          </div>
          <p>{current.text}</p>
        </div>
        <div className="bigCard-div-user">
          <div>
            <div className="bigCard-div-imgUser">
              <img src={Nft} alt="Imagem do usuário" />
            </div>
            <span>{current.author}</span>
          </div>
          <span className="bigCard-span-data">{current.date}</span>
        </div>
      </div>
    </BigCardContainer>
  );
};
export default BigCard;
