import { useState, useEffect } from 'react'
import '../Stylesheets/Countup.css'
export default function CountUp ({ end, duration, category }){
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const endCount = parseInt(end, 10);
        const interval = duration / endCount;
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === endCount) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (<div className='A'>
    <div className="num">{count} + </div> 
    <div className="cat">{category}</div> 
    </div>
    )
};

 