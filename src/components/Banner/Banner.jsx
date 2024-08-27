import './banner.css';


function Banner({className}){
    return(
        <div className={`banner ${className}`}>
            <div className="overlay"></div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;