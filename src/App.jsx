import './App.css';
import { useState } from "react"
import carrito from "./components/assets/carrito.png";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from "./components/NavBar";
import bootstrap from 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Hello!" />}/>
        <Route path='/category/:id' element={<ItemListContainer greeting="Hello!" />}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
