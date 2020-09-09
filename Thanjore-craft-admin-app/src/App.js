import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Register, Login } from "./components/Admin/index";
import HomePage from "./components/Layout/HomePage";
import NotFound from "./components/Layout/NotFound";

const App = () => {
  const token = localStorage.getItem("usertoken");

  return (
    <Router>
      <Route
        exact
        path={"/"}
        component={
          token
            ? HomePage
            : () => {
                return (window.location = "/login");
              }
        }
      />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/profile"} component={token ? HomePage : NotFound} />
      <Route
        exact
        path={"/product/:id"}
        component={token ? HomePage : NotFound}
      />
      <Route
        exact
        path={"/add/product"}
        component={token ? HomePage : NotFound}
      />
      <Route exact path={"/orders"} component={token ? HomePage : NotFound} />
      <Route exact path={"*"} component={token ? null: NotFound} />
    </Router>
  );
};

export default App;
