import * as React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Header from "../../header/header";
import {AppRoute} from "../../../const";
import FavoritesEmpty from "../../favorites-empty/favorites-empty";
import Favorites from "../../favorites/favorites";
import {fetchFavorites} from "../../../store/api/api-actions";
import withError from "../../../hocs/with-error/with-error";
import {RootState} from "../../../store/reducer";

const FavoritesPage: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  const {favorites} = useSelector((state: RootState) => state.FAVORITE);

  return (
    <div className="page">
      <Header/>
      {
        favorites.length > 0 ? <Favorites/> : <FavoritesEmpty/>
      }
      <footer className="footer">
        <Link to={`${AppRoute.MAIN}`} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

export {FavoritesPage};
export default withError(FavoritesPage);
