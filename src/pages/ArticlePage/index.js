import HeaderHome from "../../components/HeaderHome";
import MenuNav from "../../components/MenuNav";
import {
  Container,
  DateTemaContainer,
  FontContainer,
  HeaderPost,
  ImgContainer,
  ImgTextContainer,
  TemaContainer,
  TextContainer,
  TitleContainer,
  UserVoteContainer,
  CarouselContent,
} from "./style";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { CurrentPostContext } from "../../Providers/currentPost";
import api from "../../services/api";

const ArticlePage = () => {
  const [postUser, setPostUser] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [months] = useState([
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ]);

  const { currentPost } = useContext(CurrentPostContext);

  useEffect(() => {
    api
      .get(`/users/${currentPost.userId}`)
      .then((resp) => setPostUser(resp.data))
      .catch((err) => console.log(err));
  }, [currentPost]);

  const textParagraphs = currentPost.text.split("\n");

  const nextImage = () => {
    if (currentImage < currentPost.secondaryImages.length - 1) {
      return setCurrentImage(currentImage + 1);
    } else {
      return setCurrentImage(0);
    }
  };

  const previousImage = () => {
    if (currentImage !== 0) {
      return setCurrentImage(currentImage - 1);
    } else {
      return setCurrentImage(currentPost.secondaryImages.length - 1);
    }
  };

  const stars = [1, 2, 3, 4, 5];

  const registerVote = async (index) => {
    console.log(index + 1);
  };

  return (
    <>
      <HeaderHome />
      <MenuNav />
      <Container>
        <HeaderPost>
          <DateTemaContainer>
            {currentPost.theme && (
              <TemaContainer>
                <span>{currentPost.theme}</span>
              </TemaContainer>
            )}

            <span>
              {months[Number(currentPost.date.split("/")[1]) - 1]}{" "}
              {currentPost.date.split("/")[0]}
            </span>
          </DateTemaContainer>
          <TitleContainer>
            <h3>{currentPost.title}</h3>
            <p>Sugerido e escrito por {postUser.name}</p>
          </TitleContainer>
        </HeaderPost>
        <ImgTextContainer>
          {currentPost.primaryImage && (
            <ImgContainer>
              <img
                src={currentPost.primaryImage}
                alt={`${currentPost.title} primaryImage`}
              />
            </ImgContainer>
          )}
          <TextContainer>
            {textParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TextContainer>
        </ImgTextContainer>
        {currentPost.secondaryImages.length > 0 && (
          <CarouselContent>
            <figure>
              <img
                src={currentPost.secondaryImages[currentImage]}
                alt="SecondaryImages"
              />
              <figcaption>SecondaryImages</figcaption>
            </figure>

            {currentPost.secondaryImages.length > 1 && (
              <div>
                <button onClick={previousImage}>Voltar</button>
                <button onClick={nextImage}>Avançar</button>
              </div>
            )}
          </CarouselContent>
        )}

        <FontContainer>
          <span>
            Fonte:{" "}
            <span>
              {currentPost.font
                ? currentPost.font
                : "Conteúdo sem fonte confiável!"}
            </span>
          </span>
        </FontContainer>
        <UserVoteContainer>
          <div>
            <span>Avalie este artigo!</span>
            <div>
              {stars.map((value, index) => {
                return (
                  <span key={index} onClick={() => registerVote(index)}>
                    {value}
                  </span>
                );
              })}
            </div>
          </div>
        </UserVoteContainer>
      </Container>
    </>
  );
};

export default ArticlePage;
