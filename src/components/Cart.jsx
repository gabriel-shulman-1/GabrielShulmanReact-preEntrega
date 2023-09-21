import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                (acumulador,actualValue)=>acumulador + (actualValue.quantity * actualValue.price),0
            )

        const newRegister = () =>{
            
        }

    return(
        <div className="containerResumen"> {itemsEnCarrito===0 ? 
        <Link to={"/"}>
        <h2 id="noHay">No hay nada en el carrito. Hace click para volver!</h2>
        </Link>
        :
        <>
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
                        <p className="textDetail">{item.quantity}</p>
                        <p className="textDetail">{item.price}</p>
                        <p className="textDetail">{item.price * item.quantity}</p>
                        <button onClick={()=>removeItem(item.id)} className="btn btn-primary">Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="details">
                <h3>Total: {total()} U$</h3>
            </div>
            <div className="personalData">
                <h4>Ingresa tus datos para realizar la compra</h4>
                    <input type="text" className="personalDataInput" placeholder="Ingresa tu nombre"/>
                    <input type="number" className="personalDataInput" placeholder="Ingresa tu Numero de telefono" />
                    <input type="email" className="personalDataInput" placeholder="Ingresa tu correo electronico"/>
                    <button className="btn btn-primary">Finalizar compra</button>
            </div>
            </>}
        </div>
    )
}