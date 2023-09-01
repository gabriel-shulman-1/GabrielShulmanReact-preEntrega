import { useState, useEffect } from "react";
import data from "../data/products.json";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export function ItemListContainer(props){

    const [products,setProducts] = useState([])
    const {id} = useParams()
    
    useEffect(()=> {
        const promise = new Promise((resolve,reject)=>
        
        {setTimeout(()=>resolve(data),2000)})
        
        promise.then((data)=> 
        {if (!id){
                setProducts(data)  
            } else {
                const productsFiltered = data.filter(
                    (product) => product.category===id
                    )
                    setProducts(productsFiltered)
                    }})
                },[id])
            if(products.length === 0) {return(<h2 className="loading">Loading...</h2>)}

    return (
        <>
            <div id="greeting" className="fw-bold">{props.greeting}</div>
            <div className="listContainer">
                <ItemList products={products}/>
            </div>
        </>
    )
};