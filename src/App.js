import React , { Component } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";



class App extends Component {
  render () {
    return (
      <div className="App">
        <Header 
        title="AquaSports Store" 
        subTitle="Bienvenidos a nuestra tienda virtual"/>
        <Navbar/>

        <div className="UserSection">
          <Cards 
          name="Trajes de Baño"
          description="Damas y Caballeros"
          img="https://http2.mlstatic.com/S_3870-MLM79769557_3660-O.jpg"
          />
        </div>

        <div className="UserSection">
          <Cards 
          name="Gorros de Natación"
          description="Adultos y Niños"
          img="https://th.bing.com/th/id/OIP.Vsc4NxVn3a_s31qNO1ER5QHaFD?pid=ImgDet&rs=1"
          />
        </div>

        <div className="UserSection">
          <Cards 
          name="Lentes de Natación"
          description="Adultos y Niños"
          img="https://images-na.ssl-images-amazon.com/images/I/91WG%2BEq8WOL._SL1500_.jpg"
          />
        </div>
        
        
        
      </div>
    );
  }
}

export default App;
