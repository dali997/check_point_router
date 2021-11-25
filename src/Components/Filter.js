import React from 'react'
import { Navbar, Container , Nav ,Form,FormControl,Button} from 'react-bootstrap'
import {Rating} from "@mui/material"
import { Link } from 'react-router-dom'
const Filter = ({setFilterTitle,setFilterRating}) => {
    return (
        <div>

<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">GoMyCode MOVIES</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/Home">Home</Nav.Link>
        <Nav.Link >
        <Link to ='/about'> about </Link>  </Nav.Link>
        
        <Nav.Link href="#" disabled>  Features </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search me"
          className="me-2"
          onChange={(e)=>setFilterTitle(e.target.value)} 
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Rating style={{margin:"0px 200px"}}
  name="simple-controlled"

  onChange={(event, newValue) => {
    setFilterRating(newValue);
  }}
/>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
}
export default Filter