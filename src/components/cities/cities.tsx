import * as React from "react";
import {useSelector, useDispatch} from "react-redux";
import {getActiveOffers} from "../../store/main-data/selectors";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import PlacesSortingForm from "../places-sorting-form/places-sorting-form";
import {updateOffers} from "../../store/api/api-actions";
import {Offer} from "../../propTypes";
import {RootState} from "../../store/reducer";

const Cities: React.FC = () => {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = React.useState<Offer>();

  const {activeLocation} = useSelector((state: RootState) => state.MAIN);
  const offers: Array<Offer> = useSelector(getActiveOffers);
  const activeOffer = offers.find((offer: Offer) => offer.city.name === activeLocation);

  const handleFavorite = (id: number, status: boolean) => {
    dispatch(updateOffers(id, status));
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {activeLocation}</b>
          <PlacesSortingForm/>
          <PlacesList
            type="CITIES"
            offers={offers}
            onChangeActiveCard={setActiveCard}
            onFavoriteClick={handleFavorite}
          />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            {
              offers.length && <Map offers={offers} activeLocation={activeOffer} activeCard={activeCard} mapStyle="MAIN"/>
            }
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cities;
