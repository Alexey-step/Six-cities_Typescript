import * as React from "react";
import {setCity} from "../../store/action-creators";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

interface Props {
  city: string
}

const LocationItems: React.FC<Props> = ({city}) => {
  const dispatch = useDispatch();
  const {activeLocation} = useSelector((state: RootState) => state.MAIN);

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${city === activeLocation && `tabs__item--active`}`}
        href="#"
        onClick={() => dispatch(setCity(city))}>
        <span>{city}</span>
      </a>
    </li>
  );
};

export default LocationItems;
