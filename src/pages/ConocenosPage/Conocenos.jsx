import React from 'react'
// import apoyo from '../../assets/apoyo.jpg'
import './conocenos.css'
import apoyo from '../../assets/img/apoyo.jpg'

export default function Conocenos() {
  return (
    <main>
      <section className='nosotros text-center mt-4'>
        <h3>Sobre nosotros </h3>
        <div className="mt-3 mb-5 ">

        <p className=''>Somos una familia emprendedora que por diversas y divertidas prubeas estamos enfrentando la situacion del Perú de una manera muy refrescante y delicisa</p>
        <p>
        Lima es la capital del Perú, la cual tiene muchos dificultades que existen. <br/>
        Entre una de ellas son las altas olas de calor que se esta afectando al país, donde los lugares turísticos o fuentes de soda, que brindan un servicio de venta de productos fríos, son recurrentes para los extranjeros y peruanos que quieren refrescarse para de alguna forma de combatir el calor de manera refrescante y divertida.
        
        </p>



        </div>
      </section>

      <section className='conocenos'>

        <h2 className='text-center'>Queremos saber tu opinion</h2>
        <p>Nosotrs la empresa cityfrtu te agradecemos por llegar hasta aquí, es por eso que queremos mejorar para brindarles la mejor experiencia posible, y una de las maneras que podemos conseguirlo es con la ayuda de ustedes con sus mensajes</p>

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
            {/* <div className="col-12"> */}
              <button className='col-12 btn btn-outline-success my-2'>Enviar</button>
            {/* </div> */}

          </form>
          <div className=" col-md-6 mt-2  p-md-3">
            <img src={`./${apoyo}`} alt="foto de pareja" />
          </div>

        </div>


      </section>



    </main>



  )
}
