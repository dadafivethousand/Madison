import '../Stylesheets/Footer.css'
import { Link } from 'react-scroll'
import logowhite from "../Images/logowhite.jpg"
export default function Footer() {
 return(
    <div className='footer'>
    <div className='container'>
        <ul>
            <li className='item'>
            <Link to='/' syp={true} smooth={true}   duration={500}  >Home  </Link>
            </li>
            <li className='item'>
            <Link to='services' syp={true} offset={-50} smooth={true}   duration={500}  >Services  </Link>
            </li>
       
            <li className='item'>
            <a href="https://getsquire.com/booking/book/madison-avenue-vaughan" target="_blank" rel="noopener noreferrer"  >Booking</a>
            </li>
  
            <li className='item'>
            <Link to='contact' syp={true} smooth={true} offset={-50}   duration={500}  >Contact  </Link>
            </li>
        </ul>
        <img src={logowhite} alt="Madison Avenue" />
        <div className='bottom'>
            <span className='line'></span>
            <p>2023  All rights reserved</p>
        </div>
    </div>
</div>
 )
}