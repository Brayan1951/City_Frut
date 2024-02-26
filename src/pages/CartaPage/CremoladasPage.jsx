import React from 'react'
import CardCremolada from '../../components/CardCremolada'
// import chocolate from 'src'



export default function CremoladasPage() {

  const imagenes = [
    {
      nombre: 'Cremolada de Chocolate',
      alt: 'Cremolada de chocolate',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a chochomilk!!',
      ruta: "./src/assets/img/icon_chocolate.png"
    },
    {
      nombre: 'Cremolada de fresa',
      alt: 'Cremolada de fresa',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a Fresa!!',
      ruta: "./src/assets/img/icon_fresa.png"
    },
    {
      nombre: 'Cremolada de coco',
      alt: 'Cremolada de coco',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a coco!!',
      ruta: "./src/assets/img/icon_coco.png"
    },
    {
      nombre: 'Cremolada de guanabana',
      alt: 'Cremolada de guanabana',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a guanabana!!',
      ruta: "./src/assets/img/icon_guanabana.png"
    },
    {
      nombre: 'Cremolada de lucuma',
      alt: 'Cremolada de lucuma',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a lucuma!!',
      ruta: "./src/assets/img/icon_lucuma.png"
    },
    {
      nombre: 'Cremolada de piña',
      alt: 'Cremolada de piña',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a piña!!',
      ruta: "./src/assets/img/icon_piña.png"
    },
    {
      nombre: 'Cremolada de menta',
      alt: 'Cremolada de menta',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a menta!!',
      ruta: "./src/assets/img/icon_menta.png"
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
