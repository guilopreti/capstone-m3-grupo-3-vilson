import HeaderHome from "../../../components/HeaderHome";
import MenuNav from "../../../components/MenuNav";

import { MainHome } from "./styled";
import HomeList from "../HomeList/index";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <HeaderHome />
      <MenuNav setInputValue={setInputValue} />
      <MainHome>
        <HomeList inputValue={inputValue}></HomeList>
      </MainHome>
    </>
  );
};

export default Home;
