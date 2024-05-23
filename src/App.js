import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar.jsx';
import Categories from './components/TopCategories/Categories';
import Who from './components/Who are we/Who';
import TestimonialSlider from './components/Feedback/TestimonialSlider.jsx';
import Footer from './components/Footer/Footer';
import Tutorials from './content/Toturials/Toturials';
import Frontend from './content/Front-End/Frontend.jsx';
import Backend from './content/BackEnd/Backend.jsx';
import Mobile from './content/Mobile App/Mobile.jsx';
import Design from './content/Web Design/Design.jsx';

function Layout() {
  const location = useLocation();

  const isExcludedPage = ["/tutorials", "/content/Front-End", "/content/Backend", "/content/Mobile", "/content/Design"].includes(location.pathname);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/content/Front-End" element={<Frontend />} />
        <Route path="/content/Backend" element={<Backend />} />
        <Route path="/content/Mobile" element={<Mobile />} />
        <Route path="/content/Design" element={<Design />} />
      </Routes>
      {!isExcludedPage && (
        <>
          <Categories />
          <Who />
          <TestimonialSlider />
          <Footer />
        </>
      )}
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
