import MediumCardContainer from "./styled";
import Nft from "../../../assets/image/nft.jpg";

const MediumCard = ({ current }) => {
  return (
    <MediumCardContainer>
      <div className="mediumCard-div-img">
        <img src={current.primaryImage} alt="Ilustração da notícia" />
      </div>
      <div className="mediumCard-div-main">
        <div className="mediumCard-div-theme-title-paragraph">
          <div className="mediumCard-div-theme">
            <div>
              <span>{current.theme}</span>
            </div>
            <span>{current.time_read}</span>
          </div>
          <div className="mediumCard-div-title">
            <h2>{current.title}</h2>
          </div>
          <p>{current.text}</p>
        </div>
        <div className="mediumCard-div-user">
          <div>
            <div className="mediumCard-div-imgUser">
              <img src={Nft} alt="Imagem do usuário" />
            </div>
            <span>{current.author}</span>
          </div>
          <span className="mediumCard-span-data">{current.date}</span>
        </div>
      </div>
    </MediumCardContainer>
  );
};
export default MediumCard;
