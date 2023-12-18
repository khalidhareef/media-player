import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {addToHistory, deleteVideo } from '../services/allAPI';

function VideoCard({displayVideo, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () =>{

  setShow(true);
  const {caption,embededLink}=displayVideo;
  console.log("video Details");
  console.log(caption);
  console.log(embededLink)
  const today = new Date;
  const  timeStamp = new Intl.DateTimeFormat('en-us',
  {
    year:'numeric',
    month:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
  }).format(today)
  console.log(timeStamp);
  let videoDetails={
    caption:caption,
    embededLink:embededLink,
    timeStamp:timeStamp
  }
await addToHistory(videoDetails)
  };
const removeVideo=async(id)=>{
  const response=await deleteVideo(id);
  console.log(response);
  setDeleteVideoStatus(true)
}
const dragStarted=(e,id)=>{
  console.log(`video card with id ${id} started dragging`);
  e.dataTransfer.setData("VideoId",id)
}
  return (
    <>
     <Card style={{ width: '18rem' }} className='mt-5 mb-5' draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
      <Card.Img height="300px" variant="top" src={displayVideo.url} onClick={handleShow} />
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <Card.Text>{displayVideo.caption} </Card.Text>
        <Button variant="warning" className='mt-5' onClick={()=>removeVideo(displayVideo.id)}>
          <i class="fa-solid fa-trash"></i>
        </Button>
        </div>
      </Card.Body>

    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <iframe width="450px" height={'300px'} src={displayVideo.embededLink}  frameborder="0" allow="accelerometer;autoplay; web-share; picture-in-picture" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default VideoCard;