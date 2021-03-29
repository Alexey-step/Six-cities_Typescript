import * as React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoaded} from "../../store/action-creators";
import {logout} from "../../store/api/api-actions";
import {AppRoute} from "../../const";
import {RootState} from "../../store/reducer";

import "./header.css";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const {authInfo} = useSelector((state: RootState) => state.USER);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={`${AppRoute.MAIN}`} className="header__logo-link header__logo-link--active" onClick={() => dispatch(setIsLoaded(false))}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={authInfo && `${AppRoute.FAVORITES}` || `${AppRoute.LOGIN}`} className="header__nav-link header__nav-link--profile">
                  {
                    authInfo &&
                      <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${authInfo.avatarUrl})`}}>
                      </div>
                  }
                  <span className="header__user-name user__name">{authInfo && authInfo.email || `Sign In`}</span>
                </Link>
              </li>
              {authInfo &&
                <li className="header__nav-item user">
                  <button
                    onClick={() => dispatch(logout())}
                    className="header__nav-link header__nav-link--profile header__nav-link--logout"
                  >
                    <span className="header__user-name user__name">Logout</span>
                  </button>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
