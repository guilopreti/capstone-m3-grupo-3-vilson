import HeaderHome from "../../components/HeaderHome";
import MenuHamburguer from "../../components/MenuHamburguer"
import { useState } from "react"
import MenuNav from "../../components/MenuNav";
import { useContext } from "react";
import { UserContext } from "../../Providers/users";

const Home = () => {
  const [menuHamb, setMenuHamb] = useState(false)
  const { user } = useContext(UserContext);

  const userLocal =
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || "";
  console.log(user);
  return (
    <>

      <HeaderHome menuHamb={menuHamb} setMenuHamb={setMenuHamb} />
      <MenuNav />
      {menuHamb && <MenuHamburguer setMenuHamb={setMenuHamb} />}
      <h1>
        Seja bem vindo {`${userLocal.user.name} ${userLocal.user.lastname}`}
      </h1>
    </>
  );
};

export default Home;
