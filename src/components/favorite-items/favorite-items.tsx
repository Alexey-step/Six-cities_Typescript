import * as React from "react";
import PlacesList from "../places-list/places-list";
import {useDispatch} from "react-redux";
import {updateFavorites} from "../../store/api/api-actions";
import {Offer} from "../../propTypes";

interface Props {
  city: string,
  offers: Array<Offer>,
  type: string
}

const FavoriteItems: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const {city, offers, type} = props;

  const handleFavorite = (id: number, status: boolean) => {
    dispatch(updateFavorites(id, status));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <PlacesList offers={offers} type={type} onFavoriteClick={handleFavorite}/>
    </li>
  );
};

export default FavoriteItems;
