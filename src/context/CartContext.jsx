import { createContext, useState } from "react"
export const CartContext = createContext([])
export function CartProvider({ children }) {
    const [item, setItem] = useState([])
    const addItem = (product, quantity) => {
        const alreadyExists = item.some(item => item.id === product.id)
        if (!alreadyExists) setItem(prev => [...prev, { ...product, quantity }])
        else {
            const actualizarProductos = item.map(
                item => {
                    if (item.id === product.id)
                        return {
                            ...item,
                            quantity: item.quantity + quantity,
                        }
                    else return item
                })
            setItem(actualizarProductos)
        }
    }
    const itemsEnCarrito = item.reduce((act, val) => act + val.quantity, 0)
    const removeItem = (id) => {
        const itemFiltered = item.filter((toDelete) => toDelete.id !== id)
        setItem(itemFiltered)
    }
    const clear = () => setItem([])
    return (
        <CartContext.Provider value={{ addItem, itemsEnCarrito, removeItem, clear, item }}>
            {children}
        </CartContext.Provider>
    )
}
