import { Container, TitleContainer } from "./style";
import HeaderHome from "../../components/HeaderHome";
import MenuNav from "../../components/MenuNav";
import ListCardsRevision from "../../components/ListCardsRevision";
import { useContext, useEffect } from "react";
import api from "../../services/api";
import { RevisionPostContext } from "../../Providers/revisionPost";

const RevisionPage = () => {
  const { setRevisionPosts } = useContext(RevisionPostContext);

  useEffect(() => {
    const token =
      JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || "";
    console.log("batata");
    api
      .get("/accept", {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((response) => setRevisionPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderHome />
      <MenuNav />
      <Container>
        <div>
          <TitleContainer>
            <h2>Artigos para revisão:</h2>
          </TitleContainer>
          <ListCardsRevision />
        </div>
      </Container>
    </>
  );
};

export default RevisionPage;
