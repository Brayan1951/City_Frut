import React from 'react'
import './carta.css'
import fruta from "./../../assets/purafruta.jpg"
// import fruta from "./../../assets/img/purafruta.jpg"
import { Link } from 'react-router-dom'

export default function CartaPage() {
  return (
    <main>
      <section className='opciones'>

          <article className='cremoladas'>
        <Link className='row' to={'./cremoladas'}>
            <div className="col-md-6 text-center row justify-content-center p-2">

            <h2 className='text-center'>Carta de Pura Fruta</h2>
            </div>
            <div className="col-md text-center text-md-end">

            <img src={fruta} alt="" />
            </div>

        </Link>
          </article>
          <article className='promociones'>
        <Link className='row' to={'./promociones'}>
          <div className="col-md-6 text-center row justify-content-center p-2">

            <h2 className='text-center'>Promociones</h2>
          </div>
          <div className="col-md text-center text-md-end">

            <img src={fruta} alt="" />
          </div>

        </Link>
          </article>






      </section>




    </main>
  )
}
