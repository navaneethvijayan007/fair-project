import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landing from '../assets/landing.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectAPI } from '../services/allAPI'

const Home = () => {
  const navigate = useNavigate()
  const [homeProjects,setHomeProjects] = useState([])
  const [isLogin, setIsLogin] = useState(false)

  console.log(homeProjects);
  

  useEffect(()=>{
    getHomeProjects()
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])

  const getHomeProjects = async()=>{
    try{
      const result = await homeProjectAPI()
      console.log(result);
      if(result.status==200){
        setHomeProjects(result.data)
      }
    }catch{
      console.log(err);
      
    }
  }

  const handleNavigateToProject=()=>{
    //user is logined
    if(sessionStorage.getItem("token")){
      //authorised user then redirect
      navigate('/projects')
    }else{
      alert("please login to get full access to our projects!!!")
    }
  }

  return (
    <>
      {/* Landing */}
      <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col lg-6">
              <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects.
                 Where User can add and manage their projects. As well as access all projects available in our 
                 website... What are you waiting for!!!.
              </p>
              {
                isLogin?
                <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
                :
                <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
              }
            </div>
            <div className="col-lg-6">
              <img src={landing} alt="no img" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Explore */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
           {
            homeProjects?.map(project=>(
            <div className="me-5">
              <ProjectCard displayData={project}/>
            </div>
            ))
           }
          </div>
        </marquee>
        <button onClick={handleNavigateToProject} className="btn btn-link mt-5">Click here to see more projects...</button>
      </div>

      {/* Testimonial */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Our Testimonial</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          {/* Card */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} src="https://i.pinimg.com/control2/736x/50/d4/29/50d429ea5c9afe0ef9cb3c96f784bea4.jpg" alt="no img" className="rounded-circle img-fluid" />
                <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                </div>
                <p style={{textAlign:'justify'}}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} src="https://i.pinimg.com/736x/47/60/a0/4760a06d6703776b9fb943648eef05c4.jpg" alt="no img" className="rounded-circle img-fluid" />
                <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                </div>
                <p style={{textAlign:'justify'}}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} src="https://i.pinimg.com/control2/736x/85/09/96/8509969333340fbf29df0cdeb14ea94b.jpg" alt="no img" className="rounded-circle img-fluid" />
                <div className="d-flex justify-content-center my-2">
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                  <i className="fa-solid fa-star text-warning me-1"></i>
                </div>
                <p style={{textAlign:'justify'}}>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          
        </div>
      </div>

    </>
  )
}
export default Home
