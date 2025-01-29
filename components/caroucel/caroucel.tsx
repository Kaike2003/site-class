import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

export const Caroucel = () => {
  return (
    <CCarousel controls>
      <CCarouselItem>
        <CImage className="d-block w-100" src="../../public/assets/amazon.jpeg" alt="slide 1" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="../../public/assets/amazon.jpeg" alt="slide 2" />
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100" src="../../public/assets/amazon.jpeg" alt="slide 3" />
      </CCarouselItem>
    </CCarousel>
  );
};
