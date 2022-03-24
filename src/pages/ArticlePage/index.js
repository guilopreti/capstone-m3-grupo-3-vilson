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
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

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
  const [textParagraphs, setTextParagraphs] = useState("");
  const [idCurrentPost] = useState(
    JSON.parse(localStorage.getItem("@CapstoneM3:postId"))
  );
  const [currentPost, setCurrentPost] = useState("");

  useEffect(() => {
    api
      .get(`/posts/${idCurrentPost}`)
      .then((response) => {
        setCurrentPost(response.data);
        setTextParagraphs(response.data.text.split("\n"));
        api
          .get(`/users/${response.data.userId}`)
          .then((resp) => setPostUser(resp.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

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
    if (!JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"))) {
      return toast.error("Logue para avaliar um post!");
    } else if (
      JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")).user.id ===
      postUser.id
    ) {
      return toast.error("Você não pode avaliar o próprio post!");
    }

    const currentValue = await api
      .get(`/posts/${currentPost.id}`)
      .then((resp) => resp.data);

    await api
      .patch(
        `/posts/${currentPost.id}`,
        {
          votes: [...currentValue.votes, index + 1],
        },
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"))
                .accessToken
            }`,
          },
        }
      )
      .then((resp) => {
        const sumVotes = resp.data.votes.reduce((acc, value) => (acc += value));
        console.log();
        api
          .patch(
            `/posts/${currentPost.id}`,
            { media: parseInt(sumVotes / resp.data.votes.length) },
            {
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"))
                    .accessToken
                }`,
              },
            }
          )
          .then((resp) => console.log(resp.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    setTimeout(async () => {
      const userPosts = await api
        .get(`/users/${currentPost.userId}/posts`)
        .then((resp) => {
          console.log(resp.data.filter(({ media }) => media !== null));
          return resp.data.filter(({ media }) => media !== null);
        });

      const userPostsSum = userPosts.reduce((acc, { media }) => {
        return (acc += media);
      }, 0);
      const userNote = { note: parseInt(userPostsSum / userPosts.length) };

      api
        .patch(`/users/${currentPost.userId}`, userNote, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"))
                .accessToken
            }`,
          },
        })
        .then((resp) => {
          console.log(resp.data);
          toast.success("Obrigado por sua avaliação!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Algo deu errado, tente novamente mais tarde!");
        });
    }, 1000);
  };

  return (
    <>
      <HeaderHome />
      <MenuNav />
      <Container>
        <div>
          <HeaderPost>
            <DateTemaContainer>
              {currentPost.theme && (
                <TemaContainer>
                  <span>{currentPost.theme}</span>
                </TemaContainer>
              )}
              {currentPost && (
                <span>
                  {months[Number(currentPost.date.split("/")[1]) - 1]}{" "}
                  {currentPost.date.split("/")[0]}
                </span>
              )}
            </DateTemaContainer>
            <TitleContainer>
              <h3>{currentPost.title}</h3>
              <p>
                Sugerido e escrito por {postUser.name}{" "}
                {postUser.note && <span>{postUser.note}</span>}
              </p>
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
            {textParagraphs && (
              <TextContainer>
                {textParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </TextContainer>
            )}
          </ImgTextContainer>
          {currentPost && currentPost.secondaryImages.length > 0 && (
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
                  <IoIosArrowDropleftCircle
                    onClick={previousImage}
                    size={"40px"}
                    color={"#1768AC"}
                  />

                  <IoIosArrowDroprightCircle
                    onClick={previousImage}
                    size={"40px"}
                    color={"#1768AC"}
                  />
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
        </div>
      </Container>
    </>
  );
};

export default ArticlePage;
