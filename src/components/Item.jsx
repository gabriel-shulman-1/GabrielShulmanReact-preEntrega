import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import h1 from "./assets/placaDeVideo.jpg"
import h2 from "./assets/SSD.jpg"
import h3 from "./assets/motherBoard.jpg"
import h4 from "./assets/microProccesor.jpg"
import s1 from "./assets/licenciaWindows11.jpg"
import s2 from "./assets/office365.jpg"
import s3 from "./assets/AVG.jpg"
import s4 from "./assets/ageOfEmpires2.jpg"
import a1 from "./assets/mouseGamer.jpg"
import a2 from "./assets/keyBoardGamer.jpg"
import a3 from "./assets/monitorCurvo22.jpg"
import a4 from "./assets/headPhoneGamer.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = ({product}) => {
    const images = [h1,h2,h3,h4,s1,s2,s3,s4,a1,a2,a3,a4]
    const {addItem} = useContext(CartContext)
    const onAdd = count => addItem(product,count)

    return (
        <div className="productCard" key={product.id}>
            <Link to={'/item/' + product.id} className="linkProduct"><h3 className="tituloProducto">{product.name}</h3></Link>
            <p>Categoria : {product.category}</p>
            <img className="rounded mx-auto d-block" src={images[product.image]}></img>
            <p>Cantidad : {product.quantity}</p>
            <ItemCount onAdd={onAdd} stock={product.quantity}/>
        </div>
    )
}