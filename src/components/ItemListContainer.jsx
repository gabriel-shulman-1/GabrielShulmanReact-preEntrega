import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json";

export function ItemListContainer(props){

    const [products,setProducts] = useState([])
    useEffect(()=> {
        const promise = new Promise((resolve,reject)=>
            {setTimeout(()=>resolve(data),2000)})
            promise.then((data)=> setProducts(data))
        },[])

    return (
        <>
            <div id="greeting" className="fw-bold">{props.greeting}</div>
            <div className="listContainer">
                {products.map(product => (
                        <div className="productCard" key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Cantidad : {product.qty}</p>
                            <p>Precio : {product.price} U$</p>
                            <ItemCount/>
                        </div>
                        )
                    )
                }
            </div>
        </>
    )
};