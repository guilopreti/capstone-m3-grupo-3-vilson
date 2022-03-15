import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register/index";
// import Login from "../pages/login/index";
import Login from "../pages/Login/index";

const Routes = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
