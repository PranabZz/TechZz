// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Main';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog/:slug" element={<Article />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
