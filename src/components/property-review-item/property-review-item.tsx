import * as React from "react";
import {getRating} from "../../common";
import {Review} from "../../types";

interface Props {
  review: Review
}

const PropertyReviewItem: React.FC<Props> = ({review}) => {
  const {comment, date, rating, user} = review;
  const {avatarUrl, name} = user;

  return (
    <li className="reviews__item" data-testid="review">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={getRating(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{new Date(date).toLocaleDateString(`en-US`, {year: `numeric`, month: `long`})}</time>
      </div>
    </li>
  );
};

export default PropertyReviewItem;
