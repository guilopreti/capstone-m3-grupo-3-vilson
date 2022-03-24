import { FiLogIn } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import { HeaderHomeContainer } from "./styled";
import { useState, useContext } from "react";
import { FiX } from "react-icons/fi";
import { ChangeImageContext } from "../../Providers/ChangeImage";

import MenuHamburguer from "../MenuHamburguer";

const HeaderHome = () => {
  const [menuHamb, setMenuHamb] = useState(false);
  const userLocal = JSON.parse(
    localStorage.getItem("@CapstoneM3:userLogin") || null
  );

  const toggleMenu = () => {
    menuHamb ? setMenuHamb(false) : setMenuHamb(true);
  };

  const { image } = useContext(ChangeImageContext);

  // useEffect(() => {
  //   const token =
  //     JSON.parse(localStorage.getItem("@CapstoneM3:userLogin")) || [];
  // })

  return (
    <>
      <HeaderHomeContainer>
        <div className="header-div-parent">
          {menuHamb ? (
            <FiX
              onClick={() => toggleMenu()}
              className="header-icons header-icons-dash"
            />
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
          {userLocal !== null ? (
            <div className="header-div-userLogged">
              <div className="header-div-greeting">
                <span>
                  {userLocal !== null && `Olá, ${userLocal.user.username}`}
                  <MdWavingHand className="icon-hand" />
                </span>
              </div>
              <div className="header-div-img">
                {image ? (
                  <img src={image} alt="Imagem de usuário" />
                ) : (
                  <img src={userLocal.user.img} alt="Imagem de usuário" />
                )}
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
      {menuHamb && <MenuHamburguer setMenuHamb={setMenuHamb} />}
    </>
  );
};

export default HeaderHome;
