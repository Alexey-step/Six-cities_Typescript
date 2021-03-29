import * as React from "react";

interface Props {
  option: string,
  activeOption: string,
  onChangeOption: (option: string) => void
}

const PlacesOptionsItems: React.FC<Props> = (props) => {
  const {option, activeOption, onChangeOption} = props;

  return (
    <li className={`places__option ${option === activeOption && `places__option--active`}`}
      tabIndex={0}
      onClick={() => onChangeOption(option)}
      data-testid="option"
    >
      {option}
    </li>
  );
};

export default PlacesOptionsItems;
