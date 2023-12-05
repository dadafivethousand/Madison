import '../Stylesheets/Hero.css'
import covervid from '../Videos/Adobestock.mp4';
export default function Herovideo() {
    const Order = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className="hero-container" id='/'>
            <video autoPlay loop muted>
                <source src={covervid} type="video/mp4" /> 
                Your browser does not support the video tag.
            </video>

            
            <button onClick={()=>Order('https://getsquire.com/booking/book/madison-avenue-vaughan')} className='BookingButton'> Book Now </button>
        </div>
    );
};