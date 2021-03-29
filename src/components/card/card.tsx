import * as React from "react";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {getRating} from "../../common";
import {Type} from "../../const";
import {AppRoute} from "../../const";
import {Offer} from "../../propTypes";
import {RootState} from "../../store/reducer";

interface Props {
  offer: Offer,
  onChangeActiveCard?: (item: Offer) => void,
  cardType: string,
  onScrollToTop?: () => void,
  onFavoriteClick: (id: number, isFavorite: boolean) => void
};

const Card: React.FC<Props> = (props) => {
  const {authInfo} = useSelector((state: RootState) => state.USER);
  const history = useHistory();
  const {offer, onChangeActiveCard, cardType, onScrollToTop, onFavoriteClick} = props;
  const {isPremium, previewImage, price, title, type, rating, isFavorite, id} = offer;

  const cardSettings = Type[cardType];

  const handleMouseHover = () => {
    onChangeActiveCard(offer);
  };

  const handleMouseLeave = () => {
    onChangeActiveCard(null);
  };

  return (
    <article className={`${cardSettings.article} place-card`} onMouseOver={cardType === `CITIES` ? handleMouseHover : null} onMouseLeave={cardType === `CITIES` ? handleMouseLeave : null} data-testid="mouse">
      {
        isPremium && <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${cardSettings.img.class}__image-wrapper place-card__image-wrapper`} onClick={onScrollToTop} data-testid="scroll">
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width={`${cardSettings.img.width}`} height={`${cardSettings.img.height}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${cardSettings.info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`}
            type="button"
            onClick={() => authInfo ? onFavoriteClick(id, !isFavorite) : history.push(`${AppRoute.LOGIN}`)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="true" href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRating(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default Card;
