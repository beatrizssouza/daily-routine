import react from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "../../views/login/Login";
export default function Routes() {
  return (
    <BrowserRouter>
      <Route component={Login} path={["/", "/login"]} exact />
    </BrowserRouter>
  );
}
