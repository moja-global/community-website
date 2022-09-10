import React, { useRef } from 'react';
import './styles.css';
import features from '../../../websiteData/features';
import { MdOutlineArrowLeft,MdOutlineArrowRight } from 'react-icons/md';


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
            <MdOutlineArrowLeft size={100} className="slider-icon left" onClick={slideLeft} />
            <div className="card-container">
                {features.map((props, idx) => {
                    return <article className='card' ref={card}>
                        <Feature key={idx} {...props} />
                    </article>
                })}
            </div>
            <MdOutlineArrowRight size={100} className="slider-icon right" onClick={slideRight} />
        </div>
    </>
}

export default Slider