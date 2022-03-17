import MenuConteiner from "./styled";
import { BsSearch } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const MenuNav = () => {
  return (
    <MenuConteiner>
      <ul>
        <li>
          <BsPencilSquare className="menu-nav-icons" /> Escrever artigo
        </li>
        <div>
          <input placeholder="Digite aqui sua pesquisa" />
          <BsSearch className="menu-nav-icons-search" />
        </div>
        <li>
          <FiUser className="menu-nav-icons" /> Minha conta
        </li>
      </ul>
    </MenuConteiner>
  );
};
export default MenuNav;
