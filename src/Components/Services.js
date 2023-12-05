import '../Stylesheets/Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScissors } from '@fortawesome/free-solid-svg-icons';
import logoblack from '../Images/logoblack.jpg'
import Description from './Description'
import Scissors from './Scissors';
import Service from './Service';
import haircut from '../Images/haircut.jpg'
import beard from '../Images/beard.jpg'
import lineup from '../Images/lineup.jpg'
import scissor from '../Images/scissor2.jpg'
import bpole from '../Images/bpole.png'

 
export default function Services() {
    const haircutpics = [haircut, haircut, haircut, haircut]
    const beardpics = [beard, beard, beard, beard]
    const lineuppics = [lineup,lineup,lineup,lineup]
    const scissorpics = [scissor,scissor,scissor,scissor]
    const services = [{type:'haircut', image: haircut, pics: haircutpics },{type:'beard', image: beard, pics:beardpics }, {type:'lineup', image: lineup, pics:lineuppics }, {type:'styling', image: scissor, pics:scissorpics} ]

    
    return(<div className='ServicesContainer' id='services'>
        <div className='Heading'>
    <img src={bpole} />
    <h1>Services</h1>
    <img src={bpole} />
    </div>
        <div className='Services'>
        <div className='right'> <Scissors /></div>
        <div className='ServiceGrid'>
       
        {services.map((item,index)=>{
            return(
                 <Service   name={item} />
            )
        })}
     
       </div>
       <div className='left'> <Scissors rotate={90} /></div>
     
        </div>

        <img className='logoblack' alt="Madison Avenue"  src={logoblack}/>

        </div>
    )

}