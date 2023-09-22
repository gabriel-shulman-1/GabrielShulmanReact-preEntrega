import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import carrito from "../components/assets/carrito3.svg";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
export function CartWidget() {
    const [itemsInCart, SetItemsInCart] = useState()
    const { itemsEnCarrito } = useContext(CartContext)
    useEffect(() => {
        if(itemsEnCarrito === 0) {SetItemsInCart("No hay items en el carrito")}
        else {
            itemsEnCarrito === 1 ? SetItemsInCart("hay " + itemsEnCarrito + " item en el carrito")
            :SetItemsInCart("hay " + itemsEnCarrito + " items en el carrito")
            }
        },[itemsEnCarrito])
    return (
        <Link to="/cart">
            <div className="inCart">
                <img src={carrito} alt=""></img>
                <p>{itemsInCart}</p>
            </div>
        </Link>
    )
}