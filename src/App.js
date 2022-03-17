import Routes from "./Routes";
import { useContext } from "react";
import { PostsContext } from "./Providers/posts";
import GlobalStyles from "./styles/globalStyles";

function App() {
  const { posts } = useContext(PostsContext);
  console.log(posts);

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
