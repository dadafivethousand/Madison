import '../Stylesheets/Contact.css'
import Address from './Address'
import Call from './Callus'
import SocialMedia from './SocialMedia'

export default function Contact(){
    return (
        <div className='ContactContainer' id='contact'>
            <Call />
            <Address />
            <SocialMedia />
        </div>
    )    
}
