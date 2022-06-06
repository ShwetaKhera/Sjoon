import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './screens/home.js';
import AboutUs from './screens/aboutUs.js';
import ContactUs from './screens/contactUs.js';
import FAQ from './screens/faq.js';
import Products from './screens/products.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
