import React from 'react'

import cremoladas from './../assets/tamaños_2.jpg'
import lucuma from './../assets/LUCUMA.png'
import mango from './../assets/mango.jpg'
import testimonio from './../assets/apoyo.jpg'

export default function InicioPage() {
  return (

    <main>
      {/* Introduccion */}
      <section>
        <h1>CREMOLADAS DE PURA HECHOS CON EL SABOR PERUANO</h1>
        <article>

          <p>El amor de Okasan es el secreto de nuestras delicias. Nuestros postres japoneses representan el corazón y el alma de la tradición culinaria japonesa</p>
          <img src={cremoladas} alt="" />
        </article>
      </section>

      {/* Nuevos Sabores */}
      <section>
        <h1>Nuevos Sabores</h1>
        <div className='sabores'>

          <figure>
            <img src={mango} alt="" />
            {/* <img src={lucuma} alt="" /> */}
            <figcaption>Sabor Lucuma</figcaption>
          </figure>
          <figure>
            <img src={mango} alt="" />
            <figcaption>Sabor Lucuma</figcaption>
          </figure>
        </div>

      </section>
      {/* Testimonios */}
      <section className='testimoniio'>
        <h1>Testimonios</h1>
        <article>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quas. Rem ducimus consequuntur non molestias dolore voluptatem laborum fugit, optio eum id corporis dolor dignissimos sequi maiores commodi ex odit.</p>

          <img src={testimonio} alt="" />
        </article>
      </section>


    </main>
  )
}
