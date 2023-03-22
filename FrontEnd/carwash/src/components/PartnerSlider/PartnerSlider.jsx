import React, { useState , useEffect } from "react";
import "./PartnerSlider.css";

const testimonials = [
  {
    id: 1,
    image: "Group 15.png",
    name: "John Smith",
    testimonial:
      "I had an amazing experience with XYZ Company. Their customer service was outstanding and their products exceeded my expectations.",
  },
  {
    id: 2,
    image: "Appstore.png",
    name: "Jane Doe",
    testimonial:
      "I've been using XYZ Product for a few weeks now and I can already see a noticeable difference in my skin. I highly recommend it!",
  },
  {
    id: 3,
    image: "image 9.png",
    name: "Bob Johnson",
    testimonial:
      "I attended XYZ Event last year and it was an unforgettable experience. The speakers were inspiring and the networking opportunities were invaluable.",
  }, {
    id: 4,
    image: "playstore.png",
    name: "Bob Johnson",
    testimonial:
      "I attended XYZ Event last year and it was an unforgettable experience. The speakers were inspiring and the networking opportunities were invaluable.",
  }, 
  {
    id: 5,
    image: "image 10 (1).png",
    name: "Bob Johnson",
    testimonial:
      "I attended XYZ Event last year and it was an unforgettable experience. The speakers were inspiring and the networking opportunities were invaluable.",
  },
  {
    id: 6,
    image: "Group 14.jpg",
    name: "Bob Johnson",
    testimonial:
      "I attended XYZ Event last year and it was an unforgettable experience. The speakers were inspiring and the networking opportunities were invaluable.",
  },
  
];



const PartnerSlider = () => {
  let [cardStart , setCardStart] = useState(0)
  let [cardLength , setCardLength] = useState(5)


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardStart(0)
        setCardLength(1);
      } 
      else if (window.innerWidth < 1024 && window.innerWidth > 768 ) {
        setCardLength(3);
      } 
      else if (window.innerWidth < 1200 && window.innerWidth > 1024  ) {
        setCardLength(4);
      } 
      if (window.innerWidth > 1200){
        setCardLength(5);
      }

    };
    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextClick = () => {
    if(testimonials.length >cardLength && cardStart + cardLength < testimonials.length){
      setCardLength(cardLength+1)
      setCardStart(cardStart+1)
    }
  };

  const handlePrevClick = () => {
    if(cardStart !== 0 && testimonials.length >= cardLength ){
      setCardLength(cardLength-1)
      setCardStart(cardStart-1)
    }
  };
 

  return (
    <>
    <div className="serv">
            <h1>Our Service Partner</h1>
    </div>
    <div className="slider">
      
      <div className="slider__arrows">
        <img src='Vector (1).svg' alt="Left Arrow" onClick={handlePrevClick} />
        <img src='Vector.svg' alt="Right Arrow" onClick={handleNextClick} />
      </div>
      <div className="slider__cards">
        {testimonials.slice(cardStart, cardLength).map((testimonial, index) => (
          <div
            key={testimonial.id}
        
            className='slider__card'
          >
            <img src={testimonial.image} alt="" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default PartnerSlider;
