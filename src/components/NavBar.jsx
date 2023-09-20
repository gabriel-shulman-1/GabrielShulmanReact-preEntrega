import pc from "../components/assets/pc.png"
import { CartWidget } from "./CartWidget";
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
        <CartWidget/>
    </header>
    
    )
}