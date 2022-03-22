import { FiLogIn } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageUser from "../../assets/image/elon-musk.jpg";
import { HeaderHomeContainer } from "./styled";

const HeaderHome = () => {
  const userLocal = JSON.parse(
    localStorage.getItem("@CapstoneM3:userLogin") || null
  );

  return (
    <>
      <HeaderHomeContainer>
        <div className="header-div-parent">
          <FiMenu className="header-icons header-icons-dash" />
          <div className="header-div-logo">
            <h2>
              Opnion<span>!</span>
            </h2>
          </div>
          <div className="header-div-fake"></div>
          {userLocal !== null ? (
            <div className="header-div-userLogged">
              <div className="header-div-greeting">
                <span>
                  {userLocal !== null && `Olá, ${userLocal.user.username}`}
                  <MdWavingHand className="icon-hand" />
                </span>
              </div>
              <div className="header-div-img">
                <img src={ImageUser} alt="Imagem de usuário" />
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </HeaderHomeContainer>
    </>
  );
};

export default HeaderHome;
