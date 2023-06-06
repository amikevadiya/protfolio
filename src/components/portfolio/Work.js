import React, { useState } from 'react';
import Popup from '../experience/Experiencepopup';
import workData from '../../data/works.json';
import { Link } from 'react-router-dom';

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const openPopup = (work) => {
    setSelectedWork(work);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedWork(null);
  };

  const firstFourWorks = workData.slice(0, 4); // Get the first four items from the workData array

  return (
    <div>
      <section className="work-section" id='works-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="work-heading">
                <h2>Showcasing my Dedication and Talent 🏆</h2>
                <p className="text-big">Discover the essence of creativity. Explore a selection of my remarkable projects.</p>
              </div>
              {firstFourWorks.slice(0, 2).map((work, index) => (
                <a href={work.link} target='_blank' className="work-section-box" key={index}>
                  <span className="work-count font-Londrina">{(index + 1).toString().padStart(2, '0')}</span>
                  <h4 className="work-name">{work.title}</h4>
                  <div className="work-name-img">
                    <span className="work-lang">{work.category}</span>
                    <div className="work-img">
                      <img src={`${process.env.PUBLIC_URL}/${work.imageSrc}`} alt={work.altText} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="col-lg-6 col-md-12 work-box-right">
              {firstFourWorks.slice(2).map((work, index) => (
                <a href={work.link} target='_blank' className="work-section-box" key={index}>
                  <span className="work-count font-Londrina">{(index + 3).toString().padStart(2, '0')}</span>
                  <h4 className="work-name">{work.title}</h4>
                  <div className="work-name-img">
                    <span className="work-lang">{work.category}</span>
                    <div className="work-img">
                      <img src={`${process.env.PUBLIC_URL}/${work.imageSrc}`} alt={work.altText} />
                    </div>
                  </div>
                </a>
              ))}
              <Link to="/portfolio" className="work-view-icon">
                <div className="view-icon">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <span className="d-block">View all work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {isOpen && <Popup isOpen={isOpen} onClose={closePopup} selectedWork={selectedWork} />}
    </div>
  );
};

export default Work;
