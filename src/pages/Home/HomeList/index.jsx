import MediumCard from "../../../components/CardNews/MediumCard";
import HomeListContainer from "./styled";
import { postsDb } from "../../../Providers/posts/postsDb";
import { PostsContext } from "../../../Providers/posts/index.js";
import { useContext } from "react";

const HomeList = ({ inputValue }) => {
  const { posts } = useContext(PostsContext);

  const postsDbFiltered = postsDb.filter((current) => {
    return current.theme === inputValue;
  });

  return (
    <HomeListContainer>
      {postsDbFiltered.length > 0 ? (
        <ul>
          {postsDbFiltered.map((current) => (
            <MediumCard key={current.id} current={current} />
          ))}
        </ul>
      ) : (
        <ul>
          {postsDb.map((current) => (
            <MediumCard key={current.id} current={current} />
          ))}
        </ul>
      )}
    </HomeListContainer>
  );
};
export default HomeList;
