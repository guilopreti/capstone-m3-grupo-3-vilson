import { Switch, Route } from "react-router-dom";
// import Login from "../components/Login";
import Register from "../components/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;
