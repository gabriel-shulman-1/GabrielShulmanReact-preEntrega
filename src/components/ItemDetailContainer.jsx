import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json";

export function ItemDetailContainer(props){

    const [product,setProduct] = useState(null)
    useEffect(()=> {
        const promise = new Promise((resolve,reject)=>
            {setTimeout(()=>resolve(data[0]),2000)})
            promise.then((data)=> setProduct(data))
        },[])

        if(!product) {
            return(
                <h2>Loading...</h2>
            )
        }

    return (
        <>
            <div id="greeting" className="fw-bold">{props.greeting}</div>
            <div className="itemContainer">
                <div className="productCard" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Cantidad : {product.qty}</p>
                    <p>Precio : {product.price} U$</p>
                    <ItemCount/>
                </div>
            </div>
        </>
    )
};