import './App.css';
import { useState } from "react"
import carrito from "./components/assets/carrito.png";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import bootstrap from 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <ItemListContainer greeting="Hello!" />
        <Route/>
        <Route/>
        <Route/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
