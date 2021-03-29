import * as React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setOption} from "../../store/action-creators";
import PlacesOptionsList from "../places-options-list/places-options-list";
import {RootState} from "../../store/reducer";

const PlacesSortingForm: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {option} = useSelector((state: RootState) => state.MAIN);
  const dispatch = useDispatch();

  const handleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeOption = (item: string) => {
    dispatch(setOption(item));
    handleOptions();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOptions}>
        {option}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="true" href="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isOpen && <PlacesOptionsList activeOption={option} onChangeOption={handleChangeOption}/>
      }
    </form>
  );
};

export default PlacesSortingForm;
