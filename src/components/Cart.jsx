import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';
export function Cart() {
    const [formValues, setFormValues] = useState(
        {
            name: "",
            number: "",
            email: "",
        })
    const { removeItem, clear, item, itemsEnCarrito } = useContext(CartContext)
    const total = () =>
        item.reduce(
            (acumulador, actualValue) => acumulador + (actualValue.quantity * actualValue.price), 0
        )
    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }
    const sendOrder = () => {
        if (formValues.name === "" || formValues.number === "" || formValues.email === "") {
            alert("No completaste un campo")
        } else {
            const order = {
                buyer: formValues,
                item,
                total: total(),
            }
            const db = getFirestore()
            const orderCollection = collection(db, "orders")
            addDoc(orderCollection, order).then(({ id }) => {
                if (id) {
                    setFormValues({
                        name: "",
                        phone: "",
                        email: "",
                    })
                    clear()
                    alert("Su orden " + id + " ha sido completada")
                }
            })
        }
    }
    return (
        <div className="containerResumen"> {itemsEnCarrito === 0 ?
            <Link to={"/"}>
                <div className="noHayNada">
                    <h2 id="noHay">No hay nada en el carrito. Hace click para volver!</h2>
                </div>
            </Link>
            :
            <>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Importe</th>
                            <th scope="col">Total</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    {item.map(item => (
                        <thead key={item.id}>
                            <tr>
                                <th>{item.name}</th>
                                <th>{item.quantity}</th>
                                <th>{item.price}</th>
                                <th>{item.price * item.quantity}</th>
                                <th><button onClick={() => removeItem(item.id)} className="btn btn-primary">Eliminar</button></th>
                            </tr>
                        </thead>
                    ))}
                </table>
                <div className="personalData">
                    <h3>Total: {total()} U$</h3>
                </div>
                <div className="personalData">
                    <h4>Ingresa tus datos para realizar la compra</h4>
                    <input className="personalDataInput" placeholder="Ingresa tu nombre"
                        onChange={handleChange}
                        value={formValues.name}
                        type="text"
                        name="name"
                    />
                    <input className="personalDataInput" placeholder="Ingresa tu Numero de telefono"
                        onChange={handleChange}
                        value={formValues.number}
                        type="number"
                        name="number"
                    />
                    <input className="personalDataInput" placeholder="Ingresa tu correo electronico"
                        onChange={handleChange}
                        value={formValues.email}
                        type="email"
                        name="email"
                    />
                    <button className="btn btn-primary" onClick={sendOrder}>Finalizar compra</button>
                </div>
            </>}
        </div>
    )
}