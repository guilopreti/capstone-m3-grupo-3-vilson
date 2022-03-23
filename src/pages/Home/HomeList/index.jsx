import MediumCard from "../../../components/CardNews/MediumCard";
import HomeListContainer from "./styled";
import { postsDb } from "../../../Providers/posts/postsDb";

const HomeList = () => {
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
