import * as React from "react";
import {MAX_IMAGE} from "../../const";

interface Props {
  images: Array<string>
}

const PropertyGallery: React.FC<Props> = ({images}) => {

  const imagesArray = images.length > MAX_IMAGE ? images.slice(0, MAX_IMAGE) : images;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          imagesArray.map((image, i) => {
            return (
              <React.Fragment key={image + i}>
                <div className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              </React.Fragment>
            );
          })
        }
      </div>
    </div>
  );
};

export default PropertyGallery;
