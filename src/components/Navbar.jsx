import React from 'react'
import { NavLink } from 'react-router-dom'
import './component.css'

export default function Navbar() {
  return (
    // <nav className='navbar navbar-expand-lg justify-content-between'>
    //   <div className='logo'>
    //     <h1>City Frut</h1>
    //   </div>
    //   {/* 

    //   <div className='enlaces'>

    //     <NavLink  to={"/"}>Inicio</NavLink>
    //     <NavLink to={"/carta"}>Carta</NavLink>
    //     <NavLink to={"/conocenos"}>Conocenos</NavLink>
    //   </div> 

    //   */}


    //   <div className=" container-fluid" style={{maxWidth:'200px',margin:'0'}}>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //         <NavLink  to={"/"}>Inicio</NavLink>
    //         </li>
    //         <li className="nav-item">
    //         <NavLink to={"/carta"}>Carta</NavLink>
    //         </li>
    //         <li className="nav-item">
    //         <NavLink to={"/conocenos"}>Conocenos</NavLink>
    //         </li>
    //       </ul>

    //     </div>
    //   </div>

    // </nav>


    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Offcanvas navbar</a> */}
        <h1>CityFrut</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
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
