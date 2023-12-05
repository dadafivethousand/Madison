import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


import '../Stylesheets/SocialMedia.css'
export default function SocialMedia(){

    return(<div className="SocialMedia">
        <div className="FollowUs">
        <h1>
           Follow Us 
        </h1>
            

        </div>
        <div className="SocialMediaIcons">
       <a href="https://www.instagram.com/madisonavenue_studio/?hl=en"> <FontAwesomeIcon  icon={faInstagram}></FontAwesomeIcon> </a>
       <a href="https://www.facebook.com/madisonavenuehairstudioVaughan/"> <FontAwesomeIcon  icon={faFacebook}></FontAwesomeIcon> </a>
        </div>

    </div>
        
    )
}