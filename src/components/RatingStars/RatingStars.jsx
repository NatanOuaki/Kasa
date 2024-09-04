import redStar from "../../assets/img/redStar.png"
import greyStar from "../../assets/img/greyStar.png"
import './ratingStars.css';


function RatingStars({numOfStars}){
    const totalStars = 5;
    const redStars = numOfStars;
    const stars = [];
    for (let i = 0; i < redStars; i++) {
        stars.push(<img key={`red-${i}`} className="star" src={redStar} alt="Red Star" />);
    }
    for (let i = redStars; i < totalStars; i++) {
        stars.push(<img key={`grey-${i}`} className="star" src={greyStar} alt="Grey Star" />);
    }

    return (
        <div className='logementRating'>
            {stars}
        </div>   
    );
};

export default RatingStars;