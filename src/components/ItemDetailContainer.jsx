import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailContainer(props){
    const [product,setProduct] = useState(null)
    const [showLoading, setShowLoading] = useState(true)

    useEffect(()=> {
        const promise = new Promise((resolve,reject)=>
            {setTimeout(()=>resolve(data[0]),2000)})
            promise.then((data)=> setProduct(data))
            promise.then(setShowLoading(false))
        },[])

    if(product) {return(<h2 className="loading">Loading...</h2>)}

    return (
        <>
            {<ItemDetail product={product}/>}
        </>
    )
};