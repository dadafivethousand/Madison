import '../Stylesheets/Film.css'
import { useState, useEffect } from 'react'

export default function Film({name}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [clickedPhoto, setClickedPhoto] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [touchPosition, setTouchPosition] = useState(null);
    const photos = name.pics
    const [currentPics, setCurrentPics] = useState(photos.slice(0-2))

    useEffect(()=>{
        const handleResize=()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        return () => window.removeEventListener('resize', handleResize);
    },[])

    useEffect(()=>{
        let imagesToShow = [];
        if(windowWidth > 1130){
        for (let i = 0; i < 3; i++) {
            // Calculate the index for each image, wrapping around using the modulo operator
            let index = (photoIndex + i) % photos.length;
            imagesToShow.push(photos[index]);
        }
        setCurrentPics(imagesToShow)}
        else if (windowWidth > 800){
            for (let i = 0; i < 2; i++) {
                // Calculate the index for each image, wrapping around using the modulo operator
                let index = (photoIndex + i) % photos.length;
                imagesToShow.push(photos[index]);
            }
            setCurrentPics(imagesToShow)
            
        }

        else {
            for (let i = 0; i < 1; i++) {
                // Calculate the index for each image, wrapping around using the modulo operator
                let index = (photoIndex + i) % photos.length;
                imagesToShow.push(photos[index]);
            }
            setCurrentPics(imagesToShow)
        }
 
    
    },[photoIndex, windowWidth, photos]

    )

     
    const enlarge=(id)=>{setClickedPhoto(id)}
    const range = (size) => Array.from({ length: size }, (_, index) => index);
    function scrollRight(){
        setPhotoIndex((prev)=>((1+prev)%photos.length))
    }

    function scrollLeft(){
        setPhotoIndex((prev)=>((prev-1+photos.length)%photos.length))
    }
 

    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        setTouchPosition(touchStartX);
    };

    const handleTouchMove = (e) => {
        const touchEndX = e.touches[0].clientX;
        if (touchPosition === null) {
            return;
        }
        const diff = touchPosition - touchEndX;        
        if (diff > 5) { // Swiping left
            scrollRight();
        } else if (diff < -5) { // Swiping right
            scrollLeft();
        }
        setTouchPosition(null); // Reset touch position
    };

    return(<div className='FilmContainer'>
        <div className='Film'>
        <div className='FirstRow'>
        {range(30).map((item,index)=>{
            return(            
            <div className='WhiteSquare'> </div>           
            ) })
    } 
             </div>
        <div    onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove} 
            className='MiddleRow'>
          <div className='LeftArrowBorder' onClick={scrollRight}><div className='LeftArrow'></div> </div>
 
      
        {currentPics.map((item,index)=>{
            return(               
            <img onClick={() => {enlarge(item)}} src={item}/>             
            ) })
    } 
                <div className='RightArrowBorder' onClick={scrollLeft}> <div className='RightArrow'></div> </div>
            
                   
    </div>

    <div className='LastRow'>
    {range(30).map((item,index)=>{
            return( 
           
            <div className='WhiteSquare'> 
             </div>
               
               

            ) })
    }

    </div>

        </div>

    
{clickedPhoto  ? (
                <div className="enlargedImageContainer" onClick={() => setClickedPhoto(false)}>
                    
                
                    <div className='Close'><p>Close</p></div>
                    <img src={clickedPhoto} alt="Enlarged view" className="enlargedImage" />
                    

                </div>
            ):null}

    </div>

    )
}
