import React,{useEffect, useState} from 'react'
import { Collapse } from 'react-bootstrap';
import profile from '../assets/profile.jpg'
import SERVER_BASE_URL from '../services/serverUrl';

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [preview,setPreview] = useState("")
  const [existingProfilePic, setExistingProfilePic] = useState("")
  const [userDetails, setUserDetails] = useState({
    username:"", email:"", password:"", github:"", linkedin:"", profilePic:""
  })
  console.log(userDetails)
  useEffect(() => {
    if(sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user")) 
      setUserDetails({
        ...userDetails,username:user.username, email:user.email, password:user.password, github:user.github,linkedin:user.linkedin
      })
      setExistingProfilePic(user.profilePic)
    }
  },[open])

  // generate url for upload profile pic
  useEffect(() => {
    if(userDetails.profilePic) {
      setPreview(URL.createObjectURL(userDetails.profilePic))
    } else {
      setPreview("")
    }
  },[userDetails.profilePic])

  const handleUserUpdate = async()=>{
    const {username,email,password,github,linkedin,profilePic} = userDetails
    if(github && linkedin){
      const reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview ? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",existingProfilePic)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization" :` Bearer ${token}`
        }
        // make api call
      }
    }else{
      alert("please fill the form completely")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className="text-warning">Profile</h3>
        <button onClick={()=>setOpen(!open)} className="btn text-warning"><i className="fa-solid fa-chevron-down"></i></button>
      </div>

      <Collapse in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-collapse-text">
          <label className='text-center'>
            <input onChange={e => setUserDetails({...userDetails, profilePic:e.target.files[0]})} style={{display:'none'}} type="file" />
            {
              existingProfilePic==""?
              <img width={'150px'} height={'150px'} className="rounded-circle mb-2" src={preview?preview:profile} alt="profile pic" />
              :
              <img width={'150px'} height={'150px'} className="rounded-circle mb-2" src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingProfilePic}`} alt="profile pic" />
            }
            
          </label>
          <div className="mb-2 w-100">
            <input value={userDetails.github} onChange={e => setUserDetails ({...userDetails,github:e.target.value})} type="text" placeholder='User GitHub Link' className="form-control" />
          </div>
          <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e => setUserDetails ({...userDetails,linkedin:e.target.value})} type="text" placeholder='User LinkedIn Link' className="form-control" />
          </div>
          <div className="d-grid w-100">
            <button className="btn btn-warning">Update</button>
          </div>
        </div>
      </Collapse>

    </>
  )
}

export default Profile