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
                <NavLink 
                    className="navLink" to={"/"}                     
                    style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none"
                    })}
                >
                    <h3> Accueil</h3>
                </NavLink>
                <NavLink 
                    className="navLink" to={"/about"}
                    style={({ isActive }) => ({
                        textDecoration: isActive ? "underline" : "none"
                    })}
                >
                    <h3>A propos</h3>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;