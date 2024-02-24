import React from 'react'
// import fruta from "./../assets/purafruta.jpg"
import fruta from "./../assets/img/purafruta.jpg"

export default function CardCremolada() {
  return (
    <div className=" cremolada card m-3" >
    <div className="row g-0">
      <div className="col-md-5">
        <img src={`./${fruta}`}   className="img-fluid rounded-start" alt="" />
      </div>
      <div className="col-md">
        <div className="card-body ">
          <h5 className="card-title text-center py-2">Cremolada de Chocolate</h5>
          <p className="text-center pt-lg-5">Para los amantes a lo dulce, cremolada sabor a chochomilk!!</p>
        </div>
      </div>
    </div>
  </div>
  )
}
