import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register/index";
import Login from "../pages/Login/index";
import ArticlePage from "../pages/ArticlePage";
import Home from "../pages/Home";
import User from "../pages/User";
import TermsArticlePage from "../pages/TermsArticlePage";
import ModalProfile from "../components/Modals/ModalProfile";
import { useContext } from "react";
import { ModalContext } from "../Providers/differentStates/index";
import Aboutus from "../pages/AboutUs/index";
import CreatePost from "../pages/CreatePost/index";

import Profile from "../pages/Profile/Profile/index";

const Routes = () => {
  // const { showModal } = useContext(ModalContext);
  return (
    <Switch>
      <Route isPublic component={Home} exact path="/" />
      <Route isPublic component={Aboutus} path="/aboutus" />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={ArticlePage} path="/post" />
      <Route isPrivate component={User} path="/user" />
      <Route isPrivate component={Profile} path="/Profile" />
      <Route isPrivate component={TermsArticlePage} path="/terms" />
      <Route isPrivate component={CreatePost} path="/create" />
    </Switch>
  );
};

export default Routes;
