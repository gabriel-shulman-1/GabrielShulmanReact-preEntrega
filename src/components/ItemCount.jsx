import { useState } from "react"

export const ItemCount = () => {
    const [count,setCount] = useState(1);
    const handleIncreaseCount = () => {setCount((prev) => prev + 1)}
    const handleDecreaseCount = () => {if(count > 1)setCount((prev) => prev - 1)}
    return (
        <div className="itemCount">
            <button onClick={handleIncreaseCount}>+</button>
            <span>{count}</span>
            <button onClick={handleDecreaseCount}>-</button>
            <button>Agregar al carrito</button>
        </div>
    )
}