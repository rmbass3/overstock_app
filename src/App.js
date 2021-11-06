import './App.css';
import Header from './components/Navbar.js';
import Home from './components/Home.js';
import HomeTransition from './components/HomeTransition';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.js';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      {/* About Us
          Why LVP
          Product Gallery
          Reviews
          Contact */}
      <Header/>
      <Home />
      <About />
      <HomeTransition />
      <Gallery />
    </div>
  );
}

export default App;
