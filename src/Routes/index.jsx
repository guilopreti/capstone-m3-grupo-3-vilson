import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register/index";
// import Login from "../pages/login/index";
import Login from "../pages/Login/index";
import CreatePost from "../pages/CreatePost";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        {/* Rota inicial com os cards de noticias */}
        Home
      </Route>
      <Route path={"/register"}>
        {/* Rota de Cadastro */}
        <Register />
      </Route>
      <Route path={"/login"}>
        {/* Rota de Login */}
        <Login />
      </Route>
      <Route path={"/user"}>
        User
        {/* Rota mostrando perfil de um user com suas noticias */}
      </Route>
      <Route path={"/post"}>
        Post
        {/* Rota mostrando uma noticia */}
      </Route>
      <Route path={"/create"}>
        <CreatePost />
      </Route>
    </Switch>
  );
};

export default Routes;
