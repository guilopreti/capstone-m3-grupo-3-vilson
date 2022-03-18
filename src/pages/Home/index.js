import HeaderHome from "../../components/HeaderHome";
import MenuNav from "../../components/MenuNav";
import { useContext } from "react";
import { UserContext } from "../../Providers/users";

const Home = () => {
  const { user } = useContext(UserContext);

  const userLocal =
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || "";
  console.log(user);
  
  return (
    <>
      <HeaderHome />
      <MenuNav />
      <h1>
        Seja bem vindo {`${userLocal.user.name} ${userLocal.user.lastname}`}
      </h1>
    </>
  );
};

export default Home;
