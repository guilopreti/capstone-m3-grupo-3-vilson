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
  RatingContainer,
} from "./style";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { NoteContainer } from "../../components/CardNews/BigCard/styled";

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
  const [clicked, setClicked] = useState([false, false, false, false, false]);

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
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    setTimeout(async () => {
      const userPosts = await api
        .get(`/users/${currentPost.userId}/posts`)
        .then((resp) => {
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
          toast.success("Obrigado por sua avaliação!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Algo deu errado, tente novamente mais tarde!");
        });
    }, 1000);
  };

  const handleStarClick = (index) => {
    let clickStates = [...clicked];

    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        clickStates[i] = true;
      } else {
        clickStates[i] = false;
      }
    }
    setClicked(clickStates);
    registerVote(index);
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
                {postUser.note && (
                  <NoteContainer>{postUser.note.toFixed(2)}</NoteContainer>
                )}
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
                    onClick={nextImage}
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
              <RatingContainer>
                {/*stars.map((value, index) => {
                  return (
                    <span key={index} onClick={() => registerVote(index)}>
                      {value}
                    </span>
                  )
                })*/}
                <div>
                  <AiFillStar
                    onClick={() => handleStarClick(0)}
                    className={clicked[0] ? "clickedstar" : null}
                  />
                  <AiFillStar
                    onClick={() => handleStarClick(1)}
                    className={clicked[1] ? "clickedstar" : null}
                  />
                  <AiFillStar
                    onClick={() => handleStarClick(2)}
                    className={clicked[2] ? "clickedstar" : null}
                  />
                  <AiFillStar
                    onClick={() => handleStarClick(3)}
                    className={clicked[3] ? "clickedstar" : null}
                  />
                  <AiFillStar
                    onClick={() => handleStarClick(4)}
                    className={clicked[4] ? "clickedstar" : null}
                  />
                </div>
              </RatingContainer>
            </div>
          </UserVoteContainer>
        </div>
      </Container>
    </>
  );
};

export default ArticlePage;
