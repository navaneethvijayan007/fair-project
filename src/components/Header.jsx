import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({insideDashBoard}) => {
  return (
    <>
      <Navbar style={{zIndex:1}} className="shadow border rounded position-fixed w-100">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='text-decoration-none fw-bolder'><i className='fa-brands fa-docker'></i>Project Fair</Link>
          </Navbar.Brand>
          {
            insideDashBoard &&
            <button className='btn btn-link'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header
