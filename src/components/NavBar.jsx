import { Button } from "bootstrap";
import carrito from "../components/assets/carrito.png";
import pc from "../components/assets/pc.png"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const NavBar = () => {

    return (
    <header>
        <img src={pc}></img>
        <nav className="navBar">
            <a className="buttonNavBar" href="/">Home</a>
            <a className="buttonNavBar" href="/category/hardware">Hardware</a>
            <a className="buttonNavBar" href="/category/software">Software</a>
            <a className="buttonNavBar" href="/category/accessories">Accesorios</a>
        </nav>
        <img src={carrito}></img>
    </header>
    )
}