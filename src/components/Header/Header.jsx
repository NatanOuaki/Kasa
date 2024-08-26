import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logoRed.png"
import './header.css';


function Header(){
    return(
        <header>
            <NavLink to={"/"}>
                <img className="logo" src={logo} alt="Logo Kasa" />
            </NavLink>
            <nav className="navLinks">
                <NavLink className="navLink" to={"/"}>
                    <h3> Accueil</h3>
                </NavLink>
                <NavLink className="navLink" to={"/about"}>
                    <h3>A propos</h3>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;