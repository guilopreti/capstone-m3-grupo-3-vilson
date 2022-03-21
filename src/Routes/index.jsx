import { Switch } from "react-router-dom";
import Register from "../pages/Register/index";
import Login from "../pages/Login/index";
import ArticlePage from "../pages/ArticlePage";
import Home from "../pages/Home";
import User from "../pages/User";
import TermsArticlePage from "../pages/TermsArticlePage";
import CreatePost from "../pages/CreatePost";
import Aboutus from "../pages/About-us";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route isPublic component={Home} exact path="/" />
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={ArticlePage} exact path="/post" />
      <Route isPrivate component={User} exact path="/user" />
      <Route isPrivate component={TermsArticlePage} exact path="/terms" />
      <Route isPrivate component={CreatePost} exact path="/create" />
      <Route isPublic component={Aboutus} path={"/aboutus"} />
    </Switch>
  );
};

export default Routes;
