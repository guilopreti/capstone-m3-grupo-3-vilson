import HeaderHome from "../../../components/HeaderHome";
import MenuNav from "../../../components/MenuNav";

import { MainHome } from "./styled";
import HomeList from "../HomeList/index";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <MenuNav />
      <MainHome>
        <HomeList></HomeList>
      </MainHome>
    </>
  );
};

export default Home;
