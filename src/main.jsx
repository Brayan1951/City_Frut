import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, RouterProvider } from 'react-router-dom'
import RouterApp from './routes/RouterApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={RouterApp()} />
)
