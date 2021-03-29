import * as React from "react";
import {useSelector} from "react-redux";
import {getActiveOffers} from "../../../store/main-data/selectors";
import LocationList from "../../location-list/location-list";
import Spinner from "../../spinner/spinner";
import Header from "../../header/header";
import Cities from "../../cities/cities";
import CitiesEmpty from "../../cities-empty/cities-empty";
import withError from "../../../hocs/with-error/with-error";
import {RootState} from "../../../store/reducer";
import {Offer} from "../../../propTypes"

const MainPage: React.FC = () => {
  const {isDataLoaded} = useSelector((state: RootState) => state.MAIN);
  const offers: Array<Offer> = useSelector(getActiveOffers);

  if (!isDataLoaded) {
    return (
      <Spinner/>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={`page__main page__main--index ${!offers.length ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList />
        </div>
        {
          offers.length && <Cities/> || <CitiesEmpty/>
        }
      </main>
    </div>
  );
};

export {MainPage};
export default withError(MainPage);
