 
import './Stylesheets/App.css';
import Navbar from './Components/Navbar';
import Herovideo from './Components/Hero';
import Footer from './Components/Footer';
import ImageOne from './Components/ImageOne';
import Services from './Components/Services';
import Reviews from './Components/Reviews';
import ImageTwo from './Components/ImageTwo';
import Call from './Components/Callus';
import Contact from './Components/Contact';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Herovideo />
      </header>
    
      <ImageOne />
      <Services />
      <ImageTwo />
      <Contact />
      <Footer />
      
     
    </div>
  );
}
 