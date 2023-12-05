 import '../Images/beard.jpg'
 import '../Stylesheets/Service.css'
 import { useState } from 'react'

export default function Service({name}) {
    const [clickedPhoto, setClickedPhoto] = useState(null)
    const handleClick=(id)=>setClickedPhoto(id)

  
    return(
        <div className="OuterServiceContainer">
        <div className="ServiceContainer"> 
        <div className="ServiceName">
        <p>{name.type}</p>
        <div className='ServicePics'>
      
        
        {name.pics.map((item,index)=>{
            return(
               <img src={item}/>
            )
            

        })}

    
        </div>
         
        </div>

      
        </div>
        <div className='BookNow'>
            <a href="https://getsquire.com/booking/book/madison-avenue-vaughan" target="_blank" rel="noopener noreferrer">  Book Now </a>
       
        </div>
        </div>    
    )

}
