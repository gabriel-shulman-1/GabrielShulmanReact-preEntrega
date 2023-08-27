import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";

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
            <ItemDetail product={product}/>
        </>
    )
};