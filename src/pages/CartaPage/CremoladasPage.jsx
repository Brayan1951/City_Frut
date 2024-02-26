import React from 'react'
import CardCremolada from '../../components/CardCremolada'
import cremolada_chocolate from './../../assets/img/icon_chocolate.png'
import cremolada_fresa from './../../assets/img/icon_fresa.png'
import cremolada_coco from './../../assets/img/icon_coco.png'
import cremolada_guanabana from './../../assets/img/icon_guanabana.png'
import cremolada_lucuma from './../../assets/img/icon_lucuma.png'
import cremolada_menta from './../../assets/img/icon_menta.png'
import cremolada_piña from './../../assets/img/icon_piña.png'


export default function CremoladasPage() {

  const imagenes = [
    {
      nombre: 'Cremolada de Chocolate',
      alt: 'Cremolada de chocolate',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a chochomilk!!',
      ruta: cremolada_chocolate 
    },
    {
      nombre: 'Cremolada de fresa',
      alt: 'Cremolada de fresa',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a Fresa!!',
      ruta: cremolada_fresa
    },
    {
      nombre: 'Cremolada de coco',
      alt: 'Cremolada de coco',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a coco!!',
      ruta:cremolada_coco
    },
    {
      nombre: 'Cremolada de guanabana',
      alt: 'Cremolada de guanabana',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a guanabana!!',
      ruta:cremolada_guanabana
    },
    {
      nombre: 'Cremolada de lucuma',
      alt: 'Cremolada de lucuma',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a lucuma!!',
      ruta:cremolada_lucuma
    },
    {
      nombre: 'Cremolada de piña',
      alt: 'Cremolada de piña',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a piña!!',
      ruta:cremolada_menta
    },
    {
      nombre: 'Cremolada de menta',
      alt: 'Cremolada de menta',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a menta!!',
      ruta:cremolada_piña
    },
  ]






  return (

    <main className='d-flex  justify-content-center container'>


      <section className='row justify-content-center'>
        <h1>Carta de Pura Fruta</h1>


        {
          imagenes.map((cremolada, i) => {

            return (
              <div key={i} className="col col-md-6 p-2">
                <CardCremolada cremolada={cremolada} />
              </div>
            )
          })
        }

      </section>
    </main>
  )
}
