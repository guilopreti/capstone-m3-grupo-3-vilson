import MediumCard from "../../../components/CardNews/MediumCard";
import SmallCard from "../../../components/CardNews/SmallCard";
import BigCard from "../../../components/CardNews/BigCard";
import HomeListContainer from "./styled";
import {
  HomeListPrimaryContainer,
  HomeListContainerTop,
  HomeListTitle,
  HomeListTitleTop,
} from "./styled";
import { PostsContext } from "../../../Providers/posts/index.js";
import { useContext } from "react";

const HomeList = ({ inputValue }) => {
  const { posts } = useContext(PostsContext);

  const postsDbFiltered = posts.filter((current) => {
    return current.theme.toLowerCase() === inputValue.toLowerCase();
  });

  return (
    <>
      {postsDbFiltered.length > 0 ? (
        <>
          <HomeListTitleTop>
            <h2>{inputValue}</h2>
          </HomeListTitleTop>
          <HomeListContainerTop>
            <ul>
              {postsDbFiltered.map((current) => {
                return <MediumCard key={current.id} current={current} />;
              })}
            </ul>
          </HomeListContainerTop>
        </>
      ) : (
        <>
          <HomeListTitleTop>
            <h2>Tecnologia</h2>
          </HomeListTitleTop>
          <HomeListContainerTop>
            <ul>
              {posts.map((current) => {
                if (current.id <= 3) {
                  return <MediumCard key={current.id} current={current} />;
                }
              })}
            </ul>
          </HomeListContainerTop>
          <HomeListTitle>
            <h2>Mundo</h2>
          </HomeListTitle>
          <HomeListPrimaryContainer>
            <ul className="primary-ul-bigCard">
              {posts.map((current) => {
                if (current.id === 4) {
                  return <BigCard key={current.id} current={current} />;
                }
              })}
            </ul>
            <ul className="primary-ul-smallCard">
              {posts.map((current) => {
                if (current.id >= 5 && current.id <= 7) {
                  return <SmallCard key={current.id} current={current} />;
                }
              })}
            </ul>
          </HomeListPrimaryContainer>
          <HomeListTitle>
            <h2>Artigos</h2>
          </HomeListTitle>
          <HomeListContainer>
            <ul>
              {posts.map((current) => {
                if (current.id > 7) {
                  return <SmallCard key={current.id} current={current} />;
                }
              })}
            </ul>
          </HomeListContainer>
        </>
      )}
    </>
  );
};
export default HomeList;
