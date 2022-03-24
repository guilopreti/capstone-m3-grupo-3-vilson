import MediumCard from "../../../components/CardNews/MediumCard";
import SmallCard from "../../../components/CardNews/SmallCard";
import BigCard from "../../../components/CardNews/BigCard";
import HomeListContainer from "./styled";
import { HomeListPrimaryContainer, HomeListContainerTop } from "./styled";
import { postsDb, postsDb2, postsDb3 } from "../../../Providers/posts/postsDb";
import { PostsContext } from "../../../Providers/posts/index.js";
import { useContext } from "react";

const HomeList = ({ inputValue }) => {
  const { posts } = useContext(PostsContext);

  const postsDbFiltered = postsDb.filter((current) => {
    return current.theme === inputValue;
  });

  return (
    <>
      <HomeListContainerTop>
        <ul>
          {postsDb2.map((current) => (
            <MediumCard key={current.id} current={current} />
          ))}
        </ul>
      </HomeListContainerTop>
      <HomeListPrimaryContainer>
        <ul className="primary-ul-bigCard">
          {postsDb.map((current) => (
            <BigCard key={current.id} current={current} />
          ))}
        </ul>
        <ul className="primary-ul-smallCard">
          {postsDb2.map((current) => (
            <SmallCard key={current.id} current={current} />
          ))}
        </ul>
      </HomeListPrimaryContainer>
      <HomeListContainer>
        <ul>
          {postsDb3.map((current) => (
            <SmallCard key={current.id} current={current} />
          ))}
        </ul>
      </HomeListContainer>
    </>
    // <HomeListContainer>
    //   {postsDbFiltered.length > 0 ? (
    //     <ul>
    //       {postsDbFiltered.map((current) => (
    //         <MediumCard key={current.id} current={current} />
    //       ))}
    //     </ul>
    //   ) : (
    //     <ul>
    //       {postsDb.map((current) => (
    //         <MediumCard key={current.id} current={current} />
    //       ))}
    //     </ul>
    //   )}
    // </HomeListContainer>
  );
};
export default HomeList;
