import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import "../Stylesheets/Address.css"
export default function Address(){

    return(<div className="AddressContainer">
        <div className="VisitUs">
        <h1>
        Visit Us
        </h1>
            

        </div>
        <div className="Address">
        <FontAwesomeIcon icon={faMapMarkedAlt} />
            <h2>
            10211 Keele St Unit 13, Maple, ON L6A 4R7
            </h2>
        </div>
        <div className="Map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.7892952785205!2d-79.51575602496379!3d43.8601957390201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b29202872a917%3A0x2b49183e16d7a961!2s10211%20Keele%20St%2C%20Maple%2C%20ON%20L6A%204R7!5e0!3m2!1sen!2sca!4v1701729110876!5m2!1sen!2sca" 
        width="100%" 
        height="450" 
        style={{ border: 0 }}
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      
        </div>


    </div>
        
    )
}