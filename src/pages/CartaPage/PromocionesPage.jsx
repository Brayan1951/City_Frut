import React from 'react'
import sorteo from './../../assets/sorteo.jpg'
import ami from './../../assets/apoyo.jpg'

export default function PromocionesPage() {
  return (

    <main>
      <h1 className='text-center my-5'>Promociones y Sorteos</h1>
      <section className='promocion'>

        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-4 row text-center align-items-center">
              <img src={sorteo} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <h2 className="card-title text-center mt-5">Promocion de Apertura</h2>
                <p className="card-text px-4 py-4 fs-4  lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vel nemo qui magni, explicabo inventore vero animi, eligendi obcaecati veritatis ab distinctio! Minima beatae unde adipisci obcaecati maiores fuga. Sunt.
                Ut fuga autem eligendi dolor quibusdam aut vel alias aspernatur qui! In illum facilis maiores et voluptas, cumque mollitia ex unde omnis possimus aperiam fugiat tempore rerum totam rem quidem.
                Enim odit ullam deleniti aliquam amet hic aliquid repellat? Animi esse veniam aut qui! Omnis voluptates tempora suscipit! Quisquam libero accusantium ea animi voluptates sequi officiis pariatur ducimus a suscipit?
                </p>
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" >
          <div className="row g-0">
            
            <div className="col-md-8 ">
                <h2 className="card-title text-center mt-5">Promocion de San valentin</h2>
                <p className="card-text px-4 py-4 fs-4  lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vel nemo qui magni, explicabo inventore vero animi, eligendi obcaecati veritatis ab distinctio! Minima beatae unde adipisci obcaecati maiores fuga. Sunt.
                Ut fuga autem eligendi dolor quibusdam aut vel alias aspernatur qui! In illum facilis maiores et voluptas, cumque mollitia ex unde omnis possimus aperiam fugiat tempore rerum totam rem quidem.
                Enim odit ullam deleniti aliquam amet hic aliquid repellat? Animi esse veniam aut qui! Omnis voluptates tempora suscipit! Quisquam libero accusantium ea animi voluptates sequi officiis pariatur ducimus a suscipit?
                </p>
              <div className="card-body">
              </div>
            </div>
            <div className="col-md-4 row text-center align-items-center">
              <img src={ami} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
       


      </section>
    </main>

  )
}
