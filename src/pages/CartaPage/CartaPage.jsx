import React from 'react'
import './carta.css'
import fruta from "./../../assets/purafruta.jpg"
import { Link } from 'react-router-dom'

export default function CartaPage() {
  return (
    <main>
      <section className='opciones'>

        <Link to={'./cremoladas'}>
          <article>

            <h2>Carta de Pura Fruta</h2>
            <img src={fruta} alt="" />

          </article>
        </Link>
        <Link to={'./promociones'}>
          <article>

            <h2>Promociones</h2>
            <img src={fruta} alt="" />

          </article>
        </Link>






      </section>




    </main>
  )
}
