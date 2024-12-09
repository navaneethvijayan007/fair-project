
import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import uploadimg from '../assets/uploadimg.jpg'

const Edit = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  
    <>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-edit"></i></button>
      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} />
                <img className='img-fluid' height={'200px'} src={uploadimg} alt="" />
              </label>
              <div className="text-warning fw-border">
                *upload only the following file types(jpeg,jpg,png) here!!!!
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder="Project Tile" />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder="Project language" />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder="Project overview" />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder="Project github link" />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder="Project website link" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary">UPDATE+</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit
