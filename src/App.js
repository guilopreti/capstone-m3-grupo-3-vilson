import "./App.css";
import Routes from "./Routes";
import { useContext } from "react";
import { PostsContext } from "./providers/posts";

function App() {
  const { posts } = useContext(PostsContext);
  console.log(posts);

  return (
    <div className="App">
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
