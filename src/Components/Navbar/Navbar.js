import React from 'react'
import "./Navbar.css";
import CartShop from '../CartShop/CartShop';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link className="Link" to="/">
          Inicio
        </Link>
        <Link className="Link" to="/productos">
          Productos
        </Link>
        <Link className="Link" to="/galeria">
          Galeria
        </Link>
        <Link className="Link" to="/contacto">
          Contacto
        </Link>
        <li>
          <CartShop />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar