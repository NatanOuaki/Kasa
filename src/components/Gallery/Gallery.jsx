import './gallery.css';
import data from '../../data-logements.json';
import Card from '../Card/Card';




function Gallery({}){
    return(
        <div className="gallery">
            {data.map((logement) =>(
                <Card key={logement.id} logement = {logement}/>
            ) )}
        </div>
    );
};

export default Gallery;