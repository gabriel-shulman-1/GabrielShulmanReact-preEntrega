import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import carrito from "../components/assets/carrito3.svg";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CartWidget () {
    const [itemsInCart,SetItemsInCart] = useState()
    const {itemsEnCarrito} = useContext(CartContext)
    
    useEffect(()=>{
        SetItemsInCart(
            itemsEnCarrito==0 ? "No hay items en el carrito":"hay " + itemsEnCarrito + " item/s en el carrito"
            )

    }
    )

    return(
        <div className="inCart">
            <img src={carrito}></img>
            <p>{itemsInCart}</p>
        </div>
    )
}