import * as React from "react";
import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Spinner from "../../spinner/spinner";
import Header from "../../header/header";
import PropertyGallery from "../../property-gallery/property-gallery";
import PropertyInside from "../../property-inside/property-inside";
import PropertyHost from "../../property-host/property-host";
import PropertyReviews from "../../property-reviews/property-reviews";
import PropertyFeatures from "../../property-features/property-features";
import Map from "../../map/map";
import PlacesList from "../../places-list/places-list";
import {getRating} from "../../../common";
import {fetchPropertyData, updateOffer, updateNearbyOffers} from "../../../store/api/api-actions";
import {getActiveReviews} from "../../../store/property-data/selectors";
import {AppRoute} from "../../../const";
import withError from "../../../hocs/with-error/with-error";
import {RootState} from "../../../store/reducer";
import {Review} from "../../../types"

interface ParamsTypes {
  id: string
}

const Property:React.FC = () => {
  const {id} = useParams<ParamsTypes>();
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(fetchPropertyData(id));
  }, [id]);

  const {offer, nearbyOffers, isLoaded} = useSelector((state: RootState) => state.PROPERTY);
  const {authInfo} = useSelector((state: RootState) => state.USER);
  const reviews: Array<Review> = useSelector(getActiveReviews);

  if (!isLoaded) {
    return (
      <Spinner/>
    );
  }

  const {images, isPremium, title, rating, isFavorite, type, bedrooms, maxAdults, price, goods, host, description} = offer;

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleFavorite = (offerId: number, status: boolean) => {
    dispatch(updateNearbyOffers(offerId, status));
  };

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images={images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium && <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`}
                  type="button"
                  onClick={() => authInfo && dispatch(updateOffer(id, !isFavorite)) || history.push(`${AppRoute.LOGIN}`)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="true" href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={getRating(rating)}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <PropertyFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <PropertyInside goods={goods}/>
              <PropertyHost host={host} description={description}/>
              <PropertyReviews reviews={reviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearbyOffers} activeLocation={offer} activeCard={offer} mapStyle="PROPERTY"/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              type="NEARBY"
              offers={nearbyOffers}
              onScrollToTop={handleScrollTop}
              onFavoriteClick={handleFavorite}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export {Property};
export default withError(Property);
