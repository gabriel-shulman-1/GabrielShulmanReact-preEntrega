import { Item } from "./Item"
export const ItemList = ({products}) => products.map(product => <Item product={product}/>)