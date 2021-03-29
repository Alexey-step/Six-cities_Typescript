import * as React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {updateComments} from "../../store/api/api-actions";
import {CommentLength, STARS} from "../../const";
import {RootState} from "../../store/reducer";

interface ParamsTypes {
  id: string
}

const PropertyForm: React.FC = () => {
  const {id} = useParams<ParamsTypes>();
  const [data, setData] = React.useState({
    review: ``,
    rating: ``
  });
  const dispatch = useDispatch();
  const {isDisabled} = useSelector((state: RootState) => state.PROPERTY);
  const {isError} = useSelector((state: RootState) => state.MAIN);

  React.useEffect(() => {
    if (!isDisabled && !isError) {
      setData(() => ({
        review: ``,
        rating: ``
      }));
    }
  }, [isDisabled, isError]);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();

    dispatch(updateComments({
      comment: data.review,
      rating: data.rating
    }, id));
  };

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          STARS.map((star: number) => {
            return (
              <React.Fragment key={star}>
                <input
                  onChange={handleFieldChange}
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value={`${star}`}
                  id={`${star}-stars`}
                  type="radio"
                  disabled={isDisabled}
                  checked={String(star) === data.rating}
                />
                <label
                  htmlFor={`${star}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title="perfect"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="true" href="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })
        }
      </div>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={CommentLength.MAX}
        disabled={isDisabled}
        value={data.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={data.review.length < CommentLength.MIN || !data.rating}
        >Submit</button>
      </div>
    </form>
  );
};

export default PropertyForm;
