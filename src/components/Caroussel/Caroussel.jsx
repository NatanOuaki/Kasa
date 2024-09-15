import React, { useState } from 'react';
import './caroussel.css';
import arrow_left from '../../assets/img/arrow_left.png';
import arrow_right from '../../assets/img/arrow_right.png';

function Caroussel({ logement }) {
    const slides = logement.pictures;
    const [currentSlide, setCurrentSlide] = useState(0);

    const updateImage = (direction) => {
        let newIndex = currentSlide + direction;
        if (newIndex < 0) {
            newIndex = slides.length - 1;
        } else if (newIndex >= slides.length) {
            newIndex = 0;
        }
        setCurrentSlide(newIndex);
    };

    return (
        <div id="caroussel">
            <img className="caroussel-img" src={slides[currentSlide]} alt="Caroussel Pictures" />
            {slides.length > 1 && (<>
                <img className="arrow arrow_left" src={arrow_left} alt="Arrow Left" onClick={() => updateImage(-1)} />
                <img className="arrow arrow_right" src={arrow_right} alt="Arrow Right" onClick={() => updateImage(1)} />
                <div className="caroussel-numeration">
                    {currentSlide + 1}/{slides.length}
                </div>
            </>)}
        </div>
    );
}

export default Caroussel;
