import React from 'react'

export default function NewSabores({ruta,nombre}) {

    return (
        <figure className="col-md-6 row justify-content-center">
            <img src={`./${ruta}`} alt="crenolada de chocolate" />
            {/* <img src={`./${chocolate}`} alt="crenolada de chocolate" /> */}
            <figcaption className='text-center'>
                <h2>
                    {nombre}
                </h2>
            </figcaption>
        </figure>
    )
}
