import React from 'react';
import contactSvg from '/assets/svg/contact.svg';
const Footer = () => {
    return (
        <footer className="sofax-footer-section">
            <div className="container">
                <div className="sofax-footer-titlev5 position-ralatiove">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="tg-heading-subheading animation-style3">
                                <h2>Powering Progress Through IT Innovation </h2>
                            </div>
                            <div class="sofax-footer-shapev8">
                                <img src="/assets/images/v5/shape1.png" alt="shape"/>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 d-flex align-items-center justify-content-end">
                            <div className="sofax-footer-title-btn-wrap">
                                <a className='sofax-footer-title-btn-icon' href=''>
                                   <img src={contactSvg} className="logo react" alt="Ideas" />
                                
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sofax-footer-top">
                    <div className="row">
                        <div className="col-xl-4 col-md-12">
                            <div className="sofax-footer-wrap mr-25">
                                <a href='index.html'></a>
                                <p>We many plans for the future to work with great clients and continue to work with agencies.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="sofax-footer-menu ml-50">
                                <h5>Company</h5>
                                <ul>
                                    <li><a href='about-us.html'>About Us</a></li>
                                    <li><a href='contact-us.html'>Contact Us</a></li>
                                    <li><a href='privacy-policy.html'>Privacy Policy</a></li>
                                    <li><a href='terms-conditions.html'>Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="sofax-footer-menu">
                                <h5>Subscribe to our newsletter</h5>
                                <div className="sofax-subscription-field5">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your email" />
                                        <button className="sofax-subcribe-btn2">Subscribe now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sofax-footer-bottom center">
                    <p>© 2024 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
