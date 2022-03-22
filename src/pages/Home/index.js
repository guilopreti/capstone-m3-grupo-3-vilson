import { useContext } from 'react'
import HeaderHome from '../../components/HeaderHome'
import MenuNav from '../../components/MenuNav'
import { UserContext } from '../../Providers/users'

const Home = () => {
  const { user } = useContext(UserContext)

  const userLocal =
    JSON.parse(localStorage.getItem('@CapstoneM3:userLogin')) || ''
  console.log(user)

  return (
    <>
      <HeaderHome />
      <MenuNav />
    </>
  )
}

export default Home
