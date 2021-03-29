import * as React from "react";
import Header from "../../header/header";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";

import "./not-found.css";

const NotFound: React.FC = () => {

  return (
    <div className="page">
      <Header/>
      <main className="page__main">
        <div className="container">
          <h1 className="not-found">404 Not Found</h1>
          <Link to={AppRoute.MAIN}>
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
