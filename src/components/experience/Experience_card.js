import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ experiences, activeIndex, handleClose }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'custom-slider',
  };

  return (      
    <div className='experience_slider_section'>        
      <a href="javascript:void(0)" className="back-arrow" onClick={handleClose}>
      <svg width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M97.2807 31C86.3712 42.2613 79.9577 57.7775 72.5432 71.3877C68.0812 79.5783 63.3235 87.6111 58.8282 95.7886C53.6083 105.284 47.7272 114.223 42 123.387" stroke="#F4EEE6" stroke-width="5" stroke-linecap="round"/>
<path d="M45.7871 40.8442C59.6725 55.4417 71.858 72.182 83.6506 88.5102C90.4258 97.8912 95.9069 107.983 102.582 117.328" stroke="#F4EEE6" stroke-width="5" stroke-linecap="round"/>
<circle cx="72.5" cy="72.5" r="70" stroke="#F4EEE6" stroke-width="5"/>
</svg>

      </a>
      <div className='experience_slider'>
        <Slider ref={sliderRef} {...settings}>
          {experiences.map((experience, index) => (
            <div key={index}> 
              <div className='experiencebox'>
                <div className='experience-header'>
                  <h3>{experience.year}</h3>
                  <span>{experience.date}</span>
                </div>
                <h5>{experience.position}</h5>
                <span>{experience.company}</span>
                <ul>
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>  
  );
};

export default SliderComponent;
