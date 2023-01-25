import React from 'react';
import Carousel from 'better-react-carousel';
import features from '../../../websiteData/features';
import CommunitySlide from '../CommunitySlide';

const CommunitySlideCarouselSection = () => {
  return (
    <div className="sliderSection" align="center">
      <Carousel
        responsiveLayout={[
          {
            breakpoint: 800,
            cols: 2,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 2000,
          },
          {
            breakpoint: 1600,

            loop: true,
            autoplay: 2000,
          },
          {
            breakpoint: 600,
            cols: 1,
            rows: 1,
            gap: 10,
            loop: true,
            autoplay: 2000,
          },
        ]}
        cols={3}
        rows={1}
        gap={10}
        loop
      >
        {features.map(({ title, description }, index) => (
          <Carousel.Item>
            <CommunitySlide
              title={title}
              position={(index - 4) % 3 === 0 ? 'down' : 'up'}
              description={description}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CommunitySlideCarouselSection;
