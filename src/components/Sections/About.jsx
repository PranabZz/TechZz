import React from "react";

const About = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="sofax-breadcrumb">
        <div className="container">
          <h1 className="post__title">About Us</h1>
          <nav className="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <img src="/assets/images/about/arrow.png" alt="arrow" />
              </li>
              <li aria-current="page">About Us</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

      {/* Brand Story */}
      <section className="sofax-section-padding5">
        <div className="container">
          <div className="sofax-section-title">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="sofax-aboutus-section-title">
                  <h2>Our Journey: Crafting Digital Excellence</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center">
                <div className="sofax-aboutus-content-text">
                  <p>
                    Our story is one of passion and perseverance, forged through late-night brainstorming and bold ideas. We transform visions into digital realities, one innovative solution at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Brand Story */}

      {/* Our Values */}
      <section className="section sofax-section-padding">
        <div className="container">
          <div className="sofax-section-title text-center max-width-large">
            <h2>Values That Define Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="sofax-features-box features-v5 wow fadeInUpX" data-wow-delay="0.1s">
                <div className="sofax-features-icon">
                  <img src="assets/images/about/icon1.png" alt="Innovation" />
                </div>
                <div className="sofax-features-content">
                  <h4>Innovation as Tradition</h4>
                  <p>
                    Innovation is our heartbeat, guiding every solution we craft to push boundaries and solve challenges creatively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="sofax-features-box features-v5 wow fadeInUpX" data-wow-delay="0.2s">
                <div className="sofax-features-icon">
                  <img src="assets/images/about/icon2.png" alt="Empowerment" />
                </div>
                <div className="sofax-features-content">
                  <h4>Empowerment Through Knowledge</h4>
                  <p>
                    We simplify technology, equipping our clients with the tools and insights they need to thrive in a digital world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="sofax-features-box features-v5 wow fadeInUpX" data-wow-delay="0.3s">
                <div className="sofax-features-icon">
                  <img src="assets/images/about/icon3.png" alt="Integrity" />
                </div>
                <div className="sofax-features-content">
                  <h4>Honesty in Every Step</h4>
                  <p>
                    Integrity is our foundation. We prioritize transparency and trust in every interaction, ensuring lasting partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Values */}

      {/* Our Projects */}
      <section className="section sofax-section-padding bg-light">
        <div className="container">
          <div className="sofax-section-title text-center max-width-large">
            <h2>Projects We're Proud Of</h2>
            <p>Explore some of our standout works that showcase our expertise in creating impactful digital solutions.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="sofax-project-box wow fadeInUpX" data-wow-delay="0.1s">
                <h4>Sabi Beauty Studio</h4>
                <p>A seamless booking and services platform for a premium salon experience.</p>
                <a href="https://sabibeautystudio.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="sofax-project-box wow fadeInUpX" data-wow-delay="0.2s">
                <h4>eCards</h4>
                <p>A dynamic website for an NGO, amplifying their mission and outreach.</p>
                <a href="https://ecardsnepal.org.np/" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="sofax-project-box wow fadeInUpX" data-wow-delay="0.3s">
                <h4>Hulakhi</h4>
                <p>An innovative email marketing platform designed to boost engagement.</p>
                <a href="http://hulakhi.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="sofax-project-box wow fadeInUpX" data-wow-delay="0.4s">
                <h4>Writers Space</h4>
                <p>A vibrant blog platform crafted to inspire and share stories.</p>
                <a href="https://artisantechsolution.com/" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Projects */}

      {/* How We Work */}
      <section className="section sofax-section-padding2">
        <div className="container">
          <div className="sofax-section-title text-center max-width-large">
            <h2>How We Work</h2>
          </div>
          <div className="sofax-how-we-work text-center">
            <p className="lead">
              We begin with a spark of curiosity, diving deep into your vision to understand what makes your brand unique. From there, we weave strategy and creativity into every pixel, crafting solutions that don’t just meet expectations but exceed them. Our process is collaborative, iterative, and fueled by a relentless pursuit of excellence—turning ideas into digital experiences that resonate and endure.
            </p>
          </div>
        </div>
      </section>
      {/* End How We Work */}

      {/* About Us */}
      <section className="section sofax-section-padding2 position-relative bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div className="about-thumbv5 wow fadeInLeft">
                <img src="assets/images/v5/aboutthumb.png" alt="About Us" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="sofax-default-content text-center text-lg-start">
                <h2>Loyal to Innovation, Dedicated to You</h2>
                <p>
                  As a one-stop digital agency, we handle everything—from bespoke web design to strategic campaigns that amplify your reach, drive traffic, and boost engagement. Our focus is on creating tailored solutions that empower your brand to shine.
                </p>
                <div className="sofax-counter-wrap-v5">
                  <div className="sofax-counter-data-v5">
                    <h2>10+</h2>
                    <p>Projects Completed</p>
                  </div>
                  <div className="sofax-counter-data-v5">
                    <h2>100%</h2>
                    <p>Client Satisfaction</p>
                  </div>
                </div>
                <div className="extra-mt text-center text-lg-start wow fadeInUpX">
                  <a
                    className="sofax-default-btn pill"
                    data-text="Explore More"
                    href="contact-us.html"
                  >
                    <span className="button-wraper">Explore More</span>
                  </a>
                </div>
                <div className="sofax-about-shapev5">
                  <img src="assets/images/v5/shape2.png" alt="Shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us */}

      {/* FAQ */}
      <section className="section sofax-section-padding bg-light">
        <div className="container">
          <div className="sofax-section-title text-center max-width-large">
            <h2>Got Questions? We've Got Answers</h2>
          </div>
          <div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
            <div className="sofax-accordion-section-wrapper">
              <div className="sofax-accordion-section-v2">
                <div className="sofax-accordion-item about-us-section open">
                  <div className="sofax-accordion-header">
                    <h4>How can I contact you?</h4>
                    <span className="sofax-accordion-toggle"></span>
                  </div>
                  <div className="sofax-accordion-content">
                    <p>
                      Feel free to reach out via our contact page or email us directly at{" "}
                      <a href="mailto:pranabkc321@gmail.com">pranabkc321@gmail.com</a>.
                    </p>
                  </div>
                </div>
                <div className="sofax-accordion-item about-us-section">
                  <div className="sofax-accordion-header">
                    <h4>What services do you offer?</h4>
                    <span className="sofax-accordion-toggle"></span>
                  </div>
                  <div className="sofax-accordion-content">
                    <p>
                      We provide a full suite of digital solutions, including custom web design, development, digital marketing, and strategic planning to boost your brand’s online presence.
                    </p>
                  </div>
                </div>
                <div className="sofax-accordion-item about-us-section">
                  <div className="sofax-accordion-header">
                    <h4>How long does a typical project take?</h4>
                    <span className="sofax-accordion-toggle"></span>
                  </div>
                  <div className="sofax-accordion-content">
                    <p>
                      Project timelines vary based on scope, but we work efficiently to deliver high-quality results. Contact us for a tailored estimate based on your needs.
                    </p>
                  </div>
                </div>
                <div className="sofax-accordion-item about-us-section">
                  <div className="sofax-accordion-header">
                    <h4>Do you offer ongoing support?</h4>
                    <span className="sofax-accordion-toggle"></span>
                  </div>
                  <div className="sofax-accordion-content">
                    <p>
                      Yes, we provide ongoing maintenance and support to ensure your digital solutions remain up-to-date and perform optimally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ */}
    </>
  );
};

export default About;