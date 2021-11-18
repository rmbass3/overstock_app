import './App.css';
import Header from './components/Navbar.js';
import Home from './components/Home.js';
import HomeTransition from './components/HomeTransition';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.js';
import LVPGallery from './components/LVPGallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

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
      <Reviews />
      <LVPGallery />
      <Contact />
    </div>
  );
}

export default App;
