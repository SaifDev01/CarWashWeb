import React, { useState } from 'react';
import './SlideService.css';

const carwashServices = [
  {
    title: 'Exterior Wash',
    description: 'Our exterior wash includes a thorough cleaning of your car\'s exterior, including the tires and rims.',
  },
  {
    title: 'Interior Detailing',
    description: 'Our interior detailing service includes a deep cleaning of your car\'s interior, including vacuuming, wiping down surfaces, and cleaning the windows.',
  },
  {
    title: 'Full Detail',
    description: 'Our full detail service includes both our exterior wash and interior detailing services, giving your car a complete clean.',
  },
];

const ServiceSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === carwashServices.length - 1 ? 0 : currentSlide + 1);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? carwashServices.length - 1 : currentSlide - 1);
  };

  return (
    <div className="service-slideshow">
      <h2>{carwashServices[currentSlide].title}</h2>
      <ul  className="service-list" > 
        {carwashServices[currentSlide].description.split(',').map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="slide-controls">
        <button onClick={goToPreviousSlide}>&larr;</button>
        <button onClick={goToNextSlide}>&rarr;</button>
      </div>
    </div>
  );
};

export default ServiceSlideshow;
