import { ItemCount } from "./ItemCount"

export  const ItemDetail = ({product}) => {
    return(
        <>
            <h3 className="tituloProducto">{product.name}</h3>
            <p>Categoria : {product.category}</p>
            <img src={product.image}></img>
            <p>{product.description}</p>
            <p>Cantidad : {product.qty}</p>
            <p>Precio : {product.price}U$</p>
            <ItemCount/>
        </>
)}
    