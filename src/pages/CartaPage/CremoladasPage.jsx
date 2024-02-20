import React from 'react'
import CardCremolada from '../../components/CardCremolada'
export default function CremoladasPage() {
  return (

    <main className='d-flex  justify-content-center container'>


      <section className='row justify-content-center'>
        <h1>Carta de Pura Fruta</h1>

        <div className="col col-md-6">
          <CardCremolada />
        </div>
        <div className="col col-md-6">
          <CardCremolada />
        </div>
        <div className="col col-md-6">
          <CardCremolada />
        </div>
        <div className="col col-md-6">
          <CardCremolada />
        </div>



      </section>
    </main>
  )
}
