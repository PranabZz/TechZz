import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className="sofax-breadcrumb">
        <div className="container">
          <h1 className="post__title">Contact Us</h1>
          <nav className="breadcrumbs">
            <ul>
              <li><a href='index.html'>Home</a></li>
              <li><img src="assets/images/about/arrow.png" alt="arrow" /></li>
              <li aria-current="page"> Contact Us</li>
            </ul>
          </nav>
        </div>
      </div>

      <section className="section sofax-section-padding2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contactus-authore-wrapper">
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src="assets/images/contact/icon1.png" alt="Chat Icon" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Chat with us</h4>
                    <p>We're waiting to help you every Monday-Friday from 9 am to 5 pm EST easily.</p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src="assets/images/contact/icon2.png" alt="Phone Icon" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Give us a call</h4>
                    <p>Give us a ring at (+088-234-567-90). Every Monday-Friday from 9 am to 5 pm.</p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <img src="assets/images/contact/icon3.png" alt="Email Icon" />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4>Email Us</h4>
                    <p>Drop us an email at example@gmail.com and you'll receive a reply within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="sofax-field-box ml-50">
                <h3>Send us a message</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="sofax-main-field">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="sofax-main-field">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="Email Address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="sofax-main-field">
                        <label htmlFor="comment">Your Comment</label>
                        <textarea id="comment" name="textarea" placeholder="Write Your Comment"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="sofax-form-box">
                        <input type="checkbox" id="save-info" />
                        <label htmlFor="save-info">
                          Save my name, email, & website in this browser for the next time I comment.
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="tac">
                        <button id="sofax-submit-btn" className="mt-30" type="button">Post Comment</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="responsive-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" 
          width="600" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
