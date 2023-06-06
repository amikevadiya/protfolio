import React from 'react';
import work from '../../data/works.json';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <div className='protfolio-page'>
        <div className='container'>
          <div className='protfolio-page-container'>
          <Link to="/"> 
          <svg width="178" height="98" viewBox="0 0 178 98" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4219 11.7459C30.3413 9.87187 36.7512 11.3808 41.7736 12.147C49.7221 13.3595 57.7264 13.9302 65.6105 15.5777C84.1095 19.4432 101.432 26.2357 117.874 35.5384C131.398 43.1906 144.89 53.6329 154.765 65.7021C163.073 75.8564 171.342 83.473 176.196 95.955" stroke="#F4EEE6" stroke-width="3" stroke-linecap="round"></path><path d="M31.5686 35.2132C28.527 34.909 25.6078 32.2648 23.2891 30.4462C20.2869 28.0915 17.676 25.299 14.8423 22.7521C11.97 20.1704 9.13609 17.553 6.31191 14.9186C5.25506 13.9328 1.85345 11.4613 2.0049 9.71953C2.18284 7.67318 5.61914 6.81944 7.07853 6.26276C11.0406 4.75147 15.2365 4.20816 19.4281 3.72595C30.8695 2.40971 42.4051 2.40971 53.8465 3.72595C58.0381 4.20816 62.2339 4.75147 66.196 6.26276C67.6554 6.81944 71.0917 7.67318 71.2696 9.71953C71.4211 11.4613 68.0195 13.9328 66.9626 14.9186C64.1384 17.553 61.3045 20.1704 58.4322 22.7521C55.5985 25.299 52.9876 28.0915 49.9854 30.4462C47.6668 32.2648 44.7477 34.909 41.7061 35.2132" stroke="#F4EEE6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </Link>
            <h2>Portfolio</h2>
          </div>
        </div>     
      </div>
    
    <section className='protfolio-section'>
     
      <div className='container'>
        <div className="row">

    {work.map((work, index) => (
      <div className='col-lg-4 col-md-6 col-12'>
         <a href={work.link} target='_blank' className="work-section-box" key={index}>
         <span className="work-count font-Londrina">{(index + 1).toString().padStart(2, '0')}</span>
         <h4 className="work-name">{work.title}</h4>
         <div className="work-name-img">
           
           <div className="work-img">
             <img src={`${process.env.PUBLIC_URL}/${work.imageSrc}`} alt={work.altText} />
           </div>
           <span className="work-lang">{work.category}</span>
         </div>
       </a>
       </div>
      ))}

        </div>
      </div>
      
    </section>
    </div>
  );
};

export default Portfolio;
