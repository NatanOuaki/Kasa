import logo from "../assets/img/logoWhite.png"
import './footer.css';


function Footer(){
    return(
        <footer>
            <img className="logo" src={logo} alt="Logo Kasa" />
            <p className="footerText">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;