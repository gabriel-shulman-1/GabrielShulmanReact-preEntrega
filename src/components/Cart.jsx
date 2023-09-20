import { createContext, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export function Cart (){
    
    const [formValues,setFormValues] = useState(
        {
            name:"",
            form:"",
            email:""
        })

        const {removeItem, clear, item, itemsEnCarrito} = useContext(CartContext)

        const total = () => 
            item.reduce(
                (acumulador,actualValue)=>acumulador + (actualValue.qty * actualValue.price),0
            )

    return(
        <div> {itemsEnCarrito===0 ? <p>no hay nada</p>:<p>hay algo</p>}
            <div className="details">
                <p className="textDetail">Producto</p>
                <p className="textDetail">Cantidad</p>
                <p className="textDetail">Importe</p>
                <p className="textDetail">Total</p>
                <p className="textDetail">Eliminar</p>
            </div>
            <div>
                {item.map(item => (
                    <div key={item.id} className="details">
                        <p className="textDetail">{item.name}</p>
                        <p className="textDetail">{item.qty}</p>
                        <p className="textDetail">{item.price}</p>
                        <p className="textDetail">{item.price * item.qty}</p>
                        <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="details">
                <h3>Total: {total()} U$</h3>
            </div>
        </div>
    )
}