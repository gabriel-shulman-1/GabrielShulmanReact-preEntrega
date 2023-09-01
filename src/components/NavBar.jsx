import carrito from "../components/assets/carrito.png";
import pc from "../components/assets/pc.png"
import { Link } from "react-router-dom";

export const NavBar = () => {

    return (
    <header>
        <img src={pc}></img>
        <nav className="navBar">
            <Link className="buttonNavBar" to="/">Home</Link>
            <Link className="buttonNavBar" to="/category/hardware">Hardware</Link>
            <Link className="buttonNavBar" to="/category/software">Software</Link>
            <Link className="buttonNavBar" to="/category/accessories">Accesorios</Link>
        </nav>
        <img src={carrito}></img>
    </header>
    )
}