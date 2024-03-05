import React from 'react'
// import sorteo from './../../assets/sorteo.jpg'
// import ami from './../../assets/apoyo.jpg'
import sorteo from './../../assets/img/sorteo.jpg'
import ami from './../../assets/img/apoyo.jpg'

export default function PromocionesPage() {
  return (

    <main>
      <h1 className='text-center my-5'>Promociones y Sorteos</h1>
      <section className='promocion mx-1 mx-md-5 px-md-5'>

        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-lg-4  col-ms-4 row text-center align-items-center">
              <img src={sorteo} className="img-fluid rounded-start p-3" alt="promocion sorteo" />
            </div>
            <div className="col-lg-8 col-ms-8 ">
                <h2 className="card-title text-center mt-5">Promocion de Apertura</h2>
                <p className="card-text px-4 py-4 fs-4  lh-lg">

                Acercate toda la primera semana de abril<br/>
                CityFrut ha enloquecido, ganate una <strong> Super Copa </strong> de Edicion especial <br/>
                Solo tienes que seguir los siguientes pasos
                <ol>
                  <li>Resfrecate pidiendo tu cremolada favorita</li>
                  <li>Tomale Foto y sube tu historia a instragran eiquetando  <a target='_blank' href="https://www.instagram.com/cityfrut_/">@CityFrut</a> </li>
                  <li>Pasale la voz a tus amigos y que le den ❤️</li>
                </ol>
                La historia con más ❤️ ganara la <strong> Super Copa </strong>

                </p>
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3" >
          <div className="row g-0">
            
            <div className=" col-lg-8 col-ms-8  accordion  ">
                <h2 className="card-title text-center mt-5">Promocion de San valentin</h2>
                <p className="card-text px-4 py-4 fs-4  lh-lg">
                CityFrut esta modo romantico <br/>
                Hoy por el dia del amor y de la amistad, nuestros local esta ambientado para esos buenos momentos<br/>
                Y que mejor manera de hacerlos con una refrescante cremolada. <br/>
                Solo por hoy tambien estamos ofrenciendo aparetivos y bebidas <br/>
                En nuestro nuevo menu de Valentin tenemos:
                <ul>
                <li>Triples</li>  
                <li>Tostadas</li>  
                <li>Pancakes</li>  
                <li>Infusiones</li>  
                <li>Cafe y Capuccion</li>  
                </ul>  
                  
              
                </p>
              <div className="card-body">
              </div>
            </div>
            <div className="col-lg-4  col-ms-4  row text-center align-items-center">
              <img src={`./${ami}`}  className="img-fluid rounded-start p-3" alt="promocion san valentin" />
            </div>
          </div>
        </div>
       


      </section>
    </main>

  )
}
