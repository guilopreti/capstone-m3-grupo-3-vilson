import MediumCard from "../../../components/CardNews/MediumCard";
import HomeListContainer from "./styled";
import { postsDb } from "../../../Providers/posts/postsDb";

const HomeList = ({ inputValue }) => {

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
