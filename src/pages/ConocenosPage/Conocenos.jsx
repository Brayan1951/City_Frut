import React from 'react'
import apoyo from '../../assets/apoyo.jpg'

export default function Conocenos() {
  return (
    <main>


      <section>

        <h2 className='text-center'>Queremos saber tu opinion</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam quia itaque corrupti nam voluptatibus nihil! Nulla dolor non blanditiis velit tempore omnis natus aut sed nesciunt, cum dolorem fugit?</p>

        <div className="row p-5">

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
          <div className="col-6">
            <img src={apoyo} alt="" />
          </div>

        </div>


      </section>



    </main>



  )
}
