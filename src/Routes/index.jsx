import { Switch, Route } from "react-router-dom";
import LoginContainer from "../pages/Login";
// import Login from "../components/Login";
import Register from "../pages/Register";

//Coloquei algumas rotas que acho que serão necessarias, mas podem mudar caso seja preciso.

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
        <LoginContainer />
      </Route>
      <Route path={"/user"}>
        User
        {/* Rota mostrando perfil de um user com suas noticias */}
      </Route>
      <Route path={"/post"}>
        Post
        {/* Rota mostrando uma noticia */}
      </Route>
    </Switch>
  );
};

export default Routes;
