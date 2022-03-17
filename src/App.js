import { useState } from "react";
import "./App.css";
import HeaderHome from "./components/HeaderHome";
import MenuHamburguer from "./components/MenuHamburguer";
import MenuNav from "./components/MenuNav";
import Routes from "./Routes";
// import Login from "./components/Login";

function App() {
  const [hambMenu, setMenuHamb] = useState(false)

  return (
    <div className="App">
      <HeaderHome hambMenu={hambMenu} setMenuHamb={setMenuHamb} />
      <MenuNav />
      {hambMenu && <MenuHamburguer />}
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
