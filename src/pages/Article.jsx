import React from "react";
import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { slug } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design: Trends to Watch in 2025",
      date: "July 10, 2025",
      slug: "future-web-design-2025",
      image: "/assets/images/blog/blog1.png",
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
      date: "June 28, 2025",
      slug: "boost-engagement-email-marketing",
      image: "/assets/images/blog/blog2.png",
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

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="sofax-error">
        <div className="container">
          <h2>Blog Post Not Found</h2>
          <p>Sorry, the blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="sofax-default-btn pill">
            <span className="button-wraper">Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="sofax-breadcrumb">
        <div className="container">
          <h1 className="post__title">{post.title}</h1>
          <nav className="breadcrumbs">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <img src="/assets/images/about/arrow.png" alt="arrow" />
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <img src="/assets/images/about/arrow.png" alt="arrow" />
              </li>
              <li aria-current="page">{post.title}</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End breadcrumb */}

      {/* Article Section */}
      <section className="section sofax-section-padding">
        <div className="container">
          <div className="sofax-article-content">
            <div className="sofax-article-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="sofax-article-meta">
              <span className="sofax-blog-date">{post.date}</span>
            </div>
            <div
              className="sofax-article-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="sofax-article-back">
              <Link to="/blog" className="sofax-default-btn pill">
                <span className="button-wraper">Back to Blog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Article Section */}

      {/* CSS */}
      <style>{`
        .sofax-article-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .sofax-article-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .sofax-article-meta {
          margin-bottom: 20px;
        }
        .sofax-blog-date {
          font-size: 0.9rem;
          color: #666;
        }
        .sofax-article-body {
          font-size: 1.1rem;
          color: #333;
          line-height: 1.6;
        }
        .sofax-article-body h2 {
          font-size: 2rem;
          color: #333;
          margin: 20px 0 10px;
        }
        .sofax-article-body h3 {
          font-size: 1.5rem;
          color: #333;
          margin: 15px 0 10px;
        }
        .sofax-article-body p {
          margin-bottom: 15px;
        }
        .sofax-article-back {
          margin-top: 30px;
          text-align: center;
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
        .sofax-error {
          text-align: center;
          padding: 50px 20px;
        }
        .sofax-error h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 20px;
        }
        .sofax-error p {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 20px;
        }
        @media (max-width: 768px) {
          .sofax-article-image img {
            height: 250px;
          }
          .sofax-article-body h2 {
            font-size: 1.5rem;
          }
          .sofax-article-body h3 {
            font-size: 1.25rem;
          }
          .sofax-article-body p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Article;