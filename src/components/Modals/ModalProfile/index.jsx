import { Link } from "react-router-dom";
import ImageProfile from "../../../assets/image/elon-musk.jpg";
import { useContext } from "react";
import { UserContext } from "../../../Providers/users";
import ModalProfileContainer, { MainModal } from "./styled";

import { ModalContext } from "../../../Providers/differentStates/index";

const ModalProfile = () => {
  const { setShowModal } = useContext(ModalContext);
  const { setUser } = useContext(UserContext);
  // const { setShowChangeInformation } = useContext(showChangeInformation);

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
              <img src={ImageProfile} alt="Imagem perfil"></img>
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
                localStorage.clear();
                setUser([undefined]);
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
