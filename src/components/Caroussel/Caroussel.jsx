import './caroussel.css';
import arrow_left from '../../assets/img/arrow_left.png';
import arrow_right from '../../assets/img/arrow_right.png';

function Caroussel({logement}){
    return(
        <div id="caroussel">
            <img class="caroussel-img" src={logement.pictures[0]} alt="Caroussel Pictures"/>
            <img class=" arrow arrow_left" src={arrow_left} alt="Arrow Left"/>
            <img class="arrow arrow_right" src={arrow_right} alt="Arrow Right"/>
        </div>
    );
};

export default Caroussel;