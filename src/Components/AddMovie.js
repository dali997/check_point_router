import React,{useState} from 'react'
import {Button, Modal,Form} from "react-bootstrap"
const AddMovie = ({handleMovie}) => {
    const [show, setShow] = useState(false);
    const [name,setName] =useState("");
    const [image,setImage] =useState("");
    const [rating,setRating] =useState(0);
    const [description,setDescription] =useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  
    return (
      <div style={{margin:"1rem 46%" , alignItems:"center", width:"8rem"}}>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="text" placeholder="Movie Title" onChange={(e)=>setName(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Image" onChange={(e)=>setImage(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Rating</Form.Label>
    <Form.Control type="number" placeholder="Rating" onChange={(e)=>setRating(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleMovie({id:Math.random(),name,image,rating,description});handleClose()} } >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  
}

export default AddMovie
