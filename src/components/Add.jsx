import React from "react"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadALLVideo } from "../services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideosStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [video, setVideo]=useState({
  id:"",
  caption:"",
  url:"",
  embededLink:""
})
const embededVideoLink=(e)=>{
  const{value}=e.target;
  const link= `https://www.youtube.com/embed/${value.slice(-11)}`
  console.log("link for embeding vide0");
  console.log("link");
  console.log(link);
  setVideo({...video,embededLink:link});
}
const handleUpload = async() =>{
  const{id,caption,url,embededLink}=video;
  if(!id || !caption || !url || !embededLink){
    // alert("Please fill the form completely")
    toast.warning("please fill form completely")
  }
  else{
    const response = await uploadALLVideo(video);
    console.log(response);
    if(response.status == 201){
    toast.success(`${response.data.caption} is successfully uploaded`)
     setUploadVideosStatus(response.data)
      handleClose();
    }
    toast.error("something went wrong")
  }
}

  return (
    <div>
      <div className="d-flex align-items-center">
        <h5>Upload new video  <i className="fa-solid fa-cloud-arrow-up ms-3" onClick={handleShow}></i></h5>
      </div>
    

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: '23px' }}> <i class="fa-solid fa-film text-warning me-2"></i>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className="border border-secondary p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Id" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Video Image Url" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={(e)=>embededVideoLink(e)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className="btn btn-warning" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </div>
  )
}

export default Add;