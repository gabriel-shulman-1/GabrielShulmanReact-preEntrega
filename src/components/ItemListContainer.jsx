import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json"

export const ItemListContainer = (props) => {

    const [products,setProducts] = useState([])
    useEffect(()=> {
        const promise = new Promise((resolve,reject)=>
            {setTimeout(()=>resolve(data),2000)})
            promise.then((data)=> setProducts(data))
        },[])

    return (
        <>
            <div id="greeting" className="fw-bold">{props.greeting}</div>
            <div>
                {products.map(product => {
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.qty}</p>
                        <p>{product.price}</p>
                        <ItemCount/>
                    </div>
                })}
            </div>
        </>
    )
};