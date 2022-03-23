import MediumCard from "../../../components/CardNews/MediumCard";
import HomeListContainer from "./styled";
import { postsDb } from "../../../Providers/posts/postsDb";
import { PostsContext } from "../../../Providers/posts/index.js";
import { useContext } from "react";

const HomeList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <HomeListContainer>
      <ul>
        {postsDb.map((current) => (
          <MediumCard key={current.id} current={current} />
        ))}
      </ul>
    </HomeListContainer>
  );
};
export default HomeList;
