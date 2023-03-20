import React from 'react'
import "./Header.css";
import img from "./natacionlogo.jpeg";

const Header = (props) => {
  return (
    <div className="Header">
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        <img src={img} alt="logo" />
    </div>
  )
}

export default Header