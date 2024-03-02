import React from 'react'
import { Link } from 'react-router-dom'
// import notfound from './../assets/girl-4.png'
import notfound from './../assets/img/girl-5.png'
// import notfound from './../assets/notfound-3.png'


export default function NotFoundPage() {
  return (
    <div className='notfound row'>
      <div className=" col-md-7  d-flex flex-column justify-content-between text-center p-5">
        <h2>TE PERDISTE ?</h2>
        <div className="detalle text-center d-flex justify-content-center">

        <p>No te preocupes vuelve a refrescarte, presionando el boton</p>
        </div>
        <div className="boton-regreso">

        <button className=' text-center justify-content-center'>Regresa aqui</button>
        </div>
      </div>


      <div className="col">
        <img src={`./${notfound}`}  alt="" />

      </div>





    </div>
  )
}
