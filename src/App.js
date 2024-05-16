import Home from './components/Home/Home';
import NavBar from './components/Nav/NavBar.jsx';
import Categories from './components/TopCategories/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <br />
      <Categories />
    </div>
  );
}

export default App;
