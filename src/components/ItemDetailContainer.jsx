import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore"
export function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const refDoc = doc(db, "items", id)
        getDoc(refDoc).then(snapshot => {
            setProduct({ id: snapshot.id, ...snapshot.data() })
        })
            .finally(() => setLoading(false))
    }, [id])
    if (loading) return <div className="loading">Loading...</div>
    return (
        <main>
            {<ItemDetail product={product} />}
        </main>
    )
};