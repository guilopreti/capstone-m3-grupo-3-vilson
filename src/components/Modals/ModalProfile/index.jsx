import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/auth";
import { ModalContext } from "../../../Providers/differentStates/index";
import { useHistory } from "react-router-dom";

import ModalProfileContainer, { MainModal } from "./styled";

const ModalProfile = () => {
  const { setShowModal } = useContext(ModalContext);
  const { handleLogout } = useContext(AuthContext);

  const history = useHistory();

  const userLocal = JSON.parse(
    localStorage.getItem("@CapstoneM3:userLogin") || null
  );
  return (
    <>
      <MainModal>
        <ModalProfileContainer>
          <li className="modal-perfil-conta">
            <span className="modal-perfil-conta-title">Conta</span>
            <span
              className="modal-perfil-conta-x"
              onClick={() => setShowModal(false)}
            >
              x
            </span>
          </li>
          <hr></hr>
          <li className="modal-perfil-li-container">
            <div className="modal-perfil-div-img">
              <img src={userLocal.user.img} alt="Imagem perfil"></img>
            </div>
            <div className="modal-perfil-div-name">
              <span className="modal-perfil-span-name">
                {userLocal !== null && userLocal.user.username}
              </span>
              <span className="modal-perfil-span-email">
                {userLocal !== null && userLocal.user.email}
              </span>
            </div>
          </li>
          <hr></hr>
          <Link className="Link" to="/profile">
            <li onClick={() => setShowModal(false)}>
              <span>Ver perfil</span>
            </li>
          </Link>
          <li onClick={() => setShowModal(false)}>
            <span>Suas postagens</span>
          </li>
          <li onClick={() => setShowModal(false)}>
            <span>Favoritos</span>
          </li>
          <li onClick={() => setShowModal(false)}>
            <span>Política de Privacidade</span>
          </li>
          <li onClick={() => setShowModal(false)}>
            <span>Termos de Serviço</span>
          </li>
          <hr></hr>
          <Link className="Link" to="/">
            <li
              onClick={() => {
                setShowModal(false);
                return handleLogout(history);
              }}
            >
              <span>Sair</span>
            </li>
          </Link>
        </ModalProfileContainer>
      </MainModal>
    </>
  );
};

export default ModalProfile;
