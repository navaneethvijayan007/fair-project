import React, { useContext, useState } from 'react'
import login from '../assets/login.png'
import { Form, FloatingLabel,Spinner } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'
import { tokenContext } from '../contexts/TokenAuth'

const Auth = ({ insideRegister }) => {
  const  {authorisedUser,setAuthorisedUser} = useContext(tokenContext)
  const [isLogin,setLogin] = useState(false)
  const navigate = useNavigate()
  const [userInput,setUserInput] = useState({
    username:"",email:"",password:""
  })
  // console.log(userInput);

  const register = async (e) => {
    e.preventDefault()
    if(userInput.username && userInput.password && userInput.email){
      //api call
      try{
        const result = await registerAPI(userInput)
        if(result.status==200){
          alert(`Welcome ${result.data?.username}, please login to explore our projects!!`)
          navigate('/login')
          setUserInput({username:"",email:"",password:""})
        }else{
          if(result.response.status==406){
            alert(result.response.data)
            setUserInput({username:"",email:"",password:""})
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form completely!!")
    }
  }

  const login = async(e) => {
    e.preventDefault()
    if(userInput.password && userInput.email){
      //api call
      try{
        const result = await loginAPI(userInput)
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setLogin(true)
          setAuthorisedUser(true)
          setTimeout( () => {
            navigate('/')
            setUserInput({username:"",email:"",password:""})
            setLogin(false)
          }, 2000)
        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form completely!!")
    }
  }


  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={login} alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className='my-2'><i className='fa-brands fa-docker'>Project fair</i></h1>
              <h5>sign{insideRegister ? 'up' : 'in'} to your Account</h5>
              <Form>
                {
                  insideRegister &&
                  <FloatingLabel controlId="floatinginputUserName" label="username" className='mb-3'>
                    <Form.Control value={userInput.username}
                      onChange={e => setUserInput({ ...userInput, username: e.target.value })}
                      type="text" placeholder="username" />
                  </FloatingLabel>
                }

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control value={userInput.email}
                    onChange={e => setUserInput({ ...userInput, email: e.target.value })}
                    type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control value={userInput.password}
                    onChange={e => setUserInput({ ...userInput, password: e.target.value })}
                    type="password" placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                    <div className="mt-3">
                      <button onClick={register} className='btn btn-primary mb-2'>Register</button>
                      <p>Existing user? Please click here to <Link to={'/login'}>Login</Link></p>
                    </div>
                    :
                    <div className="mt-3">
                      <button onClick={login} className='btn btn-primary mb-2'>
                        Login
                       { isLogin && <Spinner animation="border" variant="info" className='ms-1' />}
                      </button>
                      <p>New user? please click here to <Link to={'/register'}>Register</Link></p>
                    </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
