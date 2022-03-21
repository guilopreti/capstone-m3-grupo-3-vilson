import { HeaderHomeContainer } from './styled'
import { FiLogIn } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Providers/auth'
import jwt_decode from 'jwt-decode'
import api from '../../services/api'
import { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import MenuHamburguer from '../MenuHamburguer'

const HeaderHome = () => {
  const [menuHamb, setMenuHamb] = useState(false)
  const [users, setUsers] = useState([])
  const [findUser, setFindUser] = useState()
  const { authenticated } = useContext(AuthContext)

  const toggleMenu = () => {
    menuHamb ? setMenuHamb(false) : setMenuHamb(true)
  }

  const authorizedUser = async () => {
    await api.get('/users').then((response) => {
      return setUsers(response.data)
    })
  }
  useEffect(() => {
    authorizedUser()
    const token =
      JSON.parse(localStorage.getItem('@CapstoneM3:userLogin')) || {}
    const decoded = jwt_decode(token)
    const findedUser = users.find((user) => {
      return user.id === Number(decoded.sub)
    })
    setFindUser(findedUser)
  }, [])

  return (
    <>
      <HeaderHomeContainer>
        <div className='header-div-parent'>
          {menuHamb ? (
            <FiX
              onClick={() => toggleMenu()}
              className='header-icons header-icons-dash'
            />
          ) : (
            <FiMenu
              onClick={() => toggleMenu()}
              className='header-icons header-icons-dash'
            />
          )}

          <div className='header-div-logo'>
            <h2>
              Opnion<span>!</span>
            </h2>
          </div>
          <div className='header-div-fake'></div>
          {authenticated ? (
            <ul>
              <li>
                <img src={findUser?.img} alt='' /> {findUser?.name}
              </li>

              <li>
                <FiLogIn className='header-icons' /> Sair
              </li>
            </ul>
          ) : (
            <ul>
              <Link className='Link' to='/register'>
                <li>Criar conta</li>
              </Link>
              <Link className='Link' to='/login'>
                <li>
                  <FiLogIn className='header-icons' /> Entrar
                </li>
              </Link>
            </ul>
          )}
        </div>
      </HeaderHomeContainer>
      {menuHamb && <MenuHamburguer setMenuHamb={setMenuHamb} />}
    </>
  )
}

export default HeaderHome
