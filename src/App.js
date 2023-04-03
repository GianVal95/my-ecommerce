import React , { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";

import Inicio from "./Pages/Inicio/Home";
import Productos from "./Pages/Productos/Productos";
import Galeria from "./Pages/Galeria/Galeria";
import Contacto from "./Pages/Contacto/Contacto";






class App extends Component {
  render () {
    return (
      <Router>
      <div className="App">
        <Header 
        title="AquaSports Store" 
        subTitle="Bienvenidos a nuestra tienda virtual"/>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Inicio/>}></Route>
          <Route path="/productos"  element={<Productos/>}></Route>
          <Route path="/galeria"  element={<Galeria/>}></Route>
          <Route path="/contacto"  element={<Contacto/>}></Route>
        </Routes>
      
        <Footer/>
      

      
        

      
        
        
      </div>
      </Router>
    );
  }
}

export default App;
