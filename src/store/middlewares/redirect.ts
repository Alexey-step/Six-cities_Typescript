import browserHistory from "../../browser-history";
import {ActionType} from "../actions";
import {RootState} from "../reducer";
import {Middleware} from "redux"

export const redirect: Middleware<RootState> = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
