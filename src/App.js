import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar.jsx';
import Categories from './components/TopCategories/Categories';
import Who from './components/Who are we/Who';
import TestimonialSlider from './components/Feedback/TestimonialSlider.jsx';
import Footer from './components/Footer/Footer';
import Tutorials from './content/Toturials/Toturials';

function Layout() {
  const location = useLocation();

  const isTutorialsPage = location.pathname === "/tutorials";

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
      {!isTutorialsPage && <>
        <br />
        <Categories />
        <Who />
        <TestimonialSlider />
        <Footer />
      </>}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
