import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteCategory, getAllCategory, getVideoDetails, updateCategory, uploadAllCategory } from '../services/allAPI';
import VideoCard from './VideoCard';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allCategory, setAllCategory] = useState([])
  const [isDelete, setisDelete] = useState([])
  const [category, setcategory] = useState({
    id: "",
    categoryName: "",
    allVideos: ""
  })
  const getCategoryFromDB = async () => {
    const response = await getAllCategory();
    const { data } = response;
    setAllCategory(data)
  }
  useEffect(() => {
    getCategoryFromDB();
  }, { isDelete })
  const uploadCategory = async () => {
    const { id, categoryName } = category;
    if (!id || !categoryName) {
      toast.warning("please fill form completely")
    }
    else {
      const response = await uploadAllCategory(category);
      console.log(response);
      if (response.status == 201) {
        toast.success(`${response.data.categoryName} is succefully uploaded`);
        handleClose();
        getCategoryFromDB();
      }
      else {
        toast.error("something went wrong")
      }
    }
    // console.log(category);
  }

  const deleteCategoryItem = async (id) => {
    const response = await deleteCategory(id);
    setisDelete(response)
  }
  const dragOver = (e) => {
    e.preventDefault();
    console.log("drag over===");
  }
  const videoDrop = async (e, id) => {
    console.log(`video card need to be placed in card with id ${id}`);
    const videoid = e.dataTransfer.getData('VideoId');
    console.log(`video id with id ${videoid} need to be placed in category with id ${id}`);
    const response = await getVideoDetails(videoid);
    const { data } = response;
    console.log("video details");
    console.log(response);
    const selectedCategory = allCategory?.find((item) => item.id == id);
    console.log("selected category", selectedCategory)
    selectedCategory.allVideos.push(data);
    console.log("====selected category with video details==");
    console.log(selectedCategory);
    await updateCategory(id,selectedCategory)
    getCategoryFromDB();
  }
  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      </div>
      {
        allCategory?.length > 0 ?
          allCategory.map((item) => (
            <div className='d-grid ms-3' style={{ width: "300px" }} droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)}>
              <div className='m-5 border border-secondary rounded p-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <h5 style={{ color: 'white' }}>{item.categoryName}</h5>
                  <button className='btnbtn-warning'><i class="fa-solid fa-trash" onClick={() => deleteCategoryItem(item.id)}></i></button>
                </div>
<Row>
  <Col sm={12}>
    {
      item.allVideos?.length>0?
      item.allVideos.map(video=>(<VideoCard displayVideo={video}/>))
      :
      <p>No item</p>
    }
  </Col>
</Row>
              </div>
            </div>
          ))
          :
          <p>nothing to display</p>
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-pencil text-warning me-2"></i>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontFamily: "-moz-initial" }}>Please fill the following details</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3 " >
              <Form.Control type="text" placeholder="Enter Category Id" onChange={(e) => setcategory({ ...category, id: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter Category Name " onChange={(e) => setcategory({ ...category, categoryName: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={uploadCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>

    </>
  )
}

export default Category