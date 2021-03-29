import * as React from "react";
import {useSelector} from "react-redux";
import FavoriteList from "../favorite-list/favorite-list";
import {RootState} from "../../store/reducer";

const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.FAVORITE);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteList offers={favorites} type="FAVORITE"/>
        </section>
      </div>
    </main>
  );
};

export default Favorites;

