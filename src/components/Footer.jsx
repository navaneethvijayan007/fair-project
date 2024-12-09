import React from 'react'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{width:'400px'}}>
          <h5><i className="fa-solid fa-music me-2"></i>Project Fair</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed VRTX, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className="d-flex flex-column">
          <h5>Links</h5>
          <a href={'/'} style={{textDecoration:'none',color:'white'}}>Home</a>
          <a href={'/login'} style={{textDecoration:'none',color:'white'}}>Login</a>
          <a href={'/register'} style={{textDecoration:'none',color:'white'}}>Register</a>
        </div>
        {/* guides */}
        <div className="d-flex flex-column">
          <a style={{textDecoration:'none',color:'white'}} href="https://react.dev/" target='_blank'>React</a>
          <a style={{textDecoration:'none',color:'white'}} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
          <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.github.io/" target='_blank'>React Bootstrap</a>
        </div>
        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='Enter Your Email!!' type="text" className='form-control me-2'/>
            <button className="btn btn-info"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-3">copyright &copy; July Batch, Project Fair. Built With React</p>
    </div>
  )
}

export default Footer