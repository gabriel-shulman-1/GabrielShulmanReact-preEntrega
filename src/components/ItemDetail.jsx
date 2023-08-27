import { ItemCount } from "./ItemCount"
import { ItemDetailContainer } from "./ItemDetailContainer"

export  const ItemDetail = ({product}) => {
    console.log(product)
    return(<>
            <div className="itemContainer">
                <div className="productCard" key={product.id}>
                <h3>{product.name}</h3>
                <p>Cantidad : {product.qty}</p>
                <p>Precio : {product.price} U$</p>
                <ItemCount/>
                </div>
            </div>
        </>
        )
}