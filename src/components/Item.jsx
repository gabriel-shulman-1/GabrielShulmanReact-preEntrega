import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
export const Item = ({product}) => {
    
    return (
        <div className="productCard" key={product.id}>
            <Link to={'/item/' + product.id} className="linkProduct"><h3 className="tituloProducto">{product.name}</h3></Link>
            <p>Categoria : {product.category}</p>
            <p>Cantidad : {product.qty}</p>
            <ItemCount stock={product.qty}/>
        </div>
    )
}