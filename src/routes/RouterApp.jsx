import React from 'react'
import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import {HomePage,CartaPage,Conocenos,NotFoundPage, InicioPage, CremoladasPage, PromocionesPage} from '../pages'


export default function RouterApp() {
    const routerBaseName='/City_Frut'

    const router=createBrowserRouter([
        {
            path:'/',element:<HomePage/>,children:[
                {
                    path:'/', element:<InicioPage/>
                },
                {
                    path:'carta', element:<CartaPage/>
                },
                {
                    path:'carta/cremoladas', element:<CremoladasPage/>
                },
                {
                    path:'carta/promociones', element:<PromocionesPage/>
                },
                {
                    path:'conocenos', element:<Conocenos/>
                },
                {
                    path:'*', element:<NotFoundPage/>
                }
            ]
        },
        {
            path:'*', element:<NotFoundPage/>
        }
    ])


  return router
}
