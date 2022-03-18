import { HeaderHomeContainer } from "./styled";
import { FiLogIn } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderHome = ({ menuHamb, setMenuHamb }) => {
  const toggleMenu = () => {
    menuHamb ? setMenuHamb(false) : setMenuHamb(true);
  };

  return (
    <>
      <HeaderHomeContainer>
        <div className="header-div-parent">
          {menuHamb ? (
            <FiX onClick={() => toggleMenu()} className="header-icons header-icons-dash" />
          ) : (
            <FiMenu
              onClick={() => toggleMenu()}
              className="header-icons header-icons-dash"
            />
          )}

          <div className="header-div-logo">
            <h2>
              Opnion<span>!</span>
            </h2>
          </div>
          <div className="header-div-fake"></div>
          <ul>
            <Link className="Link" to="/register">
              <li>Criar conta</li>
            </Link>
            <Link className="Link" to="/login">
              <li>
                <FiLogIn className="header-icons" /> Entrar
              </li>
            </Link>
          </ul>
        </div>
      </HeaderHomeContainer>
    </>
  );
};

export default HeaderHome;
