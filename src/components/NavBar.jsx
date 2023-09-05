import carrito from "../components/assets/carrito3.svg";
import pc from "../components/assets/pc.png"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    return (
    <header>
        <img src={pc}></img>
        <nav className="navBar">
            <Link className="btn btn-primary" to="/">Home</Link>
            <Link className="btn btn-primary" to="/category/hardware">Hardware</Link>
            <Link className="btn btn-primary" to="/category/software">Software</Link>
            <Link className="btn btn-primary" to="/category/accessories">Accesorios</Link>
        </nav>
        <img src={carrito}></img>
    </header>
    )
}