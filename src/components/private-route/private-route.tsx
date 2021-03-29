import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRoute} from "../../const";
import Spinner from "../spinner/spinner";
import {RootState} from "../../store/reducer";

interface Props {
  render: (props: React.ReactNode) => React.ReactNode,
  path: string,
  exact: boolean
}

const PrivateRoute: React.FC<Props> = ({render, path, exact}) => {
  const {authInfo, loading} = useSelector((state: RootState) => state.USER);

  if (loading) {
    return (
      <Spinner/>
    );
  }

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps: React.ReactNode) => {
        return (
          authInfo ?
            render(routeProps)
            : <Redirect to={`${AppRoute.LOGIN}`} />
        );
      }}
    />
  );
};

export default PrivateRoute;
