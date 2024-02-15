import React from 'react'
import { NavLink } from 'react-router-dom'
import './component.css' 

export default function Navbar() {
  return (
 <nav>
      <div className='logo'>
        <h1>City Frut</h1>
      </div>
      <div className='enlaces'>

      <NavLink to={"/"}>Inicio</NavLink>
      <NavLink to={"/carta"}>Carta</NavLink>
      <NavLink to={"/conocenos"}>Conocenos</NavLink>
      </div>
    

 </nav>
  
  )
}
