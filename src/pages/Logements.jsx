import '../assets/pageCSS/logements.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data-logements.json';
import ErrorPage from './ErrorPage';
import Caroussel from '../components/Caroussel/Caroussel';


const Logements = () => {
  const { id } = useParams();

  const logement = data.find((item) => item.id === id);
  
  let partsLocation = logement.location.split(" - ");
  let location = partsLocation[1] + ", " + partsLocation[0];

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Caroussel key={logement.id} logement = {logement}/>
      <div className='container'>
        <div>
          <p className='logementTitle'>{logement.title}</p>
          <p className='logementLocation'>{location}</p>
        </div>  
        <div className='host'>
          <p className='hostName'>{logement.host.name}</p>
          <img className='hostPic' src={logement.host.picture} alt={logement.host.name}/>
        </div>
        <h3>Rating: {logement.rating}</h3>
      </div>
      <h3>Equipments:</h3>
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      <h3>Tags:</h3>
      <ul>
        {logement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Logements;
