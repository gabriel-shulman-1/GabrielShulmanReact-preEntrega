import './App.css';
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Hello!" />}/>
        <Route path='/category/:id' element={<ItemListContainer greeting="Hello!" />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
