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
            <link className="buttonNavBar" href="/">Home</link>
            <link className="buttonNavBar" href="/category/hardware">Hardware</link>
            <link className="buttonNavBar" href="/category/software">Software</link>
            <link className="buttonNavBar" href="/category/accessories">Accesorios</link>
        </nav>
        <img src={carrito}></img>
    </header>
    )
}