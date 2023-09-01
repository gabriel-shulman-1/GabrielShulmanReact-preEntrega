import { ItemCount } from "./ItemCount"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { ItemListContainer } from "./ItemListContainer"

export  const ItemDetail = ({productos}) => {
    const producto = {productos}.productos
    return(
        <>
            <div className="productCard" key={producto.id}>
                <h3>{producto.name}</h3>
                <p>Categoria : {producto.category}</p>
                <img src={producto.image}/>
                <p>{producto.description}</p>
                <p>Cantidad : {producto.qty}</p>
                <ItemCount/>
            </div>
        </>
)}
    