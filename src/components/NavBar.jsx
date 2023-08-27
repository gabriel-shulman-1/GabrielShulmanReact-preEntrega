import carrito from "../components/assets/carrito.png";
import pc from "../components/assets/pc.png"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {



    return (
    <header>
        <img src={pc}></img>
        <nav className="navbar-expand-lg bg-body-tertiary">
            <a className="navbar-brand" href="/">Home</a>
            <a className="navbar-brand" href="/category/hardware">Hardware</a>
            <a className="navbar-brand" href="/category/software">Software</a>
            <a className="navbar-brand" href="/category/accessories">Accesorios</a>
        </nav>
        <img src={carrito}></img>
    </header>
    )
}