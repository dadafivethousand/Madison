 import '../Images/beard.jpg'
 import '../Stylesheets/Service.css'
import Film from './Film'

export default function Service({name}) {
  
    return(
        
        <div className="OuterServiceContainer">
        <div className="ServiceContainer"> 
            <div className="ServiceName">
                 <p>{name.type}</p>      
            </div> 
        <Film name={name}/>
        </div>
        <div className='BookNow'>
            <a href="https://getsquire.com/booking/book/madison-avenue-vaughan" target="_blank" rel="noopener noreferrer">  Book Now </a>
        </div>

  
        </div>   
    )

}
