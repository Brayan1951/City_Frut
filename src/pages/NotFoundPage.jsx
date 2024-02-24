import React from 'react'
import { Link } from 'react-router-dom'
// import notfound from './../assets/girl-4.png'
import notfound from './../assets/img/girl-5.png'
// import notfound from './../assets/notfound-3.png'


export default function NotFoundPage() {
  return (
    <div className='notfound row'>
      <div className="col-md-7 text-center d-flex flex-column justify-content-between p-5">
        <h2>Te perdiste?</h2>
        <p>Regresa por aquí</p>
        <button className='btn'>Inicio</button>
      </div>


      <div className="col">
        <img src={`./${notfound}`}  alt="" />

      </div>





    </div>
  )
}
