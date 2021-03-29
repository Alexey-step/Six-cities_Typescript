import {createReducer} from '@reduxjs/toolkit';
import {setAuthorization} from "../action-creators";
import {UserAuthorize} from "../../propTypes";

interface UserInitialStateType {
  authInfo: UserAuthorize,
  loading: boolean
}

export const initialState: UserInitialStateType = {
  authInfo: null,
  loading: true
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(setAuthorization, (state, action) => {
    state.authInfo = action.payload;
    state.loading = false;
  });
});

export {user};
