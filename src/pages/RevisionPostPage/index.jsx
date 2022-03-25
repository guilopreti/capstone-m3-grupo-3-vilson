import HeaderHome from "../../components/HeaderHome";
import MenuNav from "../../components/MenuNav";
import {
  Button,
  Container,
  DateTemaContainer,
  FeedBackContainer,
  FontContainer,
  HeaderPost,
  ImgContainer,
  ImgTextContainer,
  TemaContainer,
  TextContainer,
  TitleContainer,
} from "./style";
import { useEffect, useState, useContext } from "react";
import api from "../../services/api";
import { UserContext } from "../../Providers/users";
import { RevisionPostContext } from "../../Providers/revisionPost";
import { useHistory } from "react-router-dom";

const RevisionPostPage = () => {
  const [idPostRevision] = useState(
    JSON.parse(localStorage.getItem("@Capstone:postIdRevision"))
  );
  const [postRevision, setPostRevision] = useState({});
  const [textParagraphs, setTextParagraphs] = useState([]);

  const token = JSON.parse(localStorage.getItem("@CapstoneM3:userLogin"));

  const { handleDeleteArticleRevision, handleApprovedAticleRevision } =
    useContext(RevisionPostContext);

  const { listUsers } = useContext(UserContext);
  const findUser = listUsers.find((user) => {
    return user.id === postRevision.userId;
  });

  const history = useHistory();

  useEffect(() => {
    api
      .get(`/accept/${idPostRevision}`, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((response) => {
        setPostRevision(response.data);
        setTextParagraphs(response.data.text.split("\n"));
      });
  }, []);

  return (
    <>
      <HeaderHome />
      <MenuNav hiddenSearch />
      <Container>
        <div>
          <HeaderPost>
            <DateTemaContainer>
              <TemaContainer>
                <span>{postRevision.theme}</span>
              </TemaContainer>
              <span>{postRevision.date}</span>
            </DateTemaContainer>
            <TitleContainer>
              <h3>{postRevision.title}</h3>
              <p>Sugerido e escrito por {findUser?.username}</p>
            </TitleContainer>
          </HeaderPost>
          <ImgTextContainer>
            <ImgContainer>
              <img src={postRevision.primaryImage} alt={postRevision.theme} />
            </ImgContainer>
            <TextContainer>
              {textParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </TextContainer>
          </ImgTextContainer>
          <FontContainer>
            <span>
              Fonte: <span>{postRevision.font}</span>
            </span>
          </FontContainer>
          <FeedBackContainer>
            <h3>Digite aqui o feedback para o usúario:</h3>
            <textarea placeholder="Digite seu feedback aqui"></textarea>
            <div>
              <Button
                approved
                onClick={() =>
                  handleApprovedAticleRevision(postRevision, history)
                }
              >
                Aprovar
              </Button>
              <Button
                onClick={() =>
                  handleDeleteArticleRevision(postRevision.id, history)
                }
              >
                Recusar
              </Button>
            </div>
          </FeedBackContainer>
        </div>
      </Container>
    </>
  );
};

export default RevisionPostPage;
