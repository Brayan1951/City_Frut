import React from 'react'
import './inicio.css'
// import cremoladas from './../../assets/tamaños_2.jpg'
import cremoladas from './../../assets/img/tamaños_2.jpg'
import mango from './../../assets/img/icon_chocolate.png'
import piña from './../../assets/img/icon_piña.png'
import testimonio from './../../assets/img/apoyo.jpg'

export default function InicioPage() {
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

            <img src={cremoladas} alt="" />
          </div>
        </article>
      </section>







      {/* Nuevos Sabores */}
      <section className='sabores'>
        <h1>Nuevos Sabores</h1>
        <div className='row'>

          <figure className="col-md-6 row justify-content-center">
            <img src={mango} alt="" />
            {/* <img src={lucuma} alt="" /> */}
            <figcaption className='text-center'>
              <h2>
                Sabor Chocolate
              </h2>
            </figcaption>
          </figure>
          <figure className="col-md row justify-content-center">
            <img src={piña} alt="" />
            <figcaption className='text-center'>
              <h2>
                Sabor Piña
              </h2>
            </figcaption>
          </figure>
        </div>

      </section>
      {/* Testimonios */}
      <section className='testimonio'>
        <h1>Testimonios</h1>
        <article className='descripcion row justify-content-center'>
          <div className="col-md-6">

            <p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas. Rem ducimus consequuntur non molestias dolore voluptatem laborum fugit, optio eum id corporis dolor dignissimos sequi maiores commodi ex odit.

            </p>
          </div>
          <div className="col-md text-center">

            <img src={testimonio} alt="" />
          </div>
        </article>
      </section>


    </main>
  )
}
