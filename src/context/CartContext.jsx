import { createContext,useState } from "react"

export const CartContext = createContext([])

export function CartProvider ({children}){
    const [item, setItem ] = useState([])
    const addItem = (product,qty) => setItem(prev => prev + [product,qty])
    console.log(item)
    return(
        <CartContext.Provider value={ addItem }>
            {children}
        </CartContext.Provider>
    )
}
