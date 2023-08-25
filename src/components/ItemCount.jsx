import { useState } from "react"

export const ItemCount = () => {
    const [count,setCount] = useState(1);
    const handleIncreaseCount = () => {
    
    }
    return (
        <div className="itemCount">
            <Span onClick={handleIncreaseCount}>+</Span>
            <Span>0</Span>
            <Span>-</Span>
            <button>Agregar al carrito</button>
        </div>
    )
}