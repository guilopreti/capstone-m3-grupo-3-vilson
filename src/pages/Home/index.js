import MenuHamburguer from "../../components/MenuHamburguer"
import HeaderHome from "../../components/HeaderHome"
import MenuNav from "../../components/MenuNav"
import { useState } from "react"

const Home = () => {
  const [menuHamb, setMenuHamb] = useState(false)

  return (
    <>
      <HeaderHome menuHamb={menuHamb} setMenuHamb={setMenuHamb}/>
      <MenuNav />
      {menuHamb && <MenuHamburguer setMenuHamb={setMenuHamb}/>}
    </>
  )
}

export default Home
