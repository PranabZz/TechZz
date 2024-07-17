import React from 'react';
import ServicesCard from '../ServicesCard'; 

const OurServices = () => {
  return (
    <section className="sofax-section-padding2 bg-light">
      <div className="container">
        <div className="sofax-section-title center">
          <div className="tg-heading-subheading animation-style3">
            <h2>We provide IT and business solutions</h2>
          </div>
        </div>
        <div className="sofax-features-wrapv8">
          <ServicesCard
            iconSrc="src/assets/images/v8/icon6v8.png"
            title="Wordpress Site Maintanance"
            description=""
          />
          <ServicesCard
            iconSrc="src/assets/images/v8/icon7v8.png"
            title="Landing Page For Your Startup"
            description=""
          />
          <ServicesCard
            iconSrc="src/assets/images/v8/icon8v8.png"
            title="Appointment System"
            description=""
          />
          <ServicesCard
            iconSrc="src/assets/images/v8/icon9v8.png"
            title="Content Management System"
            description=""
          />
          <ServicesCard
            iconSrc="src/assets/images/v8/icon10v8.png"
            title="SEO & Optimization"
            description=""
          />
          <ServicesCard
            iconSrc="src/assets/images/v8/icon11v8.png"
            title="Mobile Applications"
            description=""
          />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
