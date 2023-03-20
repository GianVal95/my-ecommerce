import React from 'react'
import "./Navbar.css";
import CartShop from '../CartShop/CartShop';

const Navbar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <li>
          <a href="www.google.com">Inicio</a>
        </li>
        <li>
          <a href="www.google.com">Productos</a>
        </li>
        <li>
          <a href="www.google.com">Galeria</a>
        </li>
        <li>
          <a href="www.google.com">Contacto</a>
        </li>
        <li>
          <CartShop />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar