 import '../Images/beard.jpg'
 import '../Stylesheets/Service.css'

export default function Service({name}) {
    return(
        <div className="ServiceContainer"> 
        <div className='ServiceName'>
        <p>{name.type}</p>
        
         
        </div>
        <div className='BookNow'>
            <a href="https://getsquire.com/booking/book/madison-avenue-vaughan" target="_blank" rel="noopener noreferrer">  Book Now </a>
       
        </div>
        </div>

    )

}