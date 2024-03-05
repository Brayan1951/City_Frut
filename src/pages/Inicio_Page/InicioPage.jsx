import React, { useEffect, useState } from 'react'
import './inicio.css'

import cremoladas from './../../assets/img/tamaños_2.jpg'

// sabores
import chocolate from './../../assets/img/icon_chocolate.png'
import piña from './../../assets/img/icon_piña.png'
import fresa from './../../assets/img/icon_fresa.png'
import coco from './../../assets/img/icon_coco.png'
import guanabana from './../../assets/img/icon_guanabana.png'
import lucuma from './../../assets/img/icon_lucuma.png'
import menta from './../../assets/img/icon_menta.png'





import testimonio from './../../assets/img/apoyo.jpg'
import NewSabores from '../../components/NewSabores'

export default function InicioPage() {

  const imagenes = [
    {
      nombre: 'Cremolada de Chocolate',
      alt: 'Cremolada de chocolate',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a chochomilk!!',
      ruta: chocolate
    },
    {
      nombre: 'Cremolada de fresa',
      alt: 'Cremolada de fresa',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a Fresa!!',
      ruta: fresa
    },
    {
      nombre: 'Cremolada de coco',
      alt: 'Cremolada de coco',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a coco!!',
      ruta: coco
    },
    {
      nombre: 'Cremolada de guanabana',
      alt: 'Cremolada de guanabana',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a guanabana!!',
      ruta: guanabana
    },
    {
      nombre: 'Cremolada de lucuma',
      alt: 'Cremolada de lucuma',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a lucuma!!',
      ruta: lucuma
    },
    {
      nombre: 'Cremolada de piña',
      alt: 'Cremolada de piña',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a piña!!',
      ruta: piña
    },
    {
      nombre: 'Cremolada de menta',
      alt: 'Cremolada de menta',
      descripcion: 'Para los amantes a lo dulce, cremolada sabor a menta!!',
      ruta: menta
    },
  ]

  const [card, setcard] = useState(0)
  const [Carrusel, setCarrusel] = useState([{ ...imagenes[0] }, { ...imagenes[1] }])


  useEffect(() => {

    const interval = setTimeout(() => {
      const nextCard = (card + 1) % imagenes.length;
      setCarrusel([{ ...imagenes[card] }, { ...imagenes[nextCard] }])
      setcard(nextCard);
    }, 1500);




    return () => {
      clearTimeout(interval);
    };

  }, [card, imagenes])






  return (

    <main>
      {/* Introduccion */}




      <section className='introduccion'>
        <h1>CREMOLADAS DE PURA HECHOS CON EL SABOR PERUANO</h1>
        <article className='row text-center'>
          <div className="col-md-6">

            <p>

              <em>

                "El amor de CityFrut es el secreto de nuestras delicias. Nuestros postres de pura fruta representan el corazón y el alma de la tradición Peruana"
              </em>

            </p>
          </div>
          <div className="col-md mx-auto">

            <img src={`./${cremoladas}`} alt="cremolada" />
          </div>
        </article>
      </section>







      {/* Nuevos Sabores */}
      <section className='sabores'>
        <h1>Nuevos Sabores</h1>
        <div className='row'>




          {
            Carrusel.map((val) => {

              return (<NewSabores ruta={val.ruta} nombre={val.nombre} ></NewSabores>)

            })
          }



        </div>

      </section>
      {/* Testimonios */}
      <section className='testimonio'>
        <h1>Testimonios</h1>
        <article className='descripcion row justify-content-center'>
          <div className="col-md-6">

            <p className='texto px-4'>

              <em>
              “Acerca de nuestra experiencia con CityFrut, la calidad de sus cremoladas son buenos,el sabor es uncio, la atencion siempre hacen sugerecias.<br/>
              Muy agradable, sobretodo para un cita”
              </em>

            </p>
          </div>
          <div className="col-md text-center">

            <img src={`./${testimonio}`} alt="foto de pareja" />
          </div>
        </article>
      </section>


    </main>
  )
}
