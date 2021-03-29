import * as React from "react";
import Card from "../card/card";
import {Type} from "../../const";
import {Offer} from "../../propTypes";

interface Props {
  offers: Array<Offer>,
  type: string,
  onChangeActiveCard?: (offer: Offer) => void,
  onScrollToTop?: () => void,
  onFavoriteClick: (id: number, status: boolean) => void
}

const PlacesList: React.FC<Props> = (props) => {
  const {offers, type, onChangeActiveCard, onScrollToTop, onFavoriteClick} = props;

  const listSettings = Type[type];

  return (
    <div className={`${listSettings.divClass} places__list ${type === `CITIES` ? `tabs__content` : ``}`}>
      {
        offers.map((item) =>
          <Card
            cardType={type}
            offer={item}
            key={item.id}
            onChangeActiveCard={onChangeActiveCard}
            onScrollToTop={onScrollToTop}
            onFavoriteClick={onFavoriteClick}
          />)
      }
    </div>
  );
};

export default PlacesList;
