import { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import data from "../data/products.json";
import { useParams } from "react-router-dom";

export function ItemListContainer(props){

    const [products,setProducts] = useState([])
    const {id} = useParams()
    console.log(id)
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
            },[])
            
            if(!products) {
                return(
                    <h2>Loading...</h2>
                )
            }

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