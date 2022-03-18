import { BsSearch } from "react-icons/bs";
import { CgProfile } from 'react-icons/cg'
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io'
import { Container } from "./styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MenuHamburguer = ({setMenuHamb}) => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
    setMenuHamb(false)
  }

  return (
    <Container>
      <div className="search-container">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>
      <div className="profile-container">
        <CgProfile className="profile-icon" />
        <div className="profile-links">
            <Link className="profile-link-login" to='/login'>Acesse sua conta</Link>
            <Link className="profile-link-register" to='/register'>Ou cadastre-se grátis.</Link>
            </div>
        </div>
        <div className="profile-line">
      </div>
      <div className="acces-pages-links">
          <ul className="ul-container">
              <li className="list-item">
                  <span onClick={() => goHome()} className="list-item-link" >Home</span>
                  <IoIosArrowForward onClick={() => goHome()} className="list-item-link" />
              </li>
              <li className="list-item">
                  <span className="list-item-link">Sobre</span>
                  <IoIosArrowForward  className="list-item-link"/>
              </li>
              <li className="list-item">
                  <span className="list-item-link" >Escrever artigo</span>
                  <IoIosArrowForward className="list-item-link" />
              </li>
              <li className="list-item">
                  <span className="list-item-link" >Minha conta</span>
                  <IoIosArrowForward className="list-item-link" />
              </li>
          </ul>
      </div>
    </Container>
  );
};

export default MenuHamburguer
