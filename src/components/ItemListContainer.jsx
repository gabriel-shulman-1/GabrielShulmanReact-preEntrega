import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection,query,where } from "firebase/firestore"

//import data from "../data/products.json";

export function ItemListContainer(props){

    const [products,setProducts] = useState([])
    const [loading, setLoading]= useState(true)

    const {id} = useParams()
    
    /*useEffect(()=> {
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
            if(products.length === 0) {return(<h2 className="loading">Loading...</h2>)}*/   
    
    useEffect(()=>{
        const db=getFirestore()
        const refCollection = id 
        ? query(collection(db, "items"),where("category", "==", id)) 
        : collection(db, "items")

        getDocs(refCollection).then(snapshot => {
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                ... doc.data(),
            })))}
            )
            .finally(()=> setLoading(false))
        },[id])

    if(loading) return <div>Loading...</div>
    return (
        <main>
            <div id="greeting" className="fw-bold">{props.greeting}</div>
            <div className="listContainer">
                <ItemList products={products}/>
            </div>
        </main>
    )
};