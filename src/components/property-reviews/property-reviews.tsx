import * as React from "react";
import PropertyForm from "../property-form/property-form";
import PropertyReviewItem from "../property-review-item/property-review-item";
import {useSelector} from "react-redux";
import {Review} from "../../types";
import {RootState} from "../../store/reducer";

interface Props {
  reviews: Array<Review>
}

const PropertyReviews: React.FC<Props> = ({reviews}) => {

  const {authInfo} = useSelector((state: RootState) => state.USER);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <PropertyReviewItem review={review} key={review.id}/>)
        }
      </ul>
      {
        authInfo && <PropertyForm/>
      }
    </section>
  );
};

export default PropertyReviews;
