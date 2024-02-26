import React from 'react'
// import apoyo from '../../assets/apoyo.jpg'
import './conocenos.css'
import apoyo from '../../assets/img/apoyo.jpg'

export default function Conocenos() {
  return (
    <main>
      <section className='nosotros text-center mt-4'>
        <h3>Sobre nosotros </h3>
        <div className="mt-3 mb-5 px-5">

        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem cum nihil. Repellendus architecto, voluptatum, vero perferendis culpa suscipit voluptatibus iusto commodi aspernatur laudantium aliquam officia laboriosam necessitatibus rerum natus.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At non cumque corrupti laudantium tempore neque? Reprehenderit soluta, illo excepturi debitis dolor cumque itaque ad molestias dolorum ex, ipsa distinctio aperiam.
        Doloremque in, autem consequuntur totam nostrum rem cupiditate, cum aperiam sit asperiores nobis similique inventore neque voluptates repellat odio soluta dolore officia architecto accusamus laborum harum ipsum nisi! Minima, numquam.</p>
        </div>
      </section>

      <section className='conocenos'>

        <h2 className='text-center'>Queremos saber tu opinion</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam quia itaque corrupti nam voluptatibus nihil! Nulla dolor non blanditiis velit tempore omnis natus aut sed nesciunt, cum dolorem fugit?</p>

        <div className="opinion row p-5">

          <form className=" col-md-6 row g-3">

            <div className="col-md-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingInputGrid" placeholder="Juanito Alachofa" />
                <label className="floatingInputGrid">Nombre</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input type="tel" className="form-control" id="floatingInputGrid" placeholder="997151921" />
                <label className="floatingInputGrid">Numero cel ular</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">

                <input type="email" className="form-control" id="floatingInputGrid" placeholder="hola@chau.com" />
                <label className="floatingInputGrid">Correo electronico</label>
              </div>
            </div>

            <div className="col-12">
              <div className="form-floating">
                <textarea className="form-control" placeholder="Comenta aqui" id="floatingTextarea" style={{ minHeight: '250px' }} rows={'5'} cols={'5'}></textarea>
                <label className="floatingTextarea">Cuentanos tu experiencia</label>
              </div>
            </div>

          </form>
          <div className=" col-md-6 mt-2  p-md-3">
            <img src={`./${apoyo}`} alt="foto de pareja" />
          </div>

        </div>


      </section>



    </main>



  )
}
