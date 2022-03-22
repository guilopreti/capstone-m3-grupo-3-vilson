import { BsSearch } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { RiHome4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../../Providers/differentStates/index";
import MenuConteiner from "./styled";

const MenuNav = ({ hiddenSearch = false, hiddenMyAccount = false }) => {
  const { setShowModal } = useContext(ModalContext);

  const LocalStorage =
    JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || null;

  return (
    <MenuConteiner
      hiddenSearch={hiddenSearch}
      hiddenMyAccount={hiddenMyAccount}
    >
      <ul>
        <div className="menu-nav-div-menu">
          <Link className="Link" to="/">
            <li>
              <RiHome4Line className="menu-nav-icons" /> Home
            </li>
          </Link>
          <Link className="Link" to="/">
            <li>Sobre</li>
          </Link>
          <Link className="Link" to="/">
            <li>Patrocine</li>
          </Link>
          <Link className="Link" to="/">
            <li>
              <BsPencilSquare className="menu-nav-icons" /> Escrever artigo
            </li>
          </Link>
        </div>
        <div className="menu-nav-div-input">
          <input placeholder="Digite aqui sua pesquisa" />
          <BsSearch className="menu-nav-icons-search" />
        </div>
        <li className="menu-nav-li-hidden" onClick={() => setShowModal(true)}>
          {LocalStorage !== null && (
            <div>
              <FiUser className="menu-nav-icons menu-nav-icons-hidden" />
              Minha conta
            </div>
          )}
        </li>
      </ul>
    </MenuConteiner>
  );
};
export default MenuNav;
