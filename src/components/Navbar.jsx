import React from 'react'
import { NavLink } from 'react-router-dom'
import './component.css'

export default function Navbar() {
  return (



    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <h1>CityFrut</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="canvas-edit offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          {/* <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div> */}
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className={'nav-link'} to={"/"}>Inicio</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={'nav-link'} to={"/carta"}>Carta</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={'nav-link'} to={"/conocenos"}>Conocenos</NavLink>
              </li>
         
            </ul>

          </div>
        </div>
      </div>
    </nav>

  )
}
