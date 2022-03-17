import "./App.css";
import HeaderHome from "./components/HeaderHome";
import MenuNav from "./components/MenuNav";
import Routes from "./Routes";
// import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <MenuNav />
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
