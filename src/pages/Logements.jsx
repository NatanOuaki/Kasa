import '../assets/pageCSS/logements.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data-logements.json';
import ErrorPage from './ErrorPage';
import Caroussel from '../components/Caroussel/Caroussel';
import RatingStars from '../components/RatingStars/RatingStars';
import Collapse from '../components/Collapse/Collapse';



const Logements = () => {
  const { id } = useParams();

  const logement = data.find((item) => item.id === id);
  
  if (!logement) {
    return <ErrorPage />;
  }

  let partsLocation = logement.location.split(" - ");
  let location = partsLocation[1] + ", " + partsLocation[0];

  return (
    <div>
      <Caroussel key={logement.id} logement = {logement}/>
      <div className='container'>
        <div className='logementLeft'>
          <div className='logementInfo'>
            <p className='logementTitle'>{logement.title}</p>
            <p className='logementLocation'>{location}</p>
          </div>  
          <div className='logementTags'>
            {logement.tags.map((tag, index) => (
              <p key={`${tag}-${index}`}>{tag}</p>
            ))}
          </div>
        </div>
        <div className='logementRight'>
          <div className='host'>
            <p className='hostName'>{logement.host.name}</p>
            <img className='hostPic' src={logement.host.picture} alt={logement.host.name}/>
          </div>
          <RatingStars key={logement.id} numOfStars = {logement.rating}/>
        </div>
      </div>
      <div className='dropdownContainer'>
        <Collapse key={`description-${logement.id}`} content = {logement.description} type= {"Description"}/>
        <Collapse key={`equipments-${logement.id}`} content = {logement.equipments} type= {"Equipments"}/>
      </div>
    </div>
  );
};

export default Logements;
