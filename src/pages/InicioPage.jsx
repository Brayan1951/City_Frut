import React from 'react'

import cremoladas from './../assets/tamaños_2.jpg'

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
        <h1>Nuenos Sabores</h1>
      </section>
      {/* Testimonios */}
      <section>
        <h1>Testimonios</h1>
      </section>


    </main>
  )
}
