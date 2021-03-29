import * as React from "react";
import {UserDetails} from "../../propTypes";

interface Props {
  host: UserDetails,
  description: string
}

const PropertyHost: React.FC<Props> = ({host, description}) => {

  const {avatarUrl, isPro, name} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`property__avatar-wrapper ${isPro && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PropertyHost;