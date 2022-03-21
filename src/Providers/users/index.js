import { createContext, useState, useContext } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { AuthContext } from '../auth'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('@CapstoneM3:userLogin')) || []
  )
  const { setAuthenticated } = useContext(AuthContext)

  const handleUserRegister = (data, history) => {
    api
      .post('/users', data)
      .then((_) => {
        toast.success('Cadastro realizado com sucesso')
        history.push('/login')
      })
      .catch((_) => {
        toast.error('Falha ao tentar realizar o cadastro')
      })
  }

  const userCurrentLogin = async (data, history) => {
    const response = await api.post('/login', data).catch((err) => {
      toast.error('Algo deu errado, e-mail ou senha incorretos')
    })

    localStorage.setItem(
      '@CapstoneM3:userLogin',
      JSON.stringify(response.data.accessToken)
    )
    history.push('/')
    setAuthenticated(true)
  }

  /*const findUserJwtDecode = async () => {
    const response = await api.get('/users')
    const token = JSON.parse(localStorage.getItem('@CapstoneM3:userLogin'))
    const decoded = jwt_decode(token)

    const findedUser = response.data.find((user) => {
      return user.email === decoded.email
    })
    console.log(findedUser)
    return findedUser
  }*/

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userCurrentLogin,
        handleUserRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
