import React from 'react'
// import fruta from "./../assets/purafruta.jpg"
// import fruta from "./../assets/img/purafruta.jpg"

export default function CardCremolada({cremolada}) {
  const {nombre,alt,descripcion,ruta} =cremolada
  console.log(cremolada);

  return (
    <div className=" cremolada card m-md-3 p-3 p-md-0" >
    <div className="row g-0">
      <div className="col-md-5">
        <img src={`${ruta}`}   className="img-fluid rounded-start" alt={alt} />
      </div>
      <div className="col-md">
        <div className="card-body ">
          <h5 className="card-title text-center py-2">{nombre}</h5>
          <p className="text-center pt-lg-5">{descripcion}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
