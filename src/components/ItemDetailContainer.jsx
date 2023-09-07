import { useState, useEffect } from "react";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export function ItemDetailContainer(props){
    const [product,setProduct] = useState(null)
    const {id} = useParams() 

    useEffect(()=> {
        const promise = new Promise((resolve,reject)=>
            {setTimeout(()=>{
                const productById = data.find((product) => product.id === id)
                resolve(productById)},2000)
            })

            promise.then((data)=> setProduct(data))
        },[])

    if(product==null) {return(<h2 className="loading">Loading...</h2>)}

    return (
        <main>
            {<ItemDetail product={product}/>}
        </main>
    )
};