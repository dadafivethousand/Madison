import '../Stylesheets/Description.css'
import girg from '../Images/girg.jpg'

 
export default function Description() {
    return(
        <div className='DescriptionContainer'>
            <img src={girg} alt="Girgis" class="about-image"></img>
            <p>Welcome to Madison Avenue! For over five years, we’ve been the go-to spot for the freshest fades and coolest cuts in town. 

We pride ourselves on being at the forefront of barbering techniques, and standards. It’s not just about the cut – it's about the experience. 

 Drop by Madison Avenue and let’s keep pushing the boundaries of what a great barber experience can be!</p>

    
        </div>

        
    )

}