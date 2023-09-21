import './App.css';
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Hello!" />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:id' element={<ItemListContainer greeting="Hello!" />}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}