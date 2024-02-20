import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='notfound'>
      NotFoundPage
      <Link to={'/'}>Regresa aqui</Link>

    </div>
  )
}
