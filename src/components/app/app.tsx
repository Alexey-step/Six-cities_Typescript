import * as React from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import Login from "../pages/login/login";
import Property from "../pages/property/property";
import NotFound from "../pages/not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import {AppRoute} from "../../const";

const App: React.FC = () => {

  return (
    <Switch>
      <Route path={`${AppRoute.MAIN}`} exact>
        <MainPage/>
      </Route>
      <PrivateRoute exact
        path={`${AppRoute.FAVORITES}`}
        render={() => <FavoritesPage/>}
      >
      </PrivateRoute>
      <Route path={`${AppRoute.LOGIN}`} exact>
        <Login/>
      </Route>
      <Route path={`${AppRoute.OFFER}/:id`} exact>
        <Property/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
};

export default App;
