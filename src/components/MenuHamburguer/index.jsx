import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Container } from "./styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { AuthContext } from "../../Providers/auth";

const MenuHamburguer = ({ setMenuHamb }) => {
  const history = useHistory();

  const { handleLogout } = useContext(AuthContext);

  const userLocal = JSON.parse(
    localStorage.getItem("@CapstoneM3:userLogin") || null
  );

  const goHome = () => {
    history.push("/");
    setMenuHamb(false);
  };

  const goCreateArticle = () => {
    history.push("/terms");
    setMenuHamb(false);
  };

  const goMyAccount = () => {
    history.push("/profile");
    setMenuHamb(false);
  };

  const goAboutus = () => {
    history.push("/aboutus");
    setMenuHamb(false);
  };

  const logout = (history) => {
    handleLogout(history);
    setMenuHamb(false);
  };

  return (
    <Container>
      <div className="search-container">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>
      <div className="profile-container">
        {userLocal !== null ? (
          <img
            className="profile-icon"
            src={userLocal.user.img}
            alt="Foto de usuário"
          />
        ) : (
          <CgProfile className="profile-icon" />
        )}
        <div className="profile-links">
          {userLocal !== null ? (
            <>
              <span className="profile-username">
                {userLocal.user.username}
              </span>
              <span className="profile-username profile-email">
                {userLocal.user.email}
              </span>
            </>
          ) : (
            <>
              <Link className="profile-link-login" to="/login">
                Acesse sua conta
              </Link>
              <Link className="profile-link-register" to="/register">
                Ou cadastre-se grátis.
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="profile-line"></div>
      <div className="acces-pages-links">
        <ul className="ul-container">
          <li className="list-item">
            <span onClick={() => goHome()} className="list-item-link">
              Home
            </span>
            <IoIosArrowForward
              onClick={() => goHome()}
              className="list-item-link"
            />
          </li>
          <li className="list-item">
            <span onClick={() => goAboutus()} className="list-item-link">
              Sobre
            </span>
            <IoIosArrowForward
              onClick={() => goAboutus()}
              className="list-item-link"
            />
          </li>
          <li className="list-item">
            <span onClick={() => goCreateArticle()} className="list-item-link">
              Escrever artigo
            </span>
            <IoIosArrowForward
              onClick={() => goCreateArticle()}
              className="list-item-link"
            />
          </li>
          <li className="list-item">
            <span onClick={() => goMyAccount()} className="list-item-link">
              Minha conta
            </span>
            <IoIosArrowForward
              onClick={() => goMyAccount()}
              className="list-item-link"
            />
          </li>
          {userLocal !== null && (
            <li className="list-item">
              <span onClick={() => logout(history)} className="list-item-link">
                Sair
              </span>
              <IoIosArrowForward
                onClick={() => logout(history)}
                className="list-item-link"
              />
            </li>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default MenuHamburguer;
