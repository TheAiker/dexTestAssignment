import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import RoutesCSS from "./routes.module.css";

import { HamburgerMenu } from "../components/ui/menus/hamburgerBar";
import { TopNavBar } from "../components/ui/menus/navBar";
import { PlayersPage } from "./players-page/playersPage";
import { TeamsPage } from "./teams-page/teamsPage";
import { SignIn } from "./sign-in-page/signInPage";
import { SignUp } from "./sign-up-page/signUpPage";

export function PageRoutes(): JSX.Element {
  return (
    <Router>
      <div>
        <TopNavBar />
      </div>
      <div className={RoutesCSS.pageContainer}>
        <div className={RoutesCSS.hamburgerContainer}>
          <HamburgerMenu />
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect exact to="/signIn" />
          </Route>
          <Route path="/signIn" component={SignIn}>
            <SignIn />
          </Route>
          <Route path="/signUp" component={SignUp}>
            <SignUp />
          </Route>
          <Route path="/players" component={PlayersPage}>
            <PlayersPage />
          </Route>
          <Route path="/teams" component={TeamsPage}>
            <TeamsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
