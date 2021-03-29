import {createSelector} from "reselect";
import {NameSpace} from '../reducer';
import {RootState} from "../reducer";

export const getReviews = (state: RootState) => state[NameSpace.PROPERTY].reviews;

export const getActiveReviews = createSelector(
    getReviews,
    (reviews) => {
      const activeReviews = reviews.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      return activeReviews.length > 10 ? activeReviews.slice(0, 10) : activeReviews;
    }
);
