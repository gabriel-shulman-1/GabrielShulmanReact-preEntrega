import carrito from "../components/assets/carrito.png";
import pc from "../components/assets/pc.png"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

const header = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#d8d8d8",
}

const navbar = {
    display: "flex",
    flexdirection: "row",
    justifycontent: "center",
    gap: "2rem",
    borderradius: "0.5rem",
}

const a = {
    backgroundColor: "#1c92f9",
    margin: "1rem",
    width: "auto",
    padding: "0.5rem",
    borderRadius: "0.6rem",
}

export const NavBar = () => {
    return (
    <header style={header}>
        <img src={pc}></img>
        <nav style={navbar} class="navbar-expand-lg bg-body-tertiary">
            <a style = {a}class="navbar-brand" href="Hardware">Hardware</a>
            <a style = {a} class="navbar-brand" href="Software">Software</a>
            <a style = {a} class="navbar-brand" href="Accesorios">Accesorios</a>
        </nav>
        <img src={carrito}></img>
    </header>
    )
}