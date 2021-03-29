import {combineReducers} from "redux";
import {favoriteData} from "./favorite-data/favorite-data";
import {mainData} from "./main-data/main-data";
import {propertyData} from "./property-data/property-data";
import {user} from "./user/user";

export enum NameSpace {
  MAIN = `MAIN`,
  PROPERTY = `PROPERTY`,
  FAVORITE = `FAVORITE`,
  USER = `USER`
};

export const rootReducer = combineReducers({
  [NameSpace.MAIN]: mainData,
  [NameSpace.PROPERTY]: propertyData,
  [NameSpace.FAVORITE]: favoriteData,
  [NameSpace.USER]: user
});

export type RootState = ReturnType<typeof rootReducer>
