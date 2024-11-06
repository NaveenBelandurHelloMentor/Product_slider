import React, { useRef } from 'react';
import Mycard from './Mycard.js';
import './Imagecarousel.css';

const Imagecarousel = () => {
    const boxRef = useRef(null);

    const btnPressPrev = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= width;
        }
    };

    const btnPressNext = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += width;
        }
    };

    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnPressPrev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnPressNext}><p>&gt;</p></button>

            <div className="product-container" ref={boxRef}>
                <Mycard cardno='1' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                 <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' /> 
            </div>
        </div>
    );
};

export default Imagecarousel;
