import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginCrud from "../../views/login/components/LoginCrud";
import Login from "../../views/login/Login";
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact>
          <Login />
        </Route>
        <Route path={"/cadastro"}>
          <LoginCrud />
        </Route>
      </Switch>
    </Router>
  );
}
