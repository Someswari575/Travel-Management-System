import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Book from './pages/Book';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-4">
        <div className="container container-800">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}
