import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar.jsx';
import Categories from './components/TopCategories/Categories';
import Who from './components/Who are we/Who';
import TestimonialSlider from './components/Feedback/TestimonialSlider.jsx';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <br />
      <Categories />
      <Who />
      <TestimonialSlider />
      <Footer />
    </div>
  );
}


export default App;
