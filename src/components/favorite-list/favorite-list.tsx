import * as React from "react";
import FavoriteItems from "../favorite-items/favorite-items";
import {Cities} from "../../const";
import {Offer} from "../../propTypes";

interface Props {
  offers: Array<Offer>,
  type: string
}

const FavoriteList: React.FC<Props> = (props) => {
  const {offers, type} = props;

  return (
    <ul className="favorites__list">

      {
        Object.values(Cities).map((city: string, i) => {
          const filteredOffers = offers.filter((offer) => offer.city.name === city);
          return filteredOffers.length < 1 ? `` : <FavoriteItems type={type} offers={filteredOffers} city={city} key={city + i}/>;
        })
      }

    </ul>
  );
};

export default FavoriteList;
