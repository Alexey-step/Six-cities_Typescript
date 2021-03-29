import {createSelector} from "reselect";
import {NameSpace} from '../reducer';
import {Options} from "../../const";
import {RootState} from "../reducer";

export const getCity = (state: RootState) => state[NameSpace.MAIN].activeLocation;
export const getOffers = (state: RootState) => state[NameSpace.MAIN].offers;
export const getOption = (state: RootState) => state[NameSpace.MAIN].option;

export const getActiveOffers = createSelector(
    [getCity, getOffers, getOption],
    (city, offers, option) => {
      const activeOffers = offers.filter((offer) => offer.city.name === city);

      switch (option) {
        case Options.PRICE_LOW_TO_HIGH:
          return activeOffers.sort((a, b) => a.price - b.price);
        case Options.PRICE_HIGH_TO_LOW:
          return activeOffers.sort((a, b) => b.price - a.price);
        case Options.TOP_RATED_FIRST:
          return activeOffers.sort((a, b) => b.rating - a.rating);
        default:
          return activeOffers;
      }
    }
);
