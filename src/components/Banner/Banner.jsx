import './banner.css';


function Banner({className}){
    return(
        <div className={`banner ${className}`}>
            <div className="overlay"></div>
            <h1>At home, everywhere and elsewhere</h1>
        </div>
    );
};

export default Banner;
