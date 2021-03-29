import * as React from "react";
import LocationItems from "../location-items/location-items";
import {Cities} from "../../const";

const LocationList: React.FC = () => {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          Object.values(Cities).map((city: string, i) => <LocationItems city={city} key={city + i}/>)
        }
      </ul>
    </section>
  );
};

export default LocationList;
