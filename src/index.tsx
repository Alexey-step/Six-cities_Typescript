import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {createAPI} from "./store/api/api";
import {rootReducer} from "./store/reducer";
import {fetchOffersList, checkAuth} from "./store/api/api-actions";
import {redirect} from "./store/middlewares/redirect";
import * as ActionCreator from "./store/action-creators";
import {configureStore} from '@reduxjs/toolkit';
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "./browser-history";

const api = createAPI(() => store.dispatch(ActionCreator.setAuthorization(null)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: api
      }
    })
    .concat(redirect)
});
store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App/>
      </BrowserRouter>
    </Provider>,
    document.querySelector(`#root`)
);
