import React from 'react';

const Blog = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon-content">
        <h1>Coming Soon</h1>
        <p>We're working hard to bring you something amazing. Stay tuned!</p>
      </div>
      <style jsx>{`
        .coming-soon {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f7f7f7;
          text-align: center;
        }
        .coming-soon-content {
          max-width: 600px;
          padding: 20px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .coming-soon h1 {
          font-size: 3rem;
          color: #333;
          margin-bottom: 20px;
        }
        .coming-soon p {
          font-size: 1.25rem;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default Blog;
