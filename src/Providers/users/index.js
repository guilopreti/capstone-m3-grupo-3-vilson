import { createContext, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
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
