import { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import shop1 from '../Images/n.jpg'
import shop2 from '../Images/shop.jpg'
import '../Stylesheets/ImageOne.css'
import Description from './Description';
import Reviews from './Reviews';
import Services from './Services';

export default function ImageOne() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
useEffect(() => {
  const handleResize = () => {
      setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
const backgroundImage = windowWidth < 800 ? shop1 : shop2;
return (
 
        <Parallax bgImageStyle={{   width:'100%',height: 'auto'}} className='image' bgImage={backgroundImage} strength={500}>
          <div className='content'> </div>
        </Parallax>
    );

}