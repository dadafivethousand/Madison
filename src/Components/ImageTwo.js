import { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import pic from '../Images/image2.png'
import pic2 from '../Images/image2.png'
import Reviews from './Reviews'
import '../Stylesheets/ImageTwo.css'
 
export default function ImageTwo() {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const backgroundImage = windowWidth < 800 ? pic : pic2;
 
 
return (
 
        <Parallax bgImageStyle={{   top:'5%', width:'120%',height: 'auto'}} className='image' bgImage={backgroundImage} strength={800}>
          <div className='content2'>
          <Reviews />
        </div>   
        </Parallax>
    );

}