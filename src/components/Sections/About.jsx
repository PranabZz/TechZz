import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      {/* SEO Meta Tags (if using Next.js or similar) */}
      {/* <Head>
        <title>About Us | Our Brand's Journey</title>
        <meta name="description" content="Learn about our innovative digital agency, our values, and the team behind our success." />
      </Head> */}

      {/* Breadcrumb Section */}
      <nav className="sofax-breadcrumb" aria-label="Breadcrumb">
        <div className="container">
          <h1 className="post__title">About Us</h1>
          <ol className="breadcrumbs">
            <li>
              <a href="index.html" aria-label="Home page">Home</a>
            </li>
            <li>
              <img
                src="https://images.unsplash.com/photo-1592495879977-2440b3192424?ixlib=rb-4.0.3&auto=format&fit=crop&w=20&q=80"
                alt="Arrow icon"
                className="breadcrumb-arrow"
              />
            </li>
            <li aria-current="page">About Us</li>
          </ol>
        </div>
      </nav>

      {/* Brand Story Section */}
      <section className="sofax-section-padding5">
        <div className="container">
          <div className="sofax-section-title">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="sofax-aboutus-section-title">
                  Our Brand’s Exciting Journey
                </h2>
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-end">
                <p className="sofax-aboutus-content-text">
                  Our journey began with a vision to transform digital experiences. Despite challenges, our team’s dedication and late-night brainstorming sessions have shaped us into a trusted partner for innovative brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="sofax-section-padding">
        <div className="container">
          <header className="sofax-section-title text-center max-width-large">
            <h2>Our Core Values</h2>
          </header>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <article
                className="sofax-features-box features-v5 wow fadeInUpX"
                data-wow-delay="0.1s"
              >
                <div className="sofax-features-icon">
                  <img
                    src="https://images.unsplash.com/photo-1516321310762-479e93c4e4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Innovation icon"
                  />
                </div>
                <div className="sofax-features-content">
                  <h3>Innovation as Tradition</h3>
                  <p>
                    Innovation is woven into our DNA, guiding us to create cutting-edge solutions for our clients.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article
                className="sofax-features-box features-v5 wow fadeInUpX"
                data-wow-delay="0.2s"
              >
                <div className="sofax-features-icon">
                  <img
                    src="https://images.unsplash.com/photo-1516321310762-479e93c4e4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Empowerment icon"
                  />
                </div>
                <div className="sofax-features-content">
                  <h3>Empowerment Through Knowledge</h3>
                  <p>
                    We equip our clients with the tools and insights needed to navigate the digital landscape confidently.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article
                className="sofax-features-box features-v5 wow fadeInUpX"
                data-wow-delay="0.3s"
              >
                <div className="sofax-features-icon">
                  <img
                    src="https://images.unsplash.com/photo-1516321310762-479e93c4e4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Honesty icon"
                  />
                </div>
                <div className="sofax-features-content">
                  <h3>Honesty in Every Interaction</h3>
                  <p>
                    Transparency and integrity are the foundation of our relationships with clients and partners.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* About Image and Stats Section */}
      <section className="sofax-section-padding2 position-relative bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-thumbv5 wow fadeInLeft">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaborating in modern office"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <article className="sofax-default-content text-center">
                <h2>Loyalty to Innovative Brands</h2>
                <p>
                  As a full-service digital agency, we handle everything from bespoke web design to strategic campaigns that boost reach, traffic, and engagement.
                </p>
                <div className="sofax-counter-wrap-v5">
                  <div className="sofax-counter-data-v5">
                    <h3>50K+</h3>
                    <p>Happy Clients</p>
                  </div>
                  <div className="sofax-counter-data-v5">
                    <h3>78K+</h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="sofax-counter-data-v5">
                    <h3>100%</h3>
                    <p>Client Satisfaction</p>
                  </div>
                </div>
                <div className="extra-mt text-center wow fadeInUpX">
                  <a
                    className="sofax-default-btn pill"
                    href="contact-us.html"
                    aria-label="Explore more about our services"
                  >
                    <span className="button-wraper">Explore More</span>
                  </a>
                </div>
                <div className="sofax-about-shapev5">
                  <img
                    src="https://images.unsplash.com/photo-1620282981686-6c0c43f6f4f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    alt="Decorative shape"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="sofax-section-padding">
        <div className="container">
          <header className="sofax-section-title">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <h2>Meet Our Talented Team</h2>
              </div>
              <div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
                <a
                  className="sofax-default-btn pill"
                  href="contact-us.html"
                  aria-label="Book a free consultation call"
                >
                  <span className="button-wraper">Book a Free Call</span>
                </a>
              </div>
            </div>
          </header>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <a href="single-team.html" aria-label="View Pranab Raj Kc's profile">
                <article
                  className="sofax-team-member-wrap sofax-team-member-aboutus"
                >
                  <div
                    className="sofax-team-member-img wow fadeInUpX"
                    data-wow-delay="0.1s"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Pranab Raj Kc, CEO"
                    />
                  </div>
                  <div className="sofax-team-member-content">
                    <h3>Pranab Raj Kc</h3>
                    <p>Chief Executive Officer</p>
                  </div>
                </article>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a href="single-team.html" aria-label="View Maulik's profile">
                <article
                  className="sofax-team-member-wrap sofax-team-member-aboutus"
                >
                  <div
                    className="sofax-team-member-img wow fadeInUpX"
                    data-wow-delay="0.3s"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                      alt="Maulik, Lead Developer"
                    />
                  </div>
                  <div className="sofax-team-member-content">
                    <h3>Maulik</h3>
                    <p>Lead Developer</p>
                  </div>
                </article>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sofax-section-padding bg-light">
        <div className="container">
          <header className="sofax-section-title text-center">
            <h2>Frequently Asked Questions</h2>
          </header>
          <div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
            <div className="sofax-accordion-section-wrapper">
              <div className="sofax-accordion-section-v2">
                <div className="sofax-accordion-item about-us-section open">
                  <div className="sofax-accordion-header">
                    <h3>How can I contact you?</h3>
                    <span className="sofax-accordion-toggle" aria-hidden="true"></span>
                  </div>
                  <div className="sofax-accordion-content">
                    <p>
                      Reach out via our <a href="contact-us.html">contact page</a> or email us at{" "}
                      <a href="mailto:info@pranabkc321.com">info@pranabkc321.com</a>.
                    </p>
                  </div>
                </div>
                <div className="sofax-accordion-item about-us-section">
                  <div className="sofax-accordion-header">
                    <h3>What services do you offer?</h3>
                    <span className="sofax-accordion-toggle" aria-hidden="true"></span>
                  </div>
                  <div className="sofax-accordion-content">
                    <p>
                      We provide web design, digital marketing, and strategic consulting to boost your brand’s online presence.
                    </p>
                  </div>
                </div>
                <div className="sofax-accordion-item about-us-section">
                  <div className="sofax-accordion-header">
                    <h3>How do you ensure client satisfaction?</h3>
                    <span className="sofax-accordion-toggle" aria-hidden="true"></span>
                  </div>
                  <div className="sofax-accordion-content">
                    <p>
                      Our client-centric approach, transparent communication, and tailored solutions ensure 100% satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;