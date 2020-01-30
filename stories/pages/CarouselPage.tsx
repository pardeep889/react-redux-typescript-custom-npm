import React from 'react';


//COMPONENT
import { Carousel } from '@components/index';

const CarouselPage = () => {
  return (
    <div>
      <h3 className="story-title">Input Field Types</h3>
      <section className="m20">
      <div className="m20">

        <Carousel />
</div>        <div className="m20">

        <Carousel disabled/>
</div>
      </section>
    </div>
  )
};

export default CarouselPage;