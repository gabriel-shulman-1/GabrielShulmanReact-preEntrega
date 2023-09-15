import { createContext,useState } from "react"

export const CartContext = createContext([])

export function CartProvider ({children}){
    const [item, setItem ] = useState([])
    const addItem = (product,qty) => console.log(product,qty)
    return(
        <CartContext.Provider value={ addItem }>
            {children}
        </CartContext.Provider>
    )
}
