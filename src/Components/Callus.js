import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import "../Stylesheets/Callus.css"
export default function Call(){

    return(<div className="CallContainer">
        <div className="CallUs">
        <h1>
            Call Us
        </h1>
        <div className="PhoneIcon">
        <FontAwesomeIcon icon={faPhone} />

        </div>


        </div>
        <div className="PhoneNumber">
   
        
            <h2>
                (905) 237-6454
            </h2>


        </div>

    </div>
        
    )
}