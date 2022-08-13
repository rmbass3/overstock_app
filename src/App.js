import './App.css';
import Header from './components/Navbar.js';
import Home from './components/Home.js';
import HomeTransition from './components/HomeTransition';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.js';
import LVPGallery from './components/LVPGallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import PopModal from './components/PopModal';
import { useState, useEffect} from 'react';


function App() {


  const getInitialVal = () => {
    if (window.innerWidth > 767) {
      return false;
    }
    return true;
  }

  const [isMobile, setIsMobile] = useState(getInitialVal());

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767){
        setIsMobile(false);
      } else if (window.innerWidth < 767){
        setIsMobile(true);
      }
      
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, [isMobile]);

  return (
    <div className="App">
      <PopModal mobile={isMobile} />
      <Header />
      <Home mobile={isMobile}/>
      <About mobile={isMobile}/>
      <HomeTransition mobile={isMobile}/>
      <Reviews mobile={isMobile} />
      <LVPGallery mobile={isMobile} />
      <Contact mobile={isMobile} />
      
    </div>
  );
}

export default App;
