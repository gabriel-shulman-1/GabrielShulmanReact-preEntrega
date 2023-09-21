import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore"
export function ItemListContainer(props) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const refCollection = id
            ? query(collection(db, "items"), where("category", "==", id))
            : collection(db, "items")
        getDocs(refCollection).then(snapshot => {
            setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })))
        }
        )
            .finally(() => setLoading(false))
    }, [id])
    if (loading) return <div className="loading">Loading...</div>
    return (
        <main>
            <div id="greeting" className="fw-bold">{props.greeting}</div>
            <div className="listContainer">
                <ItemList products={products} />
            </div>
        </main>
    )
};