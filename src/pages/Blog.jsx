import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design: Trends to Watch in 2025",
      excerpt:
        "Explore the latest web design trends shaping the digital landscape, from immersive UI to AI-driven personalization.",
      date: "July 10, 2025",
      slug: "future-web-design-2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: `
        <h2>The Future of Web Design: Trends to Watch in 2025</h2>
        <p>Web design is evolving at a rapid pace, driven by advancements in technology and changing user expectations. As we move into 2025, several trends are set to redefine how we create digital experiences.</p>
        <h3>1. Immersive User Interfaces</h3>
        <p>Immersive UI, powered by 3D elements and animations, is becoming mainstream. These designs captivate users by creating a sense of depth and interactivity, making websites feel more like experiences than static pages.</p>
        <h3>2. AI-Driven Personalization</h3>
        <p>Artificial intelligence is revolutionizing web design by enabling hyper-personalized user experiences. From dynamic content recommendations to adaptive layouts, AI ensures every visitor gets a tailored journey.</p>
        <h3>3. Minimalist Aesthetics with Bold Accents</h3>
        <p>Minimalism continues to dominate, but with a twist—bold typography, vibrant colors, and micro-interactions add personality without cluttering the design.</p>
        <p>At our agency, we’re already implementing these trends to create cutting-edge websites for our clients. Stay ahead of the curve by embracing these innovations in your next project!</p>
      `,
    },
    {
      id: 2,
      title: "How to Boost Engagement with Email Marketing",
      excerpt:
        "Discover strategies to create compelling email campaigns that drive traffic and build lasting connections with your audience.",
      date: "June 28, 2025",
      slug: "boost-engagement-email-marketing",
      image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: `
        <h2>How to Boost Engagement with Email Marketing</h2>
        <p>Email marketing remains one of the most effective ways to connect with your audience. However, with inboxes overflowing, standing out requires strategy and creativity.</p>
        <h3>1. Craft Compelling Subject Lines</h3>
        <p>Your subject line is the first impression. Make it concise, intriguing, and relevant to entice opens without resorting to clickbait.</p>
        <h3>2. Segment Your Audience</h3>
        <p>Generic emails don’t cut it anymore. Use data to segment your audience based on behavior, preferences, or demographics, and tailor your content accordingly.</p>
        <h3>3. Leverage Automation</h3>
        <p>Automation tools like our Hulakhi platform allow you to send timely, personalized emails triggered by user actions, boosting engagement and conversions.</p>
        <p>Ready to elevate your email game? Contact us to learn how we can help you craft campaigns that resonate and deliver results.</p>
      `,
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="sofax-breadcrumb">
        <div className="container">
          <h1 className="post__title">Our Blog</h1>
          <nav className="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <img src="/assets/images/about/arrow.png" alt="arrow" />
              </li>
              <li aria-current="page">Blog</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

      {/* Blog Section */}
      <section className="section sofax-section-padding">
        <div className="container">
          <div className="sofax-section-title text-center max-width-large">
            <h2>Insights & Ideas</h2>
            <p>
              Dive into our latest articles for tips, trends, and strategies to
              elevate your digital presence.
            </p>
          </div>
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-lg-6 col-md-6 mb-4">
                <div
                  className="sofax-blog-card wow fadeInUpX"
                  data-wow-delay={`${0.1 * post.id}s`}
                >
                  <div className="sofax-blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="sofax-blog-content">
                    <span className="sofax-blog-date">{post.date}</span>
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <Link
                      className="sofax-default-btn pill"
                      to={`/blog/${post.slug}`}
                    >
                      <span className="button-wraper text-white">Read More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Blog Section */}

      {/* CSS */}
      <style>{`
        .sofax-blog-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .sofax-blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        .sofax-blog-image img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        .sofax-blog-content {
          padding: 20px;
        }
        .sofax-blog-date {
          display: block;
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 10px;
        }
        .sofax-blog-content h4 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
        }
        .sofax-blog-content p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 15px;
        }
        .sofax-default-btn.pill {
          display: inline-block;
          padding: 10px 20px;
          background: #007bff;
          color: #fff;
          border-radius: 25px;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .sofax-default-btn.pill:hover {
          background: #0056b3;
        }
        @media (max-width: 768px) {
          .sofax-blog-image img {
            height: 200px;
          }
          .sofax-blog-content h4 {
            font-size: 1.25rem;
          }
          .sofax-blog-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;