import "./App.css";
import HeaderHome from "./components/HeaderHome";
import MenuNav from "./components/MenuNav";
import Routes from "./Routes";
import { useContext } from "react";
import { PostsContext } from "./providers/posts";

function App() {
  const { posts } = useContext(PostsContext);
  console.log(posts);

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
