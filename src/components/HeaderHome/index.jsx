import { HeaderHomeContainer } from "./styled";
import { FiLogIn } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { RiHome4Line } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { FiX } from 'react-icons/fi'

const HeaderHome = ({ setMenuHamb, hambMenu }) => {
  const history = useHistory();

  const handleToggleMenu = () => {
      if (hambMenu === true) {
        setMenuHamb(false)
      }
      if (hambMenu === false) {
        setMenuHamb(true)
      }
  };

  return (
    <>
      <HeaderHomeContainer>
        <div className="header-div-parent">
          {hambMenu ? <FiX onClick={() => handleToggleMenu()} className="header-icons header-icons-dash" /> : <FiMenu onClick={() => handleToggleMenu()} className="header-icons header-icons-dash" />}
          <div className="header-div-logo">
            <h2>
              Opnion<span>!</span>
            </h2>
          </div>
          <div className="header-div-fake"></div>
          <ul>
            <li onClick={() => history.push("/")}>
              <RiHome4Line className="header-icons" /> Home
            </li>
            <li onClick={() => history.push("/register")}>Criar conta</li>
            <li onClick={() => history.push("/login")}>
              <FiLogIn className="header-icons" /> Entrar
            </li>
          </ul>
        </div>
      </HeaderHomeContainer>
    </>
  );
};

export default HeaderHome;
