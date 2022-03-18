import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register/index";
import Login from "../pages/Login/index";
import ArticlePage from "../pages/ArticlePage";
import Home from "../pages/Home";
import User from "../pages/User";
import TermsArticlePage from "../pages/TermsArticlePage";
import CreatePost from "../pages/CreatePost";
import HeaderHome from "../components/HeaderHome";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path={"/register"}>
        <Register />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/user"}>
        <User />
      </Route>
      <Route path="/terms">
        <TermsArticlePage />
      </Route>
      <Route exact path="/post">
        <ArticlePage />
      </Route>
      <Route path={"/create"}>
        <HeaderHome />
        <CreatePost />
      </Route>
    </Switch>
  );
};

export default Routes;
