import MenuConteiner from "./styled";
import { BsSearch } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { RiHome4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MenuNav = () => {
  return (
    <MenuConteiner>
      <ul>
        <div className="menu-nav-div-menu">
          <Link className="Link" to="/">
            <li>
              <RiHome4Line className="menu-nav-icons" /> Home
            </li>
          </Link>
          <Link className="Link">
            <li>Sobre</li>
          </Link>
          <Link className="Link">
            <li>Patrocine</li>
          </Link>
          <Link className="Link">
            <li>
              <BsPencilSquare className="menu-nav-icons" /> Escrever artigo
            </li>
          </Link>
        </div>
        <div className="menu-nav-div-input">
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
