import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{fontSize:'80px'}}>404</h1>
      <img className='img-fluid' src="" alt="" />
      <h1>Looks Like You Are Lost</h1>
      <p>Sorry, the page you are looking for does not exist!!!</p>
      <Link to={'/'} className='btn btn-warning'>Go To HOME</Link>
    </div>
  )
}

export default Pnf
