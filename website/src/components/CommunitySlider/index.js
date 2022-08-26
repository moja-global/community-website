import React, { useRef } from 'react';
import features from '../../../websiteData/features';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Slider = ({ Feature }) => {
    const card = useRef(null);
    const slideRight = () => {
        const cardDimensions = card.current.getBoundingClientRect();
        const cardWidth = cardDimensions.width
        var slider = document.querySelector(".card-container");
        slider.scrollLeft = slider.scrollLeft + cardWidth + 30;
    }
    const slideLeft = () => {
        const cardDimensions = card.current.getBoundingClientRect();
        const cardWidth = cardDimensions.width
        var slider = document.querySelector(".card-container");
        slider.scrollLeft = slider.scrollLeft - cardWidth - 30;
    }
    return <>
        <div className="contain">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft} />
            <div className="card-container">
                {features.map((props, idx) => {
                    return <article className='card' ref={card}>
                        <Feature key={idx} {...props} />
                    </article>
                })}
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
        </div>
    </>
}

export default Slider