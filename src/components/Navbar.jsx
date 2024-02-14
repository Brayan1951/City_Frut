import React from 'react'
import { NavLink } from 'react-router-dom'
import './component.css' 

export default function Navbar() {
  return (
 <nav>
      <NavLink to={"/"}>Inicio</NavLink>
      <NavLink to={"/carta"}>Carta</NavLink>
      <NavLink to={"/conocenos"}>Conocenos</NavLink>
    

 </nav>
  
  )
}
