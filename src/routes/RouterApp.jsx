import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {HomePage,CartaPage,Conocenos,NotFoundPage, InicioPage} from '../pages'


export default function RouterApp() {

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
                    path:'conocenos', element:<Conocenos/>
                },
            ]
        },
      
        {
            path:'*', element:<NotFoundPage/>
        }
    ])


  return router
}
