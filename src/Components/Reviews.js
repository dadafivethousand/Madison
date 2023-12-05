import '../Stylesheets/Reviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// In your JSX

import { useState } from 'react';
export default function Reviews() 
{
    const [reviewIndex, setReviewIndex] = useState(0)
 
    const reviews = [
        { text: "Amazing experience with incredible staff and exceptional service. Will definitely be back again! Yes. This establishment is highly recommended. Support Local.  This is seriously a terrific place and also dig all the decor. Thanks guys!!!", author: "Carlo G" },
        { text: "Excellent studio, quality haircuts. Would give 10 stars if I could.", author: "Max Li" },
        { text: "5 - Star Service!! By far the best barber shop in the GTA. The place was clean & all staff were extremely nice & friendly, the price was reasonable also.. Had a cut booked with Girgis, who seemed very knowledgeable & good guy.. overall, I was satisfied with a service & a cut itself.. Highly recommend!!!!!" , author: "Olexiy Shkolyarenko" },
        { text: "Best barber shop in the gta, all barbers are very skilled and help you figure out the best look for you, awesome beard trim and line ups. Amazing fades. Highly recommend!" , author: "Joshua Natev" },
        // ... more reviews
    ];
    function moveright() {       
        setReviewIndex((prev)=> ((1 + prev) % reviews.length ))        
    }
    function moveleft() {
        setReviewIndex((prev)=> (  (prev-1+ reviews.length) % reviews.length ))}
return(
    <div className="ReviewsContainer">
         <button onClick={moveleft }> &lt; </button>
         <div className="Review-Text">
                <p className="txt">{reviews[reviewIndex].text}</p>
                <div className="Rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
    </div>
                <p className="ReviewAuthor">- {reviews[reviewIndex].author}</p>
            </div>
            <button onClick={moveright}>&gt;</button>

    </div>
);
}
