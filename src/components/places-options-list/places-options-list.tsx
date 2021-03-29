import * as React from "react";
import PlacesOptionsItems from "../places-options-items/places-options-items";
import {Options} from "../../const";

interface Props {
  activeOption: string,
  onChangeOption: (option: string) => void
}

const PlacesOptionsList: React.FC<Props> = (props) => {
  const {activeOption, onChangeOption} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {
        Object.values(Options).map((option: string, i) => <PlacesOptionsItems activeOption={activeOption} onChangeOption={onChangeOption} option={option} key={option + i}/>)
      }
    </ul>
  );
};

export default PlacesOptionsList;
