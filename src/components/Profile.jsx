import React,{useState} from 'react'
import { Collapse } from 'react-bootstrap';
import profile from '../assets/profile.jpg'
const Profile = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
     <div className="d-flex justify-content-evenly">
        <h3 className='text-warning'>Profile</h3>
        <button onClick={()=>setOpen(!open)} className='btn text-warning'><i className="fa-solid fa-chevron-down"></i></button>
     </div> 
     <Collapse in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-collapse-text">
            {/* upload picture */}
            <label className='text-center'>
                <input style={{display:'none'}} type="file" />
                <img width={'200px'} height={'200px'} className='rounded-circle' src={profile} alt="" />
            </label>
          <div className="mb-2 w-100">
            <input type="text" placeholder='user GITHUB Link' className='form-control' />
          </div>
          <div className="mb-2 w-100">
            <input type="text" placeholder='user LINKEDIN Link' className='form-control' />
          </div>
          <div className="d-grid w-100">
            <button className='btn btn-warning'>Update</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile
