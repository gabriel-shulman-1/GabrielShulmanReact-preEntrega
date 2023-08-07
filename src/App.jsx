import './App.css';
import carrito from "./components/assets/carrito.png";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import bootstrap from 'bootstrap';

export default function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Hello!" />
    </>
  )
}
