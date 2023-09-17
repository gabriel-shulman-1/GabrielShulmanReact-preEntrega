import { createContext,useEffect,useState } from "react"

export const CartContext = createContext([])

export function CartProvider ({children}){
    const [item, setItem ] = useState([])
    const [ItemsCart,setItemsCart] = useState(0)
    const addItem = (product,qty) =>setItem(prev => [...prev,{...product,qty}])
    const itemsEnCarrito = item.reduce((act,val) => act + val.qty,0)
    useEffect(()=>{
        for (let index = 0; index < item.length; index++) {
            setItemsCart(item[index].qty)
        }
    },[item, ItemsCart])
    return(
        <CartContext.Provider value={ {addItem,itemsEnCarrito} }>
            {children}
        </CartContext.Provider>
    )
}
