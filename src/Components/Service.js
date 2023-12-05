 import '../Images/beard.jpg'
 import '../Stylesheets/Service.css'

export default function Service({name}) {
    return(
        <div className="ServiceContainer"> 
        <div className='ServiceName'>
        <p>{name.type}</p>
        
         
        </div>
        <div className='BookNow'>
        <p>Book Now</p>
        </div>
        </div>

    )

}