import React from 'react';

import Button from '../Buttons';


const Hero = () => {
    return (
        <div className="section sofax-section-padding4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sofax-hero-content hero-v8">
                            <h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
                                Transform your business journey with unparalleled IT expertise
                            </h1>
                            <p>
                            Unlock the potential of your business with essential IT expertise. Explore how powerful IT solutions can transform your journey to success.
                            </p>
                            <div className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
                                <Button text="Explore More" link="explore.html"></Button>
                                <Button text="Contact Us" link="contact.html" color="dark"></Button>
                            </div>
                           
                        </div>
                    </div>
                    {/* <div className="col-lg-5">
                        <div className="sofax-hero-thumb8 wow fadeInUpX position-ralatiove">
                            <img src="" alt="Hero Image" />
                            <div className="sofax-hero-shape-v8">
                                <img src={ideaSvg} className="logo react" alt="Ideas" />
                            </div>
                            <div className="sofax-hero-shape2-v8">
                                <img src={engineerSvg} className="logo react" alt="Ideas" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
