import React, { useState } from 'react';
import './Testimonial.css';

const texts = [
  'Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce.',
  'Pellentesque euismod enim non risus dictum, non hendrerit risus venenatis.',
  'Aenean vel nibh eu leo eleifend commodo.',
  'Duis dictum, libero eu ultrices commodo, arcu nunc vestibulum quam, ac commodo nulla orci sit amet diam.',
  'Etiam gravida dolor vel justo suscipit, a bibendum velit vehicula.',
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-testimonial">
      <div className="slider__arrow slider__arrow--left" onClick={handlePrevClick}>
        &#9664;
      </div>
      <div className="slider__text">
        <h3 className='green-text'>TESTIMONIAL </h3>
        <h1>What our clients say</h1>
        <p>{texts[activeIndex]}</p>
        <h3 className='green-text' >Client Name</h3>
        <p className='green-text'>Profession</p>
        
        </div>
      <div className="slider__arrow slider__arrow--right" onClick={handleNextClick}>
        &#9654;
      </div>
    </div>
  );
};

export default Testimonial;
