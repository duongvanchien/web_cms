import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoginAndRegisterScreen} from "../Screens/LoginAndRegister";
import {MainNavigation} from "./MainNavigation";

export const AppNavigation = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginAndRegisterScreen} />
        <MainNavigation />
      </Switch>
    </Router>
  );
};
