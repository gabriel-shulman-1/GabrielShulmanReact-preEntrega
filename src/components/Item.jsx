import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const Item = ({product}) => {
    const {addItem} = useContext(CartContext)
    const onAdd = count => addItem(product,count)

    return (
        <div className="productCard" key={product.id}>
            <Link to={'/item/' + product.id} className="linkProduct"><h3 className="tituloProducto">{product.name}</h3></Link>
            <p>Categoria : {product.category}</p>
            <p>Cantidad : {product.qty}</p>
            <ItemCount onAdd={onAdd} stock={product.qty}/>
        </div>
    )
}